import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


const IMAGES_QUERY = gql`
  query($filter: ImageFilter) {
      allImages(first: 10, skip: 0, filter: $filter) {
        id
        previewUrl
        website {
          name
        }
        patterns {
          name
        }
      }
  }
`;
class Patterns extends Component {

  constructor() {
    super();
    this.state = { session: false };
    //console.log(this.props);
  }
  render() {
    console.log(this.props);
    return (
      //filter hashmap example
      //filter: {patternId: [1,2], websiteId: [1], elementId: [1]}
      <Query query={IMAGES_QUERY}
        variables={{ filter: {} }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching..</div>
          if (error) return <div>Error!</div>
          return (

            <div className="flex flex-wrap mb-4">

              {data.allImages.map((image) => {
                return <div key={image.id} className="m-4 w-1/4 rounded overflow-hidden shadow-lg">
                  <div className="px-6 py-4">
                    <img className="w-256" src={image.previewUrl} alt="Display" />
                    {image.website.name}
                    <br />
                    {image.patterns.map(p => p.name)}
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
export default Patterns;