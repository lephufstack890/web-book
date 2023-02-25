/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { Link } from '@reach/router';
import { TListPostProps } from './ListPost.types';
import './ListPost.scss';
import Item1 from '@/assets/images/articles/item1.png';
import Item2 from '@/assets/images/articles/item2.png';
import Item3 from '@/assets/images/articles/item3.png';
import Item4 from '@/assets/images/articles/item4.png';

const ListPost: React.FC<TListPostProps> = () => {
  return (
    <div className="ListPost">
      <h2 className="ListPost-title">Bài viết mới</h2>
      <Row className="ListPost-list">
        <Col span={24} lg={{ span: 6 }} md={{ span: 12 }} className="ListPost-item">
          <Link to="/chi-tiet-bai-viet" className="ListPost-item-wrapper">
            <img className="ListPost-item-image" src={Item1} alt="" />
            <div className="ListPost-item-content">
              <p className="ListPost-item-title">Phía sau những câu chuyện cuộc sống và như...</p>
              <div className="ListPost-item-attention">
                <p className="ListPost-item-theme">
                  Chủ đề: <span>Bài học cuộc sống</span>
                </p>
                <p className="ListPost-item-readtime">5 phút đọc</p>
              </div>
            </div>
          </Link>
        </Col>
        <Col span={24} lg={{ span: 6 }} md={{ span: 12 }} className="ListPost-item">
          <Link to="/chi-tiet-bai-viet" className="ListPost-item-wrapper">
            <img className="ListPost-item-image" src={Item2} alt="" />
            <div className="ListPost-item-content">
              <p className="ListPost-item-title">Phía sau những câu chuyện cuộc sống và như...</p>
              <div className="ListPost-item-attention">
                <p className="ListPost-item-theme">
                  Chủ đề: <span>Bài học cuộc sống</span>
                </p>
                <p className="ListPost-item-readtime">5 phút đọc</p>
              </div>
            </div>
          </Link>
        </Col>
        <Col span={24} lg={{ span: 6 }} md={{ span: 12 }} className="ListPost-item">
          <Link to="/chi-tiet-bai-viet" className="ListPost-item-wrapper">
            <img className="ListPost-item-image" src={Item3} alt="" />
            <div className="ListPost-item-content">
              <p className="ListPost-item-title">Phía sau những câu chuyện cuộc sống và như...</p>
              <div className="ListPost-item-attention">
                <p className="ListPost-item-theme">
                  Chủ đề: <span>Bài học cuộc sống</span>
                </p>
                <p className="ListPost-item-readtime">5 phút đọc</p>
              </div>
            </div>
          </Link>
        </Col>
        <Col span={24} lg={{ span: 6 }} md={{ span: 12 }} className="ListPost-item">
          <Link to="/chi-tiet-bai-viet" className="ListPost-item-wrapper">
            <img className="ListPost-item-image" src={Item4} alt="" />
            <div className="ListPost-item-content">
              <p className="ListPost-item-title">Phía sau những câu chuyện cuộc sống và như...</p>
              <div className="ListPost-item-attention">
                <p className="ListPost-item-theme">
                  Chủ đề: <span>Bài học cuộc sống</span>
                </p>
                <p className="ListPost-item-readtime">5 phút đọc</p>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default ListPost;
