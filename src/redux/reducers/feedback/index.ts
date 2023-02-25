import { createReducer } from 'deox';

import { TGetThreeFeedbackResponse, TGetFeedbackIdResponse } from '@/services/api/feedback';
import { getThreeFeedBackListAction, getFeedBackIdAction } from '@/redux/actions';
import { getThreeFeedBackState } from './get-three-feedback-list';
import { getFeedBackIdState } from './get-feedback-id';

export type TFeedBackState = {
  getThreeFeedBackListResponse?: TGetThreeFeedbackResponse;
  getFeedBackIdResponse?: TGetFeedbackIdResponse;
};

const initialState: TFeedBackState = {
  getThreeFeedBackListResponse: undefined,
  getFeedBackIdResponse: undefined,
};

const FeedBackReducer = createReducer(initialState, (handleAction) => [
  handleAction(getThreeFeedBackListAction.success, getThreeFeedBackState),
  handleAction(getFeedBackIdAction.success, getFeedBackIdState),
]);

export default FeedBackReducer;
