/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { TCourseArticleSameTopicProps } from './CourseArticleSameTopic.types.d';
import './CourseArticleSameTopic.scss';
import Icon2 from '@/assets/images/articleDetail/icon2.svg';
import Icon3 from '@/assets/images/articleDetail/icon3.svg';
import Icon5 from '@/assets/images/articleDetail/icon5.svg';
import Icon6 from '@/assets/images/articleDetail/icon6.svg';
import Icon7 from '@/assets/images/articleDetail/icon7.svg';
import Icon8 from '@/assets/images/articleDetail/icon8.svg';
import Icon9 from '@/assets/images/articleDetail/icon9.svg';
import Icon4 from '@/assets/images/articleDetail/icon4.svg';
import Item3 from '@/assets/images/articleDetail/item3.png';
import Item4 from '@/assets/images/articleDetail/item4.png';
import Item5 from '@/assets/images/articleDetail/item5.png';
import Item6 from '@/assets/images/articleDetail/item6.png';
import Item7 from '@/assets/images/articleDetail/item7.png';

const CourseArticleSameTopic: React.FC<TCourseArticleSameTopicProps> = () => {
  return (
    <>
      <div className="CourseSameTopic">
        <div className="CourseSameTopic-title">
          <div className="CourseSameTopic-title-wrapper">
            <div className="CourseSameTopic-title-icon">
              <img src={Icon2} alt="" />
            </div>
            <p className="CourseSameTopic-title-text">Khóa học cùng chủ đề</p>
          </div>
        </div>
        <div className="CourseSameTopic-content">
          <img src={Item3} alt="" />
          <div className="CourseSameTopic-desc">
            <div className="CourseSameTopic-bgWrapper">
              <div className="CourseSameTopic-bgFront">
                <img src={Item4} alt="" />
                <p>Giao tiếp & ứng xử</p>
              </div>
              <div className="CourseSameTopic-bgBack">
                <img src={Item5} alt="" />
              </div>
            </div>
            <div className="CourseSameTopic-descWrapper">
              <div className="CourseSameTopic-desc-title">
                <h2 className="CourseSameTopic-desc-title-text">GIAO TIẾP THÔNG MINH VỚI...</h2>
                <div className="CourseSameTopic-desc-title-icon">
                  <img src={Icon3} alt="" />
                  <img src={Icon4} alt="" style={{ margin: '0px 12px' }} />
                </div>
              </div>
              <p className="CourseSameTopic-speaker">
                Diễn giả: <span>Trung Quân</span>
              </p>
              <div className="CourseSameTopic-evaluateWrapper">
                <div className="CourseSameTopic-evaluate">
                  <img src={Icon5} alt="" />
                  <img src={Icon5} alt="" />
                  <img src={Icon5} alt="" />
                  <img src={Icon5} alt="" />
                  <img src={Icon5} alt="" />
                </div>
                <div className="CourseSameTopic-student">
                  <img src={Icon6} alt="" className="CourseSameTopic-student-icon" />
                  <p className="CourseSameTopic-student-count">257 học viên</p>
                </div>
              </div>
              <div className="CourseSameTopic-timeLesson">
                <div className="CourseSameTopic-lesson">
                  <img src={Icon7} alt="" className="CourseSameTopic-lesson-icon" />
                  <p className="CourseSameTopic-lesson-count">15 bài giảng</p>
                </div>
                <div className="CourseSameTopic-time">
                  <img src={Icon8} alt="" className="CourseSameTopic-time-icon" />
                  <p className="CourseSameTopic-time-count">5 giờ 30 phút</p>
                </div>
              </div>
            </div>
            <div className="CourseSameTopic-priceWrapper">
              <div className="CourseSameTopic-price">
                <div className="CourseSameTopic-price-titleWrapper">
                  <p className="CourseSameTopic-price-title">Giá ưu đãi:</p>
                  <p className="CourseSameTopic-price-percent">
                    (Giảm <span>30%</span>)
                  </p>
                </div>
                <div className="CourseSameTopic-price-bcoin">
                  <p className="CourseSameTopic-price-bcoinNew">499 Bcoin</p>
                  <p className="CourseSameTopic-price-bcoinOld">1.299 Bcoin</p>
                </div>
              </div>
            </div>
            <div className="CourseSameTopic-regisLesson">
              <img src={Icon9} alt="" className="CourseSameTopic-regisLesson-icon" />
              <p className="CourseSameTopic-regisLesson-text">Đăng ký khóa học</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ArticleSameTopic">
        <div className="ArticleSameTopic-list">
          <h2 className="ArticleSameTopic-title">Bài viết cùng chủ đề</h2>
          <a href="http://">
            <div className="ArticleSameTopic-list-item">
              <img src={Item6} alt="" className="ArticleSameTopic-list-item-image" />
              <div className="ArticleSameTopic-list-item-content">
                <h3 className="ArticleSameTopic-list-item-title">Phía sau những câu chuyện cổ tích</h3>
                <p className="ArticleSameTopic-list-item-desc">
                  Người liên tục than thở, trách cứ gia đình mình với những người xung quanh, dù vô tình hay cố ý thì
                  người đó sẽ trở thành ngườ...
                </p>
              </div>
            </div>
          </a>
          <a href="http://">
            <div className="ArticleSameTopic-list-item">
              <img src={Item6} alt="" className="ArticleSameTopic-list-item-image" />
              <div className="ArticleSameTopic-list-item-content">
                <h3 className="ArticleSameTopic-list-item-title">Phía sau những câu chuyện cổ tích</h3>
                <p className="ArticleSameTopic-list-item-desc">
                  Người liên tục than thở, trách cứ gia đình mình với những người xung quanh, dù vô tình hay cố ý thì
                  người đó sẽ trở thành ngườ...
                </p>
              </div>
            </div>
          </a>
          <a href="http://">
            <div className="ArticleSameTopic-list-item">
              <img src={Item6} alt="" className="ArticleSameTopic-list-item-image" />
              <div className="ArticleSameTopic-list-item-content">
                <h3 className="ArticleSameTopic-list-item-title">Phía sau những câu chuyện cổ tích</h3>
                <p className="ArticleSameTopic-list-item-desc">
                  Người liên tục than thở, trách cứ gia đình mình với những người xung quanh, dù vô tình hay cố ý thì
                  người đó sẽ trở thành ngườ...
                </p>
              </div>
            </div>
          </a>
          <a href="http://">
            <div className="ArticleSameTopic-list-item">
              <img src={Item6} alt="" className="ArticleSameTopic-list-item-image" />
              <div className="ArticleSameTopic-list-item-content">
                <h3 className="ArticleSameTopic-list-item-title">Phía sau những câu chuyện cổ tích</h3>
                <p className="ArticleSameTopic-list-item-desc">
                  Người liên tục than thở, trách cứ gia đình mình với những người xung quanh, dù vô tình hay cố ý thì
                  người đó sẽ trở thành ngườ...
                </p>
              </div>
            </div>
          </a>
          <a href="http://">
            <div className="ArticleSameTopic-list-item">
              <img src={Item6} alt="" className="ArticleSameTopic-list-item-image" />
              <div className="ArticleSameTopic-list-item-content">
                <h3 className="ArticleSameTopic-list-item-title">Phía sau những câu chuyện cổ tích</h3>
                <p className="ArticleSameTopic-list-item-desc">
                  Người liên tục than thở, trách cứ gia đình mình với những người xung quanh, dù vô tình hay cố ý thì
                  người đó sẽ trở thành ngườ...
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default CourseArticleSameTopic;
