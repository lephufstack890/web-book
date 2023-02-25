export type TTabItemDetailProps = {
  data: TListChildData[];
  id: number;
};

export type TListChildData = {
  id: number;
  cat_id: number;
  key: string | number;
  title: string;
  description: string;
  des: string;
  thumbnail: string;
  icon: string;
  note: string;
  color: string;
  col: number;
  listChild: Array;
};
