// @flow

import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import type { RouterHistory } from 'react-router-dom';
import type { Action } from '../actions';
import RecordsInfo from '../components/RecordsInfo';
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

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const finded = stateProps.books.find(book => book.id === ownProps.match.params.id);
  return {
    ...dispatchProps,
    finded,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(RecordsInfo);
