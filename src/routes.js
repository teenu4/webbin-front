import React from "react";
import { Route, Router } from "react-router-dom";

import Home from "./components/Home/Home";
import Callback from "./components/Callback/Callback";
import auth from "./components/Auth/Auth";
import LandingPage from "./components/LandingPage/LandingPage";
import Websites from "./components/Websites";
import Website from "./components/Website";
import Image from "./components/Image";
import App from "./components/App";
import history from "./utils/history";

import { ApolloProvider } from "react-apollo";
import makeApolloClient from "./apollo";
import Patterns from "./components/ImagesPatterns";
import ImagesPatterns from "./components/ImagesPatterns";

let client;

const provideClient = (Component, renderProps) => {
    if (!client) {
        client = makeApolloClient();
    }
    // check if logged in
    if (localStorage.getItem("isLoggedIn") === "true") {
        // check if client exists

        return (
            <ApolloProvider client={client}>
                <Component {...renderProps} auth={auth} client={client} />
            </ApolloProvider>
        );
    } else {
        // not logged in already, hence redirect to login page
        if (renderProps.match.path !== "/") {
            window.location.href = "/";
        } else {
            return (<ApolloProvider client={client}>
                <Component auth={auth} {...renderProps} />
            </ApolloProvider>);
        }
    }
};

const handleAuthentication = ({ location }) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
};

export const makeMainRoutes = () => {
    return (
        <Router history={history}>
            <div>
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
                    path="/home"
                    render={props => provideClient(Home, props)}
                />
                <Route
                    path="/callback"
                    render={props => {
                        handleAuthentication(props);
                        return <Callback {...props} />;
                    }}
                />
            </div>
        </Router>
    );
};
