import React from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import {ApolloClient} from "apollo-client"
import {ApolloProvider, Mutation} from "react-apollo"
import gql from "graphql-tag"


const UPLOAD_FILE = gql`
  mutation SingleUpload($file: Upload!) {
    singleUpload(file: $file) {
      filename
      mimetype
      encoding
    }
  }
`;

const UPLOAD_FILE_STREAM = gql`
  mutation SingleUploadStream($file: Upload!) {
    singleUploadStream(file: $file) {
      filename
      mimetype
      encoding
    }
  }
`;


function Image() {
  return (
    <div className="Image">
        <header className="Image-header">
            <h2>Save Local</h2>
                <Mutation mutation={UPLOAD_FILE}>
                    {(singleUpload, { data, loading }) => {
                        console.log(data)
                        return (<form onSubmit={() => {console.log("Submitted")}} encType={'multipart/form-data'}>
                                    <input name={'document'} type={'file'} onChange={({target: { files }}) => {
                                        const file = files[0]
                                        file && singleUpload({ variables: { file: file } })
                                    }}/>{loading && <p>Loading.....</p>}</form>)}
                    }
                </Mutation>
            <h2>Stream to Server</h2>
                 <Mutation mutation={UPLOAD_FILE_STREAM}>
                    {(singleUploadStream, { data, loading }) => {
                        console.log(data)
                        return (<form onSubmit={() => {console.log("Submitted")}} encType={'multipart/form-data'}>
                                    <input name={'document'} type={'file'} onChange={({target: { files }}) => {
                                        const file = files[0]
                                        file && singleUploadStream({ variables: { file: file } })
                                    }}/>{loading && <p>Loading.....</p>}</form>)}
                    }
                 </Mutation>
        </header>
    </div>
  );
}

export default Image;