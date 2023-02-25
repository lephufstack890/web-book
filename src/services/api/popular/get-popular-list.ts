import { TCommonPaginate, TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetPopularListParams = unknown;

export type TGetPopularListMaterials = {
  params?: TGetPopularListParams;
};

export type TGetPopularListResponse = TCommonResponse & {
  data: TListPopularData[];
};

export type TListPopularData = {
  id: number;
  key: string | number;
  title: string;
  description: string;
  thumbnail: string;
  icon: string;
};

// FUNCTION

export const getPopularList = async ({ params }: TGetPopularListMaterials): Promise<TGetPopularListResponse> => {
  const response = await ApiService.get(`/popular-psy`, { params });
  return response.data;
};
