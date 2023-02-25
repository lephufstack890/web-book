import { createActionCreator } from 'deox';

import { TGetPopularListMaterials, TGetPopularListResponse } from '@/services/api/popular/get-popular-list';

// CONSTANTS

export enum EGetPopularListAction {
  GET_POPULAR_LIST = 'GET_POPULAR_LIST',
  GET_POPULAR_LIST_REQUEST = 'GET_POPULAR_LIST_REQUEST',
  GET_POPULAR_LIST_SUCCESS = 'GET_POPULAR_LIST_SUCCESS',
  GET_POPULAR_LIST_FAILED = 'GET_POPULAR_LIST_FAILED',
}

// TYPES

export type TGetPopularListRequest = {
  type: EGetPopularListAction.GET_POPULAR_LIST_REQUEST;
  payload: {
    materials: TGetPopularListMaterials;
    successCallback?: (response: TGetPopularListResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetPopularListSuccess = {
  type: EGetPopularListAction.GET_POPULAR_LIST_SUCCESS;
  payload: { response: TGetPopularListResponse };
};

export type TGetPopularListFailed = { type: EGetPopularListAction.GET_POPULAR_LIST_FAILED };

// FUNCTION

export const getPopularListAction = {
  request: createActionCreator(
    EGetPopularListAction.GET_POPULAR_LIST_REQUEST,
    (resolve) =>
      (
        materials: TGetPopularListMaterials,
        successCallback?: (response: TGetPopularListResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetPopularListRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetPopularListAction.GET_POPULAR_LIST_SUCCESS,
    (resolve) =>
      (response: TGetPopularListResponse): TGetPopularListSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetPopularListAction.GET_POPULAR_LIST_FAILED,
    (resolve) =>
      (error: unknown): TGetPopularListFailed =>
        resolve({ error }),
  ),
};
