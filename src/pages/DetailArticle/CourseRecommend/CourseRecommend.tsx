/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { TCourseRecommendProps } from './CourseRecommend.types';
import './CourseRecommend.scss';

const CourseRecommend: React.FC<TCourseRecommendProps> = () => {
  return (
    <div className="CourseRecommend">
      <h2 className="CourseRecommend-title">Khóa học đề xuất</h2>
    </div>
  );
};

export default CourseRecommend;
