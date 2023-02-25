import { all, takeLatest } from 'redux-saga/effects';

import { getThreeFeedBackListAction, getFeedBackIdAction } from '@/redux/actions';

import { getThreeFeedBackListSaga } from './get-three-feedback-list';
import { getFeedBackIdSaga } from './get-feedback-id';

export default function* root(): Generator {
  yield all([takeLatest(getThreeFeedBackListAction.request.type, getThreeFeedBackListSaga)]);
  yield all([takeLatest(getFeedBackIdAction.request.type, getFeedBackIdSaga)]);
}
