import React from "react";
import { Route, Router } from "react-router-dom";

import Websites from "./components/Websites";
import Image from "./components/Image";
// import App from "./components/App";
import history from "./utils/history";

import { ApolloProvider } from "react-apollo";
import makeApolloClient from "./apollo";
import ImagesPatterns from "./components/ImagesPatterns";

import LoginPage from './components/Auth/LoginPage';
import ImagesWebsite from "./components/ImagesWebsite";

let client;

const provideClient = (Component, renderProps) => {
    if (!client) {
        client = makeApolloClient();
    }
    return (
        <ApolloProvider client={client}>
            <Component {...renderProps} client={client} />
        </ApolloProvider>
    );

};

export const makeMainRoutes = () => {
    return (
        <Router history={history}>

            <Route
                exact
                path="/"
                render={props => provideClient(Websites, props)}
            />
            <Route
                exact
                path="/patterns"
                render={props => provideClient(ImagesPatterns, props)}
            />
            <Route
                path="/websites/:id"
                render={props => provideClient(ImagesWebsite, props)}
            // render={id => this.getRecipe(id)}
            />
            <Route
                path="/images/:id"
                render={props => provideClient(Image, props)}
            // render={id => this.getRecipe(id)}
            />
            <Route
                exact
                path="/login"
                render={props => provideClient(LoginPage, props)}
            />
        </Router>
    );
};
