/* eslint-disable no-underscore-dangle */
import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'antd';

import { getPopularListAction } from '@/redux/actions';
import { TTabServicePopularFormProps } from './TabServicePopular.types';
import { dataPopular } from './TabServicePopular.data';
import TabItemList from './TabItemList';

const TabServicePopular: React.FC<TTabServicePopularFormProps> = () => {
  const dispatch = useDispatch();

  const getPopularList = useCallback(() => {
    dispatch(getPopularListAction.request({}));
  }, [dispatch]);

  useEffect(() => {
    getPopularList();
  }, [getPopularList]);

  return (
    <div className="container">
      <div className="TabServicePopular-list">
        {dataPopular.map((item) => (
          <div key={item.id}>
            <TabItemList item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabServicePopular;
