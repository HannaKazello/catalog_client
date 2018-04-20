// @flow

import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import type { Action } from '../actions';
import { authenticate } from '../actions/auth';
import Login from '../components/Login';
import { getAuthenticationStatus } from '../reducers/app';

const mapStateToProps = state => getAuthenticationStatus(state);

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  login: ({ email, password }) => dispatch(authenticate({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
