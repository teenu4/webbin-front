import React, { Component } from 'react';
import { Query } from 'react-apollo';
import FilterFillerService from '../../services/filters/FilterFillerService';
import FilterCheckboxes from './FilterCheckboxes';

class FilterSidebar extends Component {

  clearAction = () => {
    this.props.filterChange(null, null, this.props.type);
  }

  render() {
    //console.log(this.props);
    //console.log(FilterFillerService.getFilterVariable(this.props.activeFilters), this.props.type);
    return (
      <>
        <div>
          {this.props.type}

        </div>
        <Query
          query={FilterFillerService.getSidebarQuery(this.props.type)}
          // check if this works
          fetchPolicy="cache-and-network"
          variables={{
            filter: FilterFillerService.getFilterVariable(this.props.activeFilters, this.props.additionalFilters),
            // force fetch new counts every time
            //v: Math.random()
            //type: this.props.type
          }}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching..</div>
            if (error) return <div>Error!</div>
            return (
              <>

                <FilterCheckboxes
                  data={data[`all${this.props.type}`]}
                  name={this.props.type}
                  filterChange={this.props.filterChange}
                  activeFilters={this.props.activeFilters}
                />

                <button onClick={this.clearAction} className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded inline-flex items-center">
                  Clear all
                </button>
                <button onClick={this.props.sidebarChangeClick} className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded inline-flex items-center">
                  Close
                </button>
              </>


            )
          }}
        </Query>
      </>
    )
  }
}

export default FilterSidebar;