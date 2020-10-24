import React, { Component } from 'react';

class SortOptions extends Component {

    render() {
        return (

            <div>
                <select onChange={this.props.changeSort}>
                    {Object.keys(this.props.mapping).map(key =>
                        <option key={key} value={this.props.mapping[key]}>{key}</option>
                    )}
                    {/* {this.state.teams.map((team) => <option key={team.value} value={team.value}>{team.display}</option>)} */}
                </select>

            </div>
        )
    }
}

export default SortOptions;