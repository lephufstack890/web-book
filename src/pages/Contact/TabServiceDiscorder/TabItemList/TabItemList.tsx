/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import IconArrow from '@/assets/images/icon-arrow-top.svg';
import IconArrowDown from '@/assets/images/IconArrowDown.svg';

import { TTabItemListProps } from './TabItemList.types.d';
import './TabItemList.scss';
import TabItemDetail from '../TabItemDetail';

const TabItemList: React.FC<TTabItemListProps> = ({ item }) => {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = (): void => {
    setShow(!show);
  };
  return (
    <div>
      <Col span={24} lg={{ span: 100 }} className="TabServiceDiscorder-list-item" onClick={handleShow}>
        <img src={item.thumbnail} alt="" />
        <img src={item.icon} alt="" className="TabServiceDiscorder-list-item-mantality" />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <h1>{item.key}</h1>
        {show ? (
          <img src={IconArrowDown} alt="" className="TabServiceDiscorder-list-item-arrow" />
        ) : (
          <img src={IconArrow} alt="" className="TabServiceDiscorder-list-item-arrow" />
        )}
      </Col>
      {show ? <TabItemDetail data={item.listChild} dataSeeMore={item.listSeeMore} id={item.id} /> : ''}
    </div>
  );
};

export default TabItemList;
