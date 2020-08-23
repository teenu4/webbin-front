import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ImagesWebsite from './ImagesWebsite';


const WEBSITE_QUERY = gql`
  query ($id: ID!) {
    website(id: $id) {
      id
      name
      description
      logoUrl
    }
  }
`;
class Website extends Component {

  constructor() {
    super();
    this.state = { session: false };
    //console.log(this.props);
  }
  render() {
    console.log(this.props);
    return (

      <Query query={WEBSITE_QUERY}
        variables={{ id: this.props.match.params.id }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching..</div>
          if (error) return <div>Error!</div>
          return (

            <div className="flex flex-wrap mb-4">
              <div className="rounded overflow-hidden shadow-lg">
                <img className="w-24" src={data.website.logoUrl} alt="Display" />
                <div className="px-6 py-4">
                  <div className="font-bold text-purple-500 text-xl mb-2">
                    {data.website.name}
                  </div>
                  <p className="text-gray-700 text-base">
                    {data.website.description}
                  </p>
                </div>
              </div>
              <ImagesWebsite
                client={this.props.client}
                websiteId={this.props.match.params.id} />
            </div>
          )
        }}
      </Query>
    )
  }
}
export default Website;