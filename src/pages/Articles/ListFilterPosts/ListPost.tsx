/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { Link } from '@reach/router';
import { TListPostProps } from './ListPost.types';
import Pagination from '@/components/Pagination';
import './ListPost.scss';
import Item5 from '@/assets/images/articles/item5.png';
import Icon4 from '@/assets/images/articles/icon4.svg';
import Icon5 from '@/assets/images/articles/icon5.svg';
import Icon6 from '@/assets/images/articles/icon6.svg';

const ListPost: React.FC<TListPostProps> = () => {
  return (
    <div className="ListFilterPost">
      <Row>
        <Col span={24} lg={{ span: 12 }} md={{ span: 24 }} className="ListFilterPost-item">
          <Link to="/chi-tiet-bai-viet">
            <img className="ListFilterPost-item-image" src={Item5} alt="" />
          </Link>
          <div className="ListFilterPost-item-contentWp">
            <Link to="/chi-tiet-bai-viet" className="ListFilterPost-item-desc">
              <h2 className="ListFilterPost-item-title">Phía sau những câu chuyện cuộc sống</h2>
              <div className="ListFilterPost-item-read">
                <img src={Icon4} alt="" />
                <p className="ListFilterPost-item-readtime">5 phút đọc</p>
              </div>
            </Link>
            <Link to="/chi-tiet-bai-viet" className="ListFilterPost-item-content">
              Người liên tục than thở, trách cứ gia đình mình với những người xung quanh, dù vô tình hay cố tình thì
              người đó sẽ không thể hạnh phúc dù ...
            </Link>
            <div className="ListFilterPost-item-attention">
              <p className="ListFilterPost-item-theme">
                Chủ đề: <span>Bài học cuộc sống</span>
              </p>
              <div className="ListFilterPost-item-likeFollow">
                <img src={Icon5} alt="" />
                <p className="ListFilterPost-item-likeCount">123 lượt</p>
                <img src={Icon6} alt="" style={{ marginLeft: '0.8rem' }} />
                <p className="ListFilterPost-item-followCount">1235 lượt</p>
              </div>
            </div>
          </div>
        </Col>
        <Col span={24} lg={{ span: 12 }} md={{ span: 24 }} className="ListFilterPost-item">
          <Link to="/chi-tiet-bai-viet">
            <img className="ListFilterPost-item-image" src={Item5} alt="" />
          </Link>
          <div className="ListFilterPost-item-contentWp">
            <Link to="/chi-tiet-bai-viet" className="ListFilterPost-item-desc">
              <h2 className="ListFilterPost-item-title">Phía sau những câu chuyện cuộc sống</h2>
              <div className="ListFilterPost-item-read">
                <img src={Icon4} alt="" />
                <p className="ListFilterPost-item-readtime">5 phút đọc</p>
              </div>
            </Link>
            <Link to="/chi-tiet-bai-viet" className="ListFilterPost-item-content">
              Người liên tục than thở, trách cứ gia đình mình với những người xung quanh, dù vô tình hay cố tình thì
              người đó sẽ không thể hạnh phúc dù ...
            </Link>
            <div className="ListFilterPost-item-attention">
              <p className="ListFilterPost-item-theme">
                Chủ đề: <span>Bài học cuộc sống</span>
              </p>
              <div className="ListFilterPost-item-likeFollow">
                <img src={Icon5} alt="" />
                <p className="ListFilterPost-item-likeCount">123 lượt</p>
                <img src={Icon6} alt="" style={{ marginLeft: '0.8rem' }} />
                <p className="ListFilterPost-item-followCount">1235 lượt</p>
              </div>
            </div>
          </div>
        </Col>
        <Col span={24} lg={{ span: 12 }} md={{ span: 24 }} className="ListFilterPost-item">
          <Link to="/chi-tiet-bai-viet">
            <img className="ListFilterPost-item-image" src={Item5} alt="" />
          </Link>
          <div className="ListFilterPost-item-contentWp">
            <Link to="/chi-tiet-bai-viet" className="ListFilterPost-item-desc">
              <h2 className="ListFilterPost-item-title">Phía sau những câu chuyện cuộc sống</h2>
              <div className="ListFilterPost-item-read">
                <img src={Icon4} alt="" />
                <p className="ListFilterPost-item-readtime">5 phút đọc</p>
              </div>
            </Link>
            <Link to="/chi-tiet-bai-viet" className="ListFilterPost-item-content">
              Người liên tục than thở, trách cứ gia đình mình với những người xung quanh, dù vô tình hay cố tình thì
              người đó sẽ không thể hạnh phúc dù ...
            </Link>
            <div className="ListFilterPost-item-attention">
              <p className="ListFilterPost-item-theme">
                Chủ đề: <span>Bài học cuộc sống</span>
              </p>
              <div className="ListFilterPost-item-likeFollow">
                <img src={Icon5} alt="" />
                <p className="ListFilterPost-item-likeCount">123 lượt</p>
                <img src={Icon6} alt="" style={{ marginLeft: '0.8rem' }} />
                <p className="ListFilterPost-item-followCount">1235 lượt</p>
              </div>
            </div>
          </div>
        </Col>
        <Col span={24} lg={{ span: 12 }} md={{ span: 24 }} className="ListFilterPost-item">
          <Link to="/chi-tiet-bai-viet">
            <img className="ListFilterPost-item-image" src={Item5} alt="" />
          </Link>
          <div className="ListFilterPost-item-contentWp">
            <Link to="/chi-tiet-bai-viet" className="ListFilterPost-item-desc">
              <h2 className="ListFilterPost-item-title">Phía sau những câu chuyện cuộc sống</h2>
              <div className="ListFilterPost-item-read">
                <img src={Icon4} alt="" />
                <p className="ListFilterPost-item-readtime">5 phút đọc</p>
              </div>
            </Link>
            <Link to="/chi-tiet-bai-viet" className="ListFilterPost-item-content">
              Người liên tục than thở, trách cứ gia đình mình với những người xung quanh, dù vô tình hay cố tình thì
              người đó sẽ không thể hạnh phúc dù ...
            </Link>
            <div className="ListFilterPost-item-attention">
              <p className="ListFilterPost-item-theme">
                Chủ đề: <span>Bài học cuộc sống</span>
              </p>
              <div className="ListFilterPost-item-likeFollow">
                <img src={Icon5} alt="" />
                <p className="ListFilterPost-item-likeCount">123 lượt</p>
                <img src={Icon6} alt="" style={{ marginLeft: '0.8rem' }} />
                <p className="ListFilterPost-item-followCount">1235 lượt</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="ListFilterPost-pagination flex justify-end">
        <Pagination page={1} pageSize={5} total={10} />
      </div>
    </div>
  );
};

export default ListPost;
