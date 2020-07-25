import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import gql from 'graphql-tag';
import { Mutation } from "react-apollo";
import { useMutation } from "@apollo/client";
// this whole file is just a mutation example, it doesn't make sense, remove later
const UPDATE_IMAGE_MUTATION = gql`
mutation($id: ID!, $elementIds: [ID], $desktopFile: String) {
  updateImage(input: {
    id: $id,
    elementIds: $elementIds,
    desktopFile: $desktopFile
  }) {
    image {
      id
      elements {
        name
      }
    }
  }
}`;
// mutation CreateUser($name: String!, $email: String!) {
//   createUser(input: { name: $name, email: $email }) {
//     user {
//       id
//       name
//       email
//       booksCount
//     }
//     errors
//   }
// }


class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      elementIds: [1],
      desktopFile: 'tst'
    };

    console.log(this.state);
    // this.handleTextboxValueChange = this.handleTextboxValueChange.bind(this);
    // this.handleTextboxKeyPress = this.handleTextboxKeyPress.bind(this);
  }
  handleTextboxKeyPress(e, addTodo) {
    if (e.key === "Enter") {
      const newTodo = this.state.textboxValue;
      const userId = this.props.userId;
      const isPublic = this.props.type === "public" ? true : false;
      addTodo({
        variables: 
          this.state
        
        // variables: {
        //   objects: [
        //     {
        //       text: newTodo,
        //       user_id: userId,
        //       is_completed: false,
        //       is_public: isPublic
        //     }
        //   ]
        // },
        // update: (store, { data: { insert_todos } }) => {
        //   const query = QUERY_PRIVATE_TODO;
        //   try {
        //     if (this.props.type === "private") {
        //       const data = store.readQuery({
        //         query: query,
        //         variables: { userId: this.props.userId }
        //       });
        //       const insertedTodo = insert_todos.returning;
        //       data.todos.splice(0, 0, insertedTodo[0]);
        //       store.writeQuery({
        //         query: query,
        //         variables: {
        //           userId: this.props.userId
        //         },
        //         data
        //       });
        //     }
        //   } catch (e) {
        //     console.error(e);
        //   }
        //   this.setState({
        //     textboxValue: ""
        //   });
        // }
      });
    }
  }
  // componentDidMount() {
  //   console.log(this.props);
  // }
  onChangeHandlerFile = event => {
    //createUser({ input: this.state });
    this.state.desktopFile = event.target.files[0];
    //updateImage(this.state);
    // console.log(this.state);
    // console.log(event.target.files[0])

  }
  login() {
    this.props.auth.login();
  }
  logout() {
    this.props.auth.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    console.log(this.props);
    return (
      <div className="container-fluid gradientBgColor minHeight">
        <div>
          <div className="headerWrapper">
            <div className="headerDescription">
              {isAuthenticated() && (
                <Link to="/home">Realtime React Todo App Demo</Link>
              )}
              {!isAuthenticated() && <span>Realtime React Todo App Demo</span>}
            </div>
            <div className="loginBtn">
              {!isAuthenticated() && (
                <button
                  id="qsLoginBtn"
                  bsstyle="primary"
                  className="btn-margin logoutBtn"
                  onClick={this.login.bind(this)}
                >
                  Log In
                </button>
              )}
              {isAuthenticated() && (
                <button
                  id="qsLogoutBtn"
                  bsStyle="primary"
                  className="btn-margin logoutBtn"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                </button>
              )}
            </div>
          </div>
          <div>
          <Mutation mutation={UPDATE_IMAGE_MUTATION}>
        {(addTodo, { error }) => {
          if (error) {
            alert("Something went wrong");
          }
          return (
            <div className="formInput">
              <input
                className="input"
                data-test={
                  this.props.type === "private"
                    ? "input-private"
                    : "input-public"
                }
                placeholder="What needs to be done?"
                value={this.state.textboxValue}
                onChange={this.handleTextboxValueChange}
                onKeyPress={e => {
                  this.handleTextboxKeyPress(e, addTodo);
                }}
              />
              <i className="downArrow fa fa-angle-down" />
            </div>
          );
        }}
      </Mutation>

            {/* hello! */}

            {/* <Mutation mutation={MUTATION_TODO_ADD}>
        {(addTodo, { error }) => {
          if (error) {
            alert("Something went wrong");
          }
          return (
            <div className="formInput">
              <input
                className="input"
                data-test={
                  this.props.type === "private"
                    ? "input-private"
                    : "input-public"
                }
                placeholder="What needs to be done?"
                value={this.state.textboxValue}
                onChange={this.handleTextboxValueChange}
                onKeyPress={e => {
                  this.handleTextboxKeyPress(e, addTodo);
                }}
              />
              <i className="downArrow fa fa-angle-down" />
            </div>
          );
        }}zz
      </Mutation> */}
          </div>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  auth: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

export default LandingPage;
