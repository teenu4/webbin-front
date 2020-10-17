import React, { Component } from 'react';

class FilterCheckboxes extends Component {

  handleChange = (e) => {
    const name = this.props.name;
    this.props.filterChange(e.target.id, e.target.name, name);
  }

  isOptionChecked = (id) => {
    const keyExists = this.props.activeFilters[this.props.name] !== undefined;
    if (keyExists) {
      const filterApplied = this.props.activeFilters[this.props.name].findIndex(i => i.id === id) !== -1;
      return filterApplied;
    }
    return false;
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
                value="1"
                className="form-checkbox h-5 w-5 text-red-600"
                checked={this.isOptionChecked(el.id)}
                onChange={this.handleChange} /><span className="ml-2 text-gray-700">{el.name} ({el.count})</span>
            </label>
          </div>
        )}

      </div>
    )
  }
}

export default FilterCheckboxes;