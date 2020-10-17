import gql from 'graphql-tag';
import React, { Component } from 'react';
import { IMAGES_PER_PAGE } from '../utils/constants';
import ImagePatternGridItem from './ImagePatternGridItem';

import ImagesGrid from './ImagesGrid';
import HeaderContent from './Content/HeaderContent/HeaderContent';
import Aside from './Aside/';

import FilterSidebar from './Filters/FilterSidebar';
import ActiveFilters from './Filters/ActiveFilters';
import FilterFillerService from '../services/filters/FilterFillerService';
import FilterButtons from './Filters/FilterButtons';

const IMAGES_QUERY = gql`
  query($filter: ImageFilter, $first: Int, $skip: Int) {
      allImages(first: $first, skip: $skip, filter: $filter) {
        id
        previewUrl
        displayName
        website {
          id
          name
        }
        patterns {
          id
          name
        }
      }
  }
`;
class ImagesPatterns extends Component {

  state = {
    images: [],
    first: IMAGES_PER_PAGE,
    skip: 0,
    hasMore: true,
    sidebar: { component: Aside },
    activeFilters: {},
    filter: {}
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
          filter: this.state.filter
        }
      }).then(result => this.setState({ images: this.state.images.concat(result.data.allImages), hasMore: !!result.data.allImages.length }));

  }

  changeActiveFilters = (id, name, filterType) => {
    const current = FilterFillerService.getEditedActiveFilters(this.state.activeFilters, id, name, filterType);
    this.setState({ activeFilters: current, images: [], hasMore: true, skip: 0, filter: FilterFillerService.getFilterVariable(current) }, () => {
      this.runImagesQuery();
    });
  }

  sidebarChangeClick = (e) => {
    const type = e.target.textContent;
    const component = type === 'Close' ? Aside : FilterSidebar;
    this.setState({
      sidebar: {
        component: component,
        type: type
      }
    });
    // store query params in url like this (if needed in future)
    // this.props.history.push({
    //   search: "?" + new URLSearchParams(params).toString()
    // })
  }

  fetchImages = () => {
    const { first } = this.state;
    this.setState({ skip: this.state.skip + first });
    this.runImagesQuery();
  };

  render() {
    const maxWidth = {
      width: "calc(100% - 260px)",
    };
    return (
      <>
        <this.state.sidebar.component
          type={this.state.sidebar.type}
          filterChange={this.changeActiveFilters}
          activeFilters={this.state.activeFilters}
          sidebarChangeClick={this.sidebarChangeClick} />
        <div className="ml-auto pl-8 pr-8 pt-8" style={maxWidth}>
          <HeaderContent />
          <FilterButtons
            filterNames={['Categories', 'Patterns', 'Elements']}
            clickFunction={this.sidebarChangeClick}
          />
          <ActiveFilters
            filterChange={this.changeActiveFilters}
            activeFilters={this.state.activeFilters} />

          <ImagesGrid
            hasMore={this.state.hasMore}
            fetchImages={this.fetchImages}
            dataLength={this.state.images.length}
            images={this.state.images}
            itemComponent={ImagePatternGridItem} />
        </div>
      </>

    );
  }
}
export default ImagesPatterns;