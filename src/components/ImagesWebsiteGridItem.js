import React, { Component } from 'react';

class ImageWebsiteGridItem extends Component {

  render() {
    return (
      <div key={this.props.image.id} className="m-4 w-1/4 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <img className="w-256" src={this.props.image.previewUrl} alt="Display" />
          {this.props.image.displayName}
        </div>
      </div>
    )
  }
}
export default ImageWebsiteGridItem;