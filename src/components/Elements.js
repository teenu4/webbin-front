import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';  

const ELEMENTS_QUERY = gql`
  query {
    elements {
      id
      name
      tag
    }
  }
`;
class Elements extends Component {
    render() {
      return (
        <Query query={ELEMENTS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching..</div>
            if (error) return <div>Error!</div>
            return (
              <div className="flex flex-wrap mb-4">
                {data.elements.map((element) => {
                  return <div key={element.id} className="m-4 w-1/4 rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{element.name}</div>
                      <p className="text-grey-darker text-base">{element.tag}</p>
                    </div>
                  </div>
                })}
              </div>
            )
          }}
        </Query>
      )
    }
  }
  export default Elements;