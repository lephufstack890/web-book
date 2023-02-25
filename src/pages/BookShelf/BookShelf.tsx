/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import BookBlock from '@/components/BookBlock';
import AccountReward from '@/containers/AccountReward';
import { TGetMyProductParams } from '@/services/api';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { getMyProductAction, getProductsSavedAction } from '@/redux/actions';
import { Paths } from '@/pages/routers';
import Pagination from '@/components/Pagination';
import { TRootState } from '@/redux/reducers';
import { removeAccents, scrollToTop, urlSafe } from '@/utils/functions';
import Empty from '@/components/Empty';
import { TProduct } from '@/common/models';

import { EKeyBookShelfTab } from './BookShelf.enums';
import { dataBookShelfTabs } from './BookShelf.data';
import './BookShelf.scss';

const BookShelf: React.FC = () => {
  const dispatch = useDispatch();

  const [keyBookShelfTab, setKeyBookShelfTab] = useState(EKeyBookShelfTab.BOUGHT);
  const [getMyProductParamsRequest, setGetMyProductParamsRequest] = useState<TGetMyProductParams>({
    page: DEFAULT_PAGE,
    pageSize: 9,
  });
  const isMyBookTab = keyBookShelfTab === EKeyBookShelfTab.BOUGHT;
  const currentTab = dataBookShelfTabs.find((item) => item.value === keyBookShelfTab);

  const myProductsState = useSelector((state: TRootState) => state.productReducer.getMyProductResponse?.data);
  const myProductsSavedState = useSelector((state: TRootState) => state.productReducer.getProductsSavedResponse?.data);
  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);

  const data = isMyBookTab
    ? myProductsState?.records?.map((item) => item.product)
    : myProductsSavedState?.records?.map((item) => item.product);
  const total = isMyBookTab ? myProductsState?.total : myProductsSavedState?.total;
  const isEmpty = data?.length === 0;

  const handleChangeKeyBookShelfTab = (key: EKeyBookShelfTab): void => {
    setKeyBookShelfTab(key);
    setGetMyProductParamsRequest({ page: DEFAULT_PAGE, pageSize: DEFAULT_PAGE_SIZE });
  };

  const handleClickBookBlock = (dataBook: TProduct): void => {
    if (isMyBookTab) {
      navigate(Paths.BookReader(urlSafe(removeAccents(dataBook.name)), dataBook._id));
    } else {
      navigate(Paths.BookDetail(urlSafe(removeAccents(dataBook.name)), dataBook._id));
    }
  };

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetMyProductParamsRequest({
      ...getMyProductParamsRequest,
      page,
      pageSize: pageSize || getMyProductParamsRequest.pageSize,
    });
    scrollToTop();
  };

  const getMyProducts = useCallback(() => {
    if (isMyBookTab) {
      dispatch(getMyProductAction.request({ params: getMyProductParamsRequest }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, getMyProductParamsRequest]);

  const getMyProductsSaved = useCallback(() => {
    if (!isMyBookTab) {
      dispatch(getProductsSavedAction.request({ params: getMyProductParamsRequest }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, getMyProductParamsRequest]);

  useEffect(() => {
    getMyProductsSaved();
  }, [getMyProductsSaved]);

  useEffect(() => {
    getMyProducts();
  }, [getMyProducts]);

  return (
    <div className="BookShelf">
      <div className="container">
        <div className="BookShelf-wrapper">
          <div className="BookShelf-tabs">
            <Row gutter={[40, 24]}>
              <Col span={24} lg={{ span: 6 }}>
                {isMobile && <AccountReward />}

                <div className="BookShelf-tabs-header">
                  <Row>
                    {dataBookShelfTabs.map((item) => (
                      <Col span={24}>
                        <div
                          key={item.value}
                          className={classNames('BookShelf-tabs-header-item', {
                            active: keyBookShelfTab === item.value,
                          })}
                          onClick={(): void => handleChangeKeyBookShelfTab(item.value)}
                        >
                          {item.label}
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>

                {!isMobile && <AccountReward />}
              </Col>
              <Col span={24} lg={{ span: 18 }}>
                <div className="BookShelf-title">Tất cả {currentTab?.label}</div>

                <div className="BookShelf-tabs-body">
                  {isEmpty ? (
                    <Empty title="Không có dữ liệu sách đã mua" />
                  ) : (
                    <>
                      <div className="BookShelf-list flex flex-wrap">
                        {data?.map((item) => (
                          <div key={item._id} className="BookShelf-list-item">
                            <BookBlock {...item} onClick={(): void => handleClickBookBlock(item)} />
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  <div className="BookShelf-pagination flex justify-center">
                    <Pagination
                      page={getMyProductParamsRequest.page}
                      pageSize={getMyProductParamsRequest.pageSize}
                      total={total}
                      onChange={handlePageChange}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
