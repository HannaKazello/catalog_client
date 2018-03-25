// @flow

import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import type { RouterHistory } from 'react-router-dom';
import type { Action } from '../actions';
import Catalog from '../components/Catalog';
import { getBooks } from '../reducers/app';

const mapStateToProps = state => ({
  books: getBooks(state),
});

type ContainerProps = {
  history: RouterHistory,
}

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: ContainerProps) => ({
  back: () => ownProps.history.push('/'),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
