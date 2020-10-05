import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import FilterOption from './FilterOption';

class FilterSidebar extends Component {

  getQuery = () => {
    const query = `
      {
      all${this.props.type} {
        id
        name
      }
    }`;
    return gql(query);
  }

  render() {
    //console.log(this.getQueries());
    return (
      <>
        <div>
          {this.props.type}

        </div>
        <Query
          query={this.getQuery()}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching..</div>
            if (error) return <div>Error!</div>
            return (
              <>

                <FilterOption
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