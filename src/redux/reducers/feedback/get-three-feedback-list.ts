import { TFeedBackState } from '@/redux/reducers/feedback';
import { TGetThreeFeedBackListSuccess } from '@/redux/actions/feedback';

export const getThreeFeedBackState = (state: TFeedBackState, action: TGetThreeFeedBackListSuccess): TFeedBackState => ({
  ...state,
  getThreeFeedBackListResponse: action.payload.response,
});
