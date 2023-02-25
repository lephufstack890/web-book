import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetFeedbackIdParams = unknown;

export type TGetFeedbackIdMaterials = {
  params?: TGetFeedbackIdParams;
};

export type TGetFeedbackIdResponse = TCommonResponse & {
  data: TFeedbackId[];
};

export type TFeedbackId = {
  createdAt: string;
  content: string;
  avatar: string;
  name: string;
  updatedAt: string;
  __v: number;
  _id: number | string;
};

// FUNCTION

export const getFeedbackId = async ({ params }: TGetFeedbackIdMaterials): Promise<TGetFeedbackIdResponse> => {
  const response = await ApiService.get(`/consultation-feedback/${params}`);
  return response.data;
};
