import React from "react";
import { Route, Router } from "react-router-dom";

import Websites from "./components/Websites";
import Website from "./components/Website";
import Image from "./components/Image";
// import App from "./components/App";
import history from "./utils/history";

import { ApolloProvider } from "react-apollo";
import makeApolloClient from "./apollo";
// import Patterns from "./components/ImagesPatterns";
import ImagesPatterns from "./components/ImagesPatterns";

import Content from './components/Content/'
import LoginPage from './components/Auth/LoginPage';

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
                render={props => provideClient(Website, props)}
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
            {/* this is mocked temporary route */}
            <Route
                path="/content"
                render={props => provideClient(Content, props)}
            />
        </Router>
    );
};
