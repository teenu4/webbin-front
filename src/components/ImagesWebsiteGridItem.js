import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ImageWebsiteGridItem extends Component {

  render() {
    return (

      <div key={this.props.image.id} className="w-5/12 rounded overflow-hidden shadow-lg mb-8 border border-blue-500 hover:border-blue-800">
        <img className="w-full" src={this.props.image.previewUrl} alt="Sunset in the mountains" />
        <div className="flex items-center justify-between px-6 py-4 border bg-white">
          <Link to={"/images/" + this.props.image.id}>
            <div className="font-bold text-xl mb-2">{this.props.image.displayName}</div>
          </Link>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            {/* {this.props.image.patterns.map(p => p.name)} */}
            Like
            </button>
        </div>
      </div>

    )
  }
};

export default ImageWebsiteGridItem;