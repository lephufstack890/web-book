import { createReducer } from 'deox';

import { TGetPopularListResponse } from '@/services/api/popular';
import { getPopularListAction } from '@/redux/actions';
import { getPopularListState } from './get-popular-list';

export type TPopularState = {
  getPopularListResponse?: TGetPopularListResponse;
};

const initialState: TPopularState = {
  getPopularListResponse: undefined,
};

const PopularReducer = createReducer(initialState, (handleAction) => [
  handleAction(getPopularListAction.success, getPopularListState),
]);

export default PopularReducer;
