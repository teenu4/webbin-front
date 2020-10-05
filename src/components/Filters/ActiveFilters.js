import React, { Component } from 'react';

class ActiveFilters extends Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.activeFilters).map(key =>
          this.props.activeFilters[key].map(h =>
            <p key={h.id}>{h.name}</p>)
        )}
      </div>
    )
  }
}

export default ActiveFilters;