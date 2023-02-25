import { all, takeLatest } from 'redux-saga/effects';

import { getPopularListAction } from '@/redux/actions';

import { getPopularListSaga } from './get-popular-list';

export default function* root(): Generator {
  yield all([takeLatest(getPopularListAction.request.type, getPopularListSaga)]);
}
