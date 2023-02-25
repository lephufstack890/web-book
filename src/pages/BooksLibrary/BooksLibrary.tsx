/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesEmotion from '@/containers/CategoriesEmotion';
import BooksList from '@/containers/BooksList';
import Introduction from '@/containers/Introduction';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import {
  EGetCategoryListAction,
  getCategoryListAction,
  getFilterProductListAction,
  getProductsByCategoriesAction,
  uiActions,
} from '@/redux/actions';
import { TFilterProductList, TGetCategoryListParams, TGetProductsByCategoriesPaths } from '@/services/api';
import { TCategory } from '@/common/models';
import { getTotalPage } from '@/utils/functions';
import { TRootState } from '@/redux/reducers';

const BooksLibrary: React.FC = () => {
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = useState<any>([]);

  const categoriesState = useSelector((state: TRootState) => state.uiReducer.categories);

  const [getProductsParamsRequest, setGetProductsParamsRequest] = useState<{
    paths?: TGetProductsByCategoriesPaths;
  }>({
    paths: undefined,
  });
  const getProductsByCategoryState = useSelector(
    (state: TRootState) => state.productReducer.getProductsByCategoriesResponse?.data,
  );

  const [getCategoryListParamsRequest, setGetCategoryListParamsRequest] = useState<TGetCategoryListParams>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE * 5,
  });
  const [categoryList, setCategoryList] = useState<TCategory[]>();
  const getCategoryListTotalState = useSelector(
    (state: TRootState) => state.categoryReducer.getCategoryListResponse?.data,
  );
  const getCategoryListLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EGetCategoryListAction.GET_CATEGORY_LIST],
  );

  const getProductFilterList = useSelector(
    (state: TRootState) => state.productReducer.getFilterProductListResponse?.data,
  );

  const handleClickCategory = (data: TCategory, indexArray?: number): void => {
    if (typeof indexArray === 'number') {
      const isExisted = categoriesState?.includes(data._id);

      if (!isExisted) {
        const newFilter = categoriesState?.map((item, index) => {
          if (index === indexArray) return data._id;

          return item;
        });

        dispatch(uiActions.setCategories(newFilter));
      }
    }
  };

  const handleFilterProduct = (data: TFilterProductList): void => {
    const isExisted = getProductsParamsRequest.paths?.filter === data._id;
    setGetProductsParamsRequest({
      ...getProductsParamsRequest,
      paths: {
        filter: isExisted ? undefined : data._id,
      },
    });
    setCategoryId([getProductsParamsRequest.paths?.filter]);
  };
  const getCategoryList = useCallback(() => {
    dispatch(
      getCategoryListAction.request({ params: getCategoryListParamsRequest }, (response): void => {
        setCategoryList(response.data);
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, getCategoryListParamsRequest]);

  const getFilterProductList = useCallback(() => {
    dispatch(getFilterProductListAction.request({}));
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getProductsByCategoriesAction.request({
        ...getProductsParamsRequest,
        body: categoryId,
      }),
    );
  }, [dispatch, getProductsParamsRequest, categoryId]);

  useEffect(() => {
    getCategoryList();
  }, [getCategoryList]);

  useEffect(() => {
    getFilterProductList();
  }, [getFilterProductList]);

  useEffect(() => {
    return (): void => {
      dispatch(getProductsByCategoriesAction.success(undefined));
    };
  }, [dispatch]);

  return (
    <div className="BooksLibrary">
      <Introduction />
      <CategoriesEmotion
        data={getProductFilterList}
        ids={categoriesState}
        loading={getCategoryListLoading}
        onClickFilter={handleFilterProduct}
        onClickItem={handleClickCategory}
      />
      <BooksList
        ids={[getProductsParamsRequest.paths?.filter]}
        dataFilter={categoryList}
        data={getProductsByCategoryState}
        onClickFilter={handleFilterProduct}
        emptyTitle="Lưa chọn 3 danh mục để tìm kiếm"
      />
    </div>
  );
};

export default BooksLibrary;
