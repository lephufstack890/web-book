export type TTabItemDetailProps = {
  data: TListChildData[];
  id: number;
  dataSeeMore: TListChildData[];
};

export type TListChildData = {
  id: number;
  cat_id: number;
  key: string | number;
  title: string;
  thumbnail: string;
  icon: string;
  note: string;
  noteSeeMore: string;
  className: string;
  col: number;
  color: string;
  listChild: Array;
};
