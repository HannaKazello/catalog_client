// @flow

import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import type { RouterHistory } from 'react-router-dom';
import type { Action } from '../actions';
import Buckets from '../components/Buckets';
import { getBuckets } from '../reducers/app';

const mapStateToProps = state => ({
  buckets: getBuckets(state),
});

type ContainerProps = {
  history: RouterHistory,
}

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: ContainerProps) => ({
  selectValue: value => console.log(value),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buckets);
