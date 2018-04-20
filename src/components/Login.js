// @flow

import React, { Component } from 'react';
import type { Action } from '../actions';

type Props = {
  authenticated: boolean,
  authenticating: boolean,
  error: boolean | { code: string, message: string },
  login: ({ email: string, password: string }) => Action,
};

type State = {
  email: string,
  password: string,
  errorEmail: string | false,
  errorPassword: string | false,
  redirectToReferrer: boolean,
  message: string,
}

class Login extends Component<Props, State> {
  state = {
    email: '',
    password: '',
    errorEmail: false,
    errorPassword: false,
    redirectToReferrer: false,
    message:'',
  }

  handleEmailChange = (event: SyntheticInputEvent<> & SyntheticKeyboardEvent<*>) => {
    this.setState({ email: event.target.value, errorEmail: false });
  }

  handlePasswordChange = (event: SyntheticInputEvent<> & SyntheticKeyboardEvent<*>) => {
    this.setState({ password: event.target.value, errorPassword: false });
  }

  validEmail = () => {
    if (this.state.email === '') {
      this.setState({ errorEmail: 'This field is required' });
      return false;
    }

    return true;
  }

  validPassword = () => {
    if (this.state.password === '') {
      this.setState({ errorPassword: 'This field is required' });
      return false;
    }

    return true;
  }

  handleSubmit = () => {
    const validEmail = this.validEmail();
    const validPassword = this.validPassword();
    if (!validEmail || !validPassword) {
      return;
    }
    const { email, password } = this.state;
    this.props.login({ email, password });
  }

  render() {
    const { authenticating, error } = this.props;
    const { errorEmail, errorPassword } = this.state;

    if (error) {
      return <div>{error.code}: {error.message}</div>;
    }

    if (authenticating) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <input onChange={this.handleEmailChange} />
        { errorEmail && <div>{ errorEmail }</div> }
        <input onChange={this.handlePasswordChange} />
        { errorPassword && <div>{ errorPassword }</div> }
        <button onClick={this.handleSubmit} >Submit</button>
      </div>
    );
  }
}

export default Login;
