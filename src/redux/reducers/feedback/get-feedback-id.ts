import { TFeedBackState } from '@/redux/reducers/feedback';
import { TGetFeedBackIdSuccess } from '@/redux/actions/feedback';

export const getFeedBackIdState = (state: TFeedBackState, action: TGetFeedBackIdSuccess): TFeedBackState => ({
  ...state,
  getFeedBackIdResponse: action.payload.response,
});
