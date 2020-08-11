import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag'; 


const IMAGE_QUERY = gql`
  query ($id: ID!) {
    image(id: $id) {
      id
      name
      desktopUrl
      tabletUrl
      mobileUrl
      website {
        id
        name
        description
      }
      patterns {
        id
        tag
      }
      elements {
        id
        tag
      }
      flows {
        id
        name
      }
    }
  }
`;
class Image extends Component {

  constructor() {
    super();
    this.state = { session: false };
    //console.log(this.props);
  }
    render() {
      console.log(this.props);
      return (
        
        <Query query={IMAGE_QUERY}
        variables={{id: this.props.match.params.id}}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching..</div>
            if (error) return <div>Error!</div>
            return (
            
              <div className="flex flex-wrap mb-4">
                  <div className="rounded overflow-hidden shadow-lg">
      <img className="w-24" src={data.image.desktopUrl} alt="Display" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
        {data.image.website.name}
        </div>
        <p className="text-gray-700 text-base">
        {data.image.website.description}
        </p>
      </div>
    </div>    
                {data.image.elements.map((element) => {
                  return <div key={element.id} className="m-4 w-1/4 rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      {element.tag}
                    </div>
                  </div>
                })}
                {data.image.patterns.map((pattern) => {
                  return <div key={pattern.id} className="m-4 w-1/4 rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      {pattern.tag}
                    </div>
                  </div>
                })}
                {data.image.flows.map((flow) => {
                  return <div key={flow.id} className="m-4 w-1/4 rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      {flow.name}
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
  export default Image;