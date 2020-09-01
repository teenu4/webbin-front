import React, { Component } from 'react';
import Elements from './Elements';

export default class App extends Component {
  render() {
    return (
      <div className="container mx-auto px-4">
        <Elements />
        <h1>Hello Max</h1>
      </div>
    );
  }
}
