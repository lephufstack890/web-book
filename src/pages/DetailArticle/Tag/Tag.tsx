/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { TTagProps } from './Tag.types.d';
import './Tag.scss';

const Tag: React.FC<TTagProps> = () => {
  return (
    <div className="Tag">
      <h3>Tag:</h3>
      <span>Nói chuyện hài hước</span>
      <span>Bày tỏ suy nghĩ</span>
    </div>
  );
};

export default Tag;
