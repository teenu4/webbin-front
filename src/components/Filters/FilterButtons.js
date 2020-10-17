import React, { Component } from 'react';

class FilterButtons extends Component {

    render() {
        return (
            <div>
                {this.props.filterNames.map(name =>
                    <button key={name} onClick={this.props.clickFunction} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">
                        {name}
                    </button>
                )}
            </div>

        )
    }
}

export default FilterButtons;