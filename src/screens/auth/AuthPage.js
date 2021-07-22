import { connect } from "react-redux";
import {getAuth} from '../../redux/auth-reducer';
import { AuthFrom } from "./AuthForm";
import React from 'react';
import'./Auth.css';

let mapStateToProps = (state) => {
  return {
    isAuth: state.authPage.isAuth,
  };
};


class AuthPage extends React.Component {

    render() {
        return (
            <div className='auth'>
                <AuthFrom setAuth={this.props.getAuth}/>
            </div>
        )
    }
}

export const AuthComponent = connect(mapStateToProps, {getAuth})(AuthPage);