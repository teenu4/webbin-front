import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import ImageWebsiteGridItem from './ImagesWebsiteGridItem';
import ProductInfo from './Content/Product-Info/'


class ImagesGrid extends Component {

  fetchImages = () => {
    this.props.fetchImages();
  }

  render() {
    return (
      <>
        <div className='images'>
          <InfiniteScroll
            dataLength={this.props.dataLength}
            next={this.fetchImages}
            hasMore={this.props.hasMore}
            loader={<h4>Loading...</h4>}
          >
            {this.props.images.map(image => (
              <this.props.itemComponent image={image} key={image.id} />
            ))}
          </InfiniteScroll>
        </div>

        <div className="content ml-auto mt-12 px-6">
          <ProductInfo/>
          <div className="flex items-start justify-between flex-wrap">
              <ImageWebsiteGridItem/>
          </div>
        </div>
      </>
    )
  }
}
export default ImagesGrid;