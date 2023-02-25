import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getPopularListAction } from '@/redux/actions';
import { getPopularList, TGetPopularListResponse } from '@/services/api';

// FUNCTION

export function* getPopularListSaga(action: ActionType<typeof getPopularListAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getPopularList, materials);
    const getPopularListResponse: TGetPopularListResponse = response as TGetPopularListResponse;
    yield put(getPopularListAction.success(getPopularListResponse));
    successCallback?.(getPopularListResponse);
  } catch (err) {
    yield put(getPopularListAction.failure(err));
    failedCallback?.(err);
  }
}
