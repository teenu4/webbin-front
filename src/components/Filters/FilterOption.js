import React, { Component } from 'react';

class FilterOption extends Component {

  handleChange = (e) => {
    this.props.filterChange(e.target.id, e.target.name, this.props.name);
  }

  isOptionChecked = (id) => {
    return this.props.activeFilters[this.props.name].findIndex(i => i.id === id) === -1;
  }

  render() {
    return (

      <div>
        {this.props.data.map(el =>
          <div key={el.id}>

            <label className="inline-flex items-center mt-3">
              <input
                id={el.id}
                name={el.name}
                type="checkbox"
                className="form-checkbox h-5 w-5 text-red-600"
                defaultChecked={this.isOptionChecked}
                onChange={this.handleChange} /><span className="ml-2 text-gray-700">{el.name}</span>
            </label>
          </div>
        )}

      </div>
    )
  }
}

export default FilterOption;