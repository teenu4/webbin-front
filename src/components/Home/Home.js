import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import gql from "graphql-tag";
import { Button } from "tailwind-react-ui";
import auth from "../Auth/Auth";

class App extends Component {
  constructor() {
    super();
    this.state = { session: false };
    console.log(this.props);
  }
  login() {
    this.props.auth.login();
  }
  logout() {
    this.props.auth.logout();
  }
  updateLastSeen = () => {
    const userId = auth.sub;
    const timestamp = moment().format();
    if (this.props.client) {
      this.props.client
        .mutate({
          mutation: gql`
            mutation($userId: String!, $timestamp: timestamptz!) {
              update_users(
                where: { auth0_id: { _eq: $userId } }
                _set: { auth0_id: $userId, last_seen: $timestamp }
              ) {
                affected_rows
              }
            }
          `,
          variables: {
            userId: userId,
            timestamp: timestamp
          }
        })
        .then(() => {
          // handle response if required
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
  componentDidMount() {
    const { renewSession } = auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      // eslint-disable-next-line
      const lastSeenMutation = setInterval(
        this.updateLastSeen.bind(this),
        5000
      );
      renewSession().then(data => {
        this.setState({ session: true });
      });
    } else {
      window.location.href = "/";
    }
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    if (!this.state.session) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <nav>
          <header class="navheader">
              React Apollo Todo App
            {!isAuthenticated() && (
              <Button
                id="qsLoginBtn"
                bsStyle="primary"
                className="btn-margin logoutBtn"
                onClick={this.login.bind(this)}
              >
                Log In
              </Button>
            )}
            {isAuthenticated() && (
              <Button
                id="qsLogoutBtn"
                bsStyle="primary"
                className="btn-margin logoutBtn"
                onClick={this.logout.bind(this)}
              >
                Log Out
              </Button>
            )}
          </header>
        </nav>
      </div>
      
    );
  }
}

App.propTypes = {
  auth: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

export default App;
