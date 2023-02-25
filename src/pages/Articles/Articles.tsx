import { Col, Row } from 'antd';
import React from 'react';
import ListPost from './ListFilterPosts';
import ListMenu from './Menu';

import ListNewPost from './NewPosts/ListPost';

const Courses: React.FC = () => {
  return (
    <div className="container">
      <ListNewPost />
      <Row>
        <Col span={24} md={{ span: 24 }} lg={{ span: 6 }} sm={{ span: 24 }} style={{ paddingLeft: '1rem' }}>
          <ListMenu />
        </Col>
        <Col span={24} lg={{ span: 18 }}>
          <ListPost />
        </Col>
      </Row>
    </div>
  );
};

export default Courses;
