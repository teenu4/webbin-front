import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from "react-router-dom";
import SortOptions from './Sort/SortOptions';

//let { path, url } = useRouteMatch();

const WEBSITES_QUERY = gql`
  query {
    allWebsites {
      id
      name
      description
      logoUrl
      images(first: 3) {
        id
        previewUrl
      }
    }
  }
`;
class Websites extends Component {

  changeSort = (e) => {
    console.log(e.target.value);
    console.log('changeSort');

  }

  render() {
    return (

      <Query query={WEBSITES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching..</div>
          if (error) return <div>Error!</div>
          return (
            <div>
              <SortOptions
                changeSort={this.changeSort}
                mapping={{
                  'Date': 'lastUpdate_DESC',
                  'Name': 'name_ASC'
                }}
              />
              {data.allWebsites.map((website) => {
                return <div key={website.id} className="flex flex-wrap mb-4">
                  <div className="rounded overflow-hidden shadow-lg">
                    <img className="w-24" src={website.logoUrl} alt="Display" />
                    <div className="px-6 py-4">
                      <div className="font-bold text-purple-500 text-xl mb-2">
                        <Link to={"/websites/" + website.id}>
                          {website.name}
                        </Link>
                      </div>
                      <p className="text-gray-700 text-base">
                        {website.description}
                      </p>
                    </div>
                  </div>

                  {website.images.map((image) => {
                    return <div key={image.id} className="m-4 w-1/4 rounded overflow-hidden shadow-lg">
                      <div className="px-6 py-4">
                        <img className="w-24" src={image.previewUrl} alt="Display" />
                      </div>
                    </div>
                  })}
                </div>
              })}
            </div>
          )
        }}
      </Query>
    )
  }
}
export default Websites;