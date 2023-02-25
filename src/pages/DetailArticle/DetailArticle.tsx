/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { TDetailArticleProps } from './DetailArticle.types.d';
import './DetailArticle.scss';
import ContentArticle from './Content';
import CourseArticleSameTopic from './CourseArticleSameTopic';
import BookPropose from './BookPropose';
import Tag from './Tag';
import CourseRecommend from './CourseRecommend';

const DetailArticle: React.FC<TDetailArticleProps> = () => {
  return (
    <div className="container">
      <Row>
        <Col span={24} lg={{ span: 15 }}>
          <ContentArticle />
        </Col>
        <Col span={24} lg={{ span: 8 }}>
          <CourseArticleSameTopic />
        </Col>
      </Row>
      <BookPropose />
      <Tag />
      <CourseRecommend />
    </div>
  );
};

export default DetailArticle;
