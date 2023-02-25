/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import { navigate } from '@reach/router';

import BookBlock from '@/components/BookBlock';
import Pagination from '@/components/Pagination';
import Carousels from '@/components/Carousels';
import { TProduct } from '@/common/models';
import { Paths } from '@/pages/routers';
import Empty from '@/components/Empty';

import { TBooksListProps } from './BooksList.types.d';
import './BooksList.scss';
import BookListDevelopIcon from '@/assets/images/BookListDevelopIcon.svg';
import BookListArrowTopIcon from '@/assets/images/BookListArrowTopIcon.svg';
import MenuItem from './MenuItem';
import BooksItem from './BooksItem';

const BooksList: React.FC<TBooksListProps> = ({
  ids = [],
  data = [],
  dataFilter,
  title,
  useCarousel,
  emptyTitle,
  page = 0,
  pageSize = 0,
  total = 0,
  onPaginateChange,
  onClickFilter,
}) => {
  const isEmpty = data && data.length === 0;
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleClickBookBlock = (dataBook: TProduct): void => {
    if (!isDragging) {
      if (dataBook.slug && dataBook._id) {
        navigate(Paths.BookDetail(dataBook.slug, dataBook._id));
      }
    }
  };

  return (
    <div className="BooksList">
      <div className="container">
        <Row>
          <Col span={24} md={{ span: 12 }} lg={{ span: 6 }} sm={{ span: 24 }}>
            <h2 className="BooksList-title">Lựa chọn chủ đề</h2>
            <div className="BooksList-Developwrapper">
              <div className="BooksList-Developwrapper-title">
                <img src={BookListDevelopIcon} alt="" />
                <h2 className="BooksList-develop">Phát triển bản thân</h2>
              </div>
              <div className="BooksList-Developwrapper-checkbox">
                <input type="checkbox" className="BooksList-input" />
                <span className="BooksList-text">
                  <span>Tất cả</span>
                </span>
                <img src={BookListArrowTopIcon} alt="" className="BooksList-icon" />
              </div>
            </div>
            <div className="BooksList-menu">
              <MenuItem data={dataFilter} onClickFilter={onClickFilter} />
            </div>
          </Col>
          <Col span={24} lg={{ span: 18 }}>
            <div className="BooksList-list flex flex-wrap">
              <div className="BooksList-list-item">
                <BooksItem data={data} />
              </div>
            </div>
            <div className="BooksList-pagination flex justify-end">
              <Pagination page={1} pageSize={5} total={10} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BooksList;
