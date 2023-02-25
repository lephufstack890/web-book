export type TCategoriesEmotionProps = {
  data: Array;
  ids?: (string | undefined)[];
  loading?: boolean;
  titleSticky?: boolean;
  onClickFilter?: (data: TFilterProductList) => void;
  onClickItem?: (data: any, index?: number) => void;
  onLoadMore?: () => void;
};

// export type TCategoriesData = {
//   list: { name: string; _id: string; iconPath?: string }[];
// };
