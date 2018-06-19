// @flow

import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import type { RouterHistory } from 'react-router-dom';
import type { Action } from '../actions';
import Navbar from '../components/Navbar';
import { getAuthenticationStatus } from '../reducers/app';
import { search } from '../actions/search';

const mapStateToProps = state => ({
  isAuthenticated: getAuthenticationStatus(state).authenticated,
});

type ContainerProps = {
  history: RouterHistory,
}

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: ContainerProps) => ({
  back: () => ownProps.history.push('/'),
  search: searchString => dispatch(search(searchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
