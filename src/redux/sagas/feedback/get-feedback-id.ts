import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getFeedBackIdAction } from '@/redux/actions';
import { getFeedbackId, TGetFeedbackIdResponse } from '@/services/api';

// FUNCTION

export function* getFeedBackIdSaga(action: ActionType<typeof getFeedBackIdAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getFeedbackId, materials);
    const getFeedbackIdResponse: TGetFeedbackIdResponse = response as TGetFeedbackIdResponse;
    yield put(getFeedBackIdAction.success(getFeedbackIdResponse));
    successCallback?.(getFeedbackIdResponse);
  } catch (err) {
    yield put(getFeedBackIdAction.failure(err));
    failedCallback?.(err);
  }
}
