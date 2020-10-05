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
    // console.log(this.props);
    return (

      <Query query={WEBSITE_QUERY}
        variables={{ id: this.props.match.params.id }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching..</div>
          if (error) return <div>Error!</div>
          return (

            <div className="flex flex-wrap mb-4">
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