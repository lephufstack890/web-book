/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { TListMenuProps } from './ListMenu.types';
import './ListMenu.scss';
import Icon1 from '@/assets/images/articles/icon1.svg';
import { dataMenu } from './ListMenu.data';

const ListMenu: React.FC<TListMenuProps> = () => {
  return (
    <div className="ListMenu">
      <h2 className="ListMenu-title">Lựa chọn chủ đề</h2>
      <div className="ListMenu-list">
        {dataMenu.map((item) => (
          <a href="http://" className="ListMenu-item" key={item.id}>
            <img className="ListMenu-item-icon" src={item.icon} alt="" />
            <p className="ListMenu-item-text">{item.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ListMenu;
