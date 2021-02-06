import React, { Component } from 'react'
import LoginForm from './LoginForm';

class Login extends Component {
    state = { 
        user: ''
     }




    render() { 
        return ( 
            <div className="login-container">
                <LoginForm />
            </div>
         );
    }
}
 
export default Login;
