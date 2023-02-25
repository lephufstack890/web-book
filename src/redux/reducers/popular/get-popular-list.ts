import { TPopularState } from '@/redux/reducers/popular';
import { TGetPopularListSuccess } from '@/redux/actions/popular';

export const getPopularListState = (state: TPopularState, action: TGetPopularListSuccess): TPopularState => ({
  ...state,
  getPopularListResponse: action.payload.response,
});
