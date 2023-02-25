import { TFeedback } from '@/services/api';

export type TFeedBackProps = {
  list?: TFeedback[] | undefined;
  onShowModal?: () => void;
};

export type TListFeedBackData = {
  id: number;
  className: string;
};
