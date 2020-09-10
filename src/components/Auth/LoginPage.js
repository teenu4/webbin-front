
import React, { Component } from 'react';
import { API_HOSTNAME } from '../../utils/constants';

class LoginPage extends Component {

    componentDidMount() {
        const s = localStorage;
        this.fillUserData(false, s.isLoggedIn === 'true', s.name, s.email, s.token);
    }

    login = () => {
        window.open(API_HOSTNAME + '/users/auth/google_oauth2');
        window.onmessage = (event) => {
            if (event.origin === API_HOSTNAME) {
                const userData = JSON.parse(event.data);
                this.fillUserData(true, true, userData.name, userData.email, userData.token);
            }
        }
    }

    logout = () => {
        this.fillUserData(true, false, null, null, null);
    }


    fillUserData = (updateStorage, ...args) => {
        if (updateStorage) {
            localStorage.setItem('isLoggedIn', args[0]);
            localStorage.setItem('name', args[1]);
            localStorage.setItem('email', args[2]);
            localStorage.setItem('token', args[3]);
        }
        this.setState({
            auth: {
                isLoggedIn: args[0],
                name: args[1],
                email: args[2],
                token: args[3]
            }
        });
    }

    render() {
        let isLoggedIn = this.state ? this.state.auth.isLoggedIn : false;
        return (
            <>
                {isLoggedIn
                    ? <button onClick={this.logout}>Log Out</button>
                    : <button onClick={this.login}>Sign In With Google</button>
                }


            </>
        )
    }
}
export default LoginPage;