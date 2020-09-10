import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { GRAPHQL_URL } from "./utils/constants.js";

const getHeaders = () => {
  const headers = {};
  const token = localStorage.getItem('token');
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return headers;
};

const makeApolloClient = () => {
  // Create an http link:
  const httpLink = new HttpLink({
    uri: GRAPHQL_URL,
    fetch,
    headers: getHeaders()
  });

  const client = new ApolloClient({
    shouldBatch: true,
    link: httpLink,
    cache: new InMemoryCache({
      addTypename: true
    })
  });

  return client;
};

export default makeApolloClient;
