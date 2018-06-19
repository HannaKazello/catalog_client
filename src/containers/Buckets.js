// @flow

import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import type { RouterHistory } from 'react-router-dom';
import type { Action } from '../actions';
import { selectFieldValue } from '../actions/search';
import Buckets from '../components/buckets/Buckets';
import { getBuckets, getSelectedValue } from '../reducers/app';

const mapStateToProps = state => ({
  buckets: getBuckets(state),
  selectedValue: getSelectedValue(state),
});

type ContainerProps = {
  history: RouterHistory,
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  selectValue: value => dispatch(selectFieldValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buckets);
