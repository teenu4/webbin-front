import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


class ImagesGrid extends Component {

  fetchImages = () => {
    this.props.fetchImages();
  }

  render() {
    return (
      <>
        <div className='images'>
          <InfiniteScroll
            className="flex flex-wrap items-start justify-between"
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
      </>
    )
  }
}
export default ImagesGrid;