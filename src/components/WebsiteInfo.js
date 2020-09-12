import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const WEBSITE_INFO_QUERY = gql`
  query($id: ID!) {
    website(id: $id) {
      id
      name
      description
      logoUrl
    }
  }
`;

class WebsiteInfo extends Component {

  render() {
    return (
      <Query
        query={WEBSITE_INFO_QUERY}
        variables={{ id: this.props.websiteId }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching..</div>
          if (error) return <div>Error!</div>
          return (
            <>
              <div className="flex flex-row justify-start rounded overflow-hidden shadow-lg max-w-md mb-12 bg-white">

                <img className="max-w-xs" src={data.website.logoUrl} alt={data.website.name} />
                <div className="px-6 py-2">
                  <div className="font-bold text-xl mb-2">{data.website.name}</div>
                  <p className="text-gray-700 text-base">
                    {data.website.description}
                  </p>
                </div>
              </div>
            </>
          )
        }}
      </Query >
    )
  }
}

export default WebsiteInfo;