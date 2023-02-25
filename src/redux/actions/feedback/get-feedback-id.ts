import { createActionCreator } from 'deox';

import { TGetFeedbackIdMaterials, TGetFeedbackIdResponse } from '@/services/api/feedback/get-feedback-id';

// CONSTANTS

export enum EGetFeedBackIdAction {
  GET_FEEDBACK_ID = 'GET_FEEDBACK_ID',
  GET_FEEDBACK_ID_REQUEST = 'GET_FEEDBACK_ID_REQUEST',
  GET_FEEDBACK_ID_SUCCESS = 'GET_FEEDBACK_ID_SUCCESS',
  GET_FEEDBACK_ID_FAILED = 'GET_FEEDBACK_ID_FAILED',
}

// TYPES

export type TGetFeedBackIdRequest = {
  type: EGetFeedBackIdAction.GET_FEEDBACK_ID_REQUEST;
  payload: {
    materials: TGetFeedbackIdMaterials;
    successCallback?: (response: TGetFeedbackIdResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetFeedBackIdSuccess = {
  type: EGetFeedBackIdAction.GET_FEEDBACK_ID_SUCCESS;
  payload: { response: TGetFeedbackIdResponse };
};

export type TGetFeedBackIdFailed = { type: EGetFeedBackIdAction.GET_FEEDBACK_ID_FAILED };

// FUNCTION

export const getFeedBackIdAction = {
  request: createActionCreator(
    EGetFeedBackIdAction.GET_FEEDBACK_ID_REQUEST,
    (resolve) =>
      (
        materials: TGetFeedbackIdMaterials,
        successCallback?: (response: TGetFeedbackIdResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetFeedBackIdRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetFeedBackIdAction.GET_FEEDBACK_ID_SUCCESS,
    (resolve) =>
      (response: TGetFeedbackIdResponse): TGetFeedBackIdSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetFeedBackIdAction.GET_FEEDBACK_ID_FAILED,
    (resolve) =>
      (error: unknown): TGetFeedBackIdFailed =>
        resolve({ error }),
  ),
};
