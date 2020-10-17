import React, { Component } from 'react';

class ActiveFilters extends Component {

  filterButtonClick = (e) => {
    const values = e.target.id.split('-');
    this.props.filterChange(values[0], e.target.name, values[1]);
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.activeFilters).map(key =>
          this.props.activeFilters[key].map(h =>
            <button onClick={this.filterButtonClick} key={h.id} id={`${h.id}-${key}`} name={h.name} className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded inline-flex items-center">
              {h.name}
              <img id={`${h.id}-${key}`} name={h.name} src="/icons/x.svg" alt=""></img>
            </button>
          ))}
      </div>

    )
  }
}

export default ActiveFilters;