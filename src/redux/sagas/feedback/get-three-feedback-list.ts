import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getThreeFeedBackListAction } from '@/redux/actions';
import { getThreeFeedbackList, TGetThreeFeedbackResponse } from '@/services/api';

// FUNCTION

export function* getThreeFeedBackListSaga(action: ActionType<typeof getThreeFeedBackListAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getThreeFeedbackList, materials);
    const getThreeFeedbackListResponse: TGetThreeFeedbackResponse = response as TGetThreeFeedbackResponse;
    yield put(getThreeFeedBackListAction.success(getThreeFeedbackListResponse));
    successCallback?.(getThreeFeedbackListResponse);
  } catch (err) {
    yield put(getThreeFeedBackListAction.failure(err));
    failedCallback?.(err);
  }
}
