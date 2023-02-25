import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import { Col, Row } from 'antd';
import { TRootState } from '@/redux/reducers';

import { TIntroductionProps } from './Introduction.types.d';
import slider from '@/assets/images/slider.png';
import avatar from '@/assets/images/avatar.png';
import introLine from '@/assets/images/intro-line.png';
import bookIcon from '@/assets/images/bookicon.svg';
import arrowDetail from '@/assets/images/arrowDetail.svg';
import './Introduction.scss';

const Introduction: React.FC<TIntroductionProps> = () => {
  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse?.data);
  return (
    <div className="Introduction">
      <div className="container">
        <Row className="Introduction-wrapper">
          <Col span={24} md={{ span: 12 }} lg={{ span: 16 }} sm={{ span: 24 }} className="Introduction-swiper">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              // navigation
              autoplay={{ delay: 2000 }}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <img className="Introduction-sliderItem" src={slider} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="Introduction-sliderItem" src={slider} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="Introduction-sliderItem" src={slider} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="Introduction-sliderItem" src={slider} alt="" />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }} sm={{ span: 24 }}>
            <div className="Introduction-info">
              <div className="Introduction-title">
                <img src={bookIcon} alt="" className="Introduction-title-img" />
                <h2 className="Introduction-title-text">Kệ sách của tôi</h2>
              </div>
              <div className="Introduction-user">
                <h2 className="Introduction-user-name">Nguyễn Duy Thành</h2>
                <img src={avatar} alt="" className="Introduction-user-img" />
              </div>
              <Row className="Introduction-cart">
                <Col lg={{ span: 6 }} className="Introduction-save">
                  <h3 className="Introduction-save-text">Đã lưu</h3>
                  <p className="Introduction-save-number">01</p>
                </Col>
                <div className="Introduction-line">
                  <img src={introLine} alt="" />
                </div>
                <Col lg={{ span: 6 }} className="Introduction-buy">
                  <h3 className="Introduction-buy-text">Đã mua</h3>
                  <p className="Introduction-buy-number">01</p>
                </Col>
                <div className="Introduction-line">
                  <img src={introLine} alt="" />
                </div>
                <Col lg={{ span: 6 }} className="Introduction-done">
                  <h3 className="Introduction-done-text">Đã hoàn tất</h3>
                  <p className="Introduction-done-number">01</p>
                </Col>
              </Row>
              <a href="/" className="Introduction-seeDetail">
                Xem chi tiết <img src={arrowDetail} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Introduction;
