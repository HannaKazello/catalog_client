// @flow

import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import type { Action } from '../actions';
import { registrate } from '../actions/auth';
import SignIn from '../components/SignIn';
import { getAuthenticationStatus } from '../reducers/app';

const mapStateToProps = state => getAuthenticationStatus(state);

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps) => ({
  signin: ({ email, password }) => dispatch(registrate({ email, password })),
  back: () => ownProps.history.push('/'),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
