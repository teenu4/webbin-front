import React, { Component } from 'react';
import { Query } from 'react-apollo';
import FilterFillerService from '../../services/filters/FilterFillerService';
import FilterOptions from './FilterOptions';

class FilterSidebar extends Component {

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
            filter: FilterFillerService.getFilterVariable(this.props.activeFilters),
            // force fetch new counts every time
            //v: Math.random()
            //type: this.props.type
          }}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching..</div>
            if (error) return <div>Error!</div>
            return (
              <>

                <FilterOptions
                  data={data[`all${this.props.type}`]}
                  name={this.props.type}
                  filterChange={this.props.filterChange}
                  activeFilters={this.props.activeFilters}
                />
              </>


            )
          }}
        </Query>
      </>
    )
  }
}

export default FilterSidebar;