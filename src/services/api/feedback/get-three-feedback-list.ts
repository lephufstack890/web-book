import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetThreeFeedbackParams = unknown;

export type TGetThreeFeedbackMaterials = {
  params?: TGetThreeFeedbackParams;
};

export type TGetThreeFeedbackResponse = TCommonResponse & {
  data: TFeedback[];
};

export type TFeedback = {
  createdAt: string;
  content: string;
  avatar: string;
  name: string;
  updatedAt: string;
  __v: number;
  _id: number;
};

// FUNCTION

export const getThreeFeedbackList = async ({
  params,
}: TGetThreeFeedbackMaterials): Promise<TGetThreeFeedbackResponse> => {
  const response = await ApiService.get(`/consultation-feedback/top`, { params });
  return response.data;
};
