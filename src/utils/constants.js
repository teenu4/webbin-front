const HASURA_GRAPHQL_ENGINE_HOSTNAME = "localhost:3000";
const API_HOSTNAME = "storinka.herokuapp.com/";

const scheme = proto => {
  return window.location.protocol === "https:" ? `${proto}s` : proto;
};

export const GRAPHQL_URL = `${scheme(
  "http"
)}://${API_HOSTNAME}/api/v1/graphql`;
export const REALTIME_GRAPHQL_URL = `${scheme(
  "ws"
)}://${API_HOSTNAME}/graphql`;
export const authClientId = "FLHiJ6cyDs7YC4gTT4vO83ClNLnQ0ZER";
export const authDomain = "dev-j6f1ajc4.eu.auth0.com";
export const callbackUrl = `${scheme(
  "http"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/callback`;
