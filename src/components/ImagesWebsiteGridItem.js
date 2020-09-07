import React, { Component } from 'react';

class ImageWebsiteGridItem extends Component {

  render() {
    return (
      <div key={this.props.image.id} class="w-5/12 rounded overflow-hidden shadow-lg mb-8">
        <img class="w-full" src={this.props.image.previewUrl} alt="Sunset in the mountains"/>
        <div class="flex items-center justify-between px-6 py-4">
          <div class="font-bold text-xl mb-2">{this.props.image.website.name}</div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
           {this.props.image.patterns.map(p => p.name)}
          </button>
        </div>
        <h1>Hello</h1>
      </div>
    )
    // <div key={this.props.image.id} className="m-4 w-1/4 rounded overflow-hidden shadow-lg">
    //   <div className="px-6 py-4">
    //     <img className="w-256" src={this.props.image.previewUrl} alt="Display" />
    //     {this.props.image.displayName}
    //   </div>
    // </div>
  }
};

export default ImageWebsiteGridItem;