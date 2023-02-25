/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Col, Row } from 'antd';

import { TTabServiceDiscorderProps } from './TabServiceDiscorder.types.d';
import { dataDiscord } from './TabServiceDiscorder.data';
import TabItemDetail from './TabItemDetail';
import TabItemList from './TabItemList';

const TabServiceDiscorder: React.FC<TTabServiceDiscorderProps> = () => {
  return (
    <div className="container">
      <Row className="TabServiceDiscorder-list">
        {dataDiscord.map((item) => (
          <div key={item.id}>
            <TabItemList item={item} />
          </div>
        ))}
      </Row>
    </div>
  );
};

export default TabServiceDiscorder;
