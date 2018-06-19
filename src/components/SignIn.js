// @flow

import React, { Component } from 'react';
import type { Action } from '../actions';
import { Screen, Centrilized, Vector } from './ui/Grid';

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
  message: string,
}

class Login extends Component<Props, State> {
  state = {
    email: '',
    password: '',
    errorEmail: false,
    errorPassword: false,
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
    this.props.signin({ email, password });
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
      <Screen>
        <Centrilized>
          <div className="row">
            <div className="input-field">
              Email : <input id="email" type="email" onChange={this.handleEmailChange} />
              { errorEmail && <div>{ errorEmail }</div> }
            </div>
            <div className="input-field">
              Password: <input id="password" type="password" onChange={this.handlePasswordChange} />
              { errorPassword && <div>{ errorPassword }</div> }
            </div>
            <Vector justify="space-between">
              <button className="btn waves-effect waves-light grey" onClick={this.props.back} >
                <i className="material-icons left">arrow_back</i>
                Вернуться
              </button>
              <button className="btn waves-effect waves-light light-blue darken-4" onClick={this.handleSubmit} >
                Зарегистрироваться
                <i className="material-icons right">send</i>
              </button>
            </Vector>
          </div>
        </Centrilized>
      </Screen>
    );
  }
}

export default Login;
