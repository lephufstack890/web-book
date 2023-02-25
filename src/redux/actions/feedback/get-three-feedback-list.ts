import { createActionCreator } from 'deox';

import { TGetThreeFeedbackMaterials, TGetThreeFeedbackResponse } from '@/services/api/feedback/get-three-feedback-list';

// CONSTANTS

export enum EGetThreeFeedBackListAction {
  GET_THREE_FEEDBACK_LIST = 'GET_THREE_FEEDBACK_LIST',
  GET_THREE_FEEDBACK_LIST_REQUEST = 'GET_THREE_FEEDBACK_LIST_REQUEST',
  GET_THREE_FEEDBACK_LIST_SUCCESS = 'GET_THREE_FEEDBACK_LIST_SUCCESS',
  GET_THREE_FEEDBACK_LIST_FAILED = 'GET_THREE_FEEDBACK_LIST_FAILED',
}

// TYPES

export type TGetThreeFeedBackListRequest = {
  type: EGetThreeFeedBackListAction.GET_THREE_FEEDBACK_LIST_REQUEST;
  payload: {
    materials: TGetThreeFeedbackMaterials;
    successCallback?: (response: TGetThreeFeedbackResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetThreeFeedBackListSuccess = {
  type: EGetThreeFeedBackListAction.GET_THREE_FEEDBACK_LIST_SUCCESS;
  payload: { response: TGetThreeFeedbackResponse };
};

export type TGetThreeFeedBackListFailed = { type: EGetThreeFeedBackListAction.GET_THREE_FEEDBACK_LIST_FAILED };

// FUNCTION

export const getThreeFeedBackListAction = {
  request: createActionCreator(
    EGetThreeFeedBackListAction.GET_THREE_FEEDBACK_LIST_REQUEST,
    (resolve) =>
      (
        materials: TGetThreeFeedbackMaterials,
        successCallback?: (response: TGetThreeFeedbackResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetThreeFeedBackListRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetThreeFeedBackListAction.GET_THREE_FEEDBACK_LIST_SUCCESS,
    (resolve) =>
      (response: TGetThreeFeedbackResponse): TGetThreeFeedBackListSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetThreeFeedBackListAction.GET_THREE_FEEDBACK_LIST_FAILED,
    (resolve) =>
      (error: unknown): TGetThreeFeedBackListFailed =>
        resolve({ error }),
  ),
};
