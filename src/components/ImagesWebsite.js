import React, { Component } from 'react';
import gql from 'graphql-tag';
import ImagesGrid from './ImagesGrid';
import ImageWebsiteGridItem from './ImagesWebsiteGridItem';
import { IMAGES_PER_PAGE } from '../utils/constants';

const IMAGES_QUERY = gql`
  query($filter: ImageFilter, $first: Int, $skip: Int) {
      allImages(first: $first, skip: $skip, filter: $filter) {
        id
        previewUrl
        displayName
        website {
          name
        }
        patterns {
          name
        }
      }
  }
`;
class ImagesWebsite extends Component {

  state = {
    images: [],
    first: IMAGES_PER_PAGE,
    skip: 0,
    hasMore: true
  };

  componentDidMount() {
    this.runImagesQuery();
  }

  runImagesQuery() {
    this.props.client
      .query({
        query: IMAGES_QUERY,
        variables: {
          first: this.state.first,
          skip: this.state.skip,
          filter: {
            websiteId: this.props.websiteId
          }
        }
      }).then(result => this.setState({ images: this.state.images.concat(result.data.allImages), hasMore: !!result.data.allImages.length }));

  }

  fetchImages = () => {
    const { first } = this.state;
    this.setState({ skip: this.state.skip + first });
    this.runImagesQuery();
  };

  render() {
    return (
      <ImagesGrid
        hasMore={this.state.hasMore}
        fetchImages={this.fetchImages}
        dataLength={this.state.images.length}
        images={this.state.images}
        itemComponent={ImageWebsiteGridItem} />
    );
  }
}
export default ImagesWebsite;