/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { Link } from '@reach/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import './_swiper.scss';
import { TBookProposeProps } from './BookPropose.types.d';
import './BookPropose.scss';
import Item8 from '@/assets/images/articleDetail/item8.png';
import Icon5 from '@/assets/images/articleDetail/icon5.svg';
import Icon10 from '@/assets/images/articleDetail/icon10.svg';
import Icon11 from '@/assets/images/articleDetail/icon11.svg';

const BookPropose: React.FC<TBookProposeProps> = () => {
  return (
    <div className="BookPropose">
      <h2 className="BookPropose-title">Tâm sách đề xuất</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        breakpoints={{
          300: {
            width: 270,
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            width: 300,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 1270,
            slidesPerView: 3,
          },
        }}
        // navigation
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide>
          <div className="BookPropose-itemWrapper">
            <div className="BookPropose-item">
              <img src={Item8} alt="" className="BookPropose-item-image" />
              <div className="BookPropose-item-content">
                <div className="BookPropose-item-contentWrapper">
                  <h2 className="BookPropose-item-content-title">Khoa học và đời sống xu...</h2>
                  <p className="BookPropose-item-content-author">
                    Tác giả : <span>Wiliam Cavalho</span>
                  </p>
                  <div className="BookPropose-item-content-viewTime">
                    <div className="BookPropose-item-content-view">
                      <img src={Icon10} alt="" className="BookPropose-item-content-icon" />
                      <p className="BookPropose-item-content-countView">169 lượt xem</p>
                    </div>
                    <div className="BookPropose-item-content-time">
                      <img src={Icon11} alt="" className="BookPropose-item-content-icon" />
                      <p className="BookPropose-item-content-clock">23 phút</p>
                    </div>
                  </div>
                  <div className="BookPropose-item-star">
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                  </div>
                  <div className="BookPropose-item-seeDetailWrapper">
                    <Link to="/" className="BookPropose-item-seeDetail">
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="BookPropose-itemWrapper">
            <div className="BookPropose-item">
              <img src={Item8} alt="" className="BookPropose-item-image" />
              <div className="BookPropose-item-content">
                <div className="BookPropose-item-contentWrapper">
                  <h2 className="BookPropose-item-content-title">Khoa học và đời sống xu...</h2>
                  <p className="BookPropose-item-content-author">
                    Tác giả : <span>Wiliam Cavalho</span>
                  </p>
                  <div className="BookPropose-item-content-viewTime">
                    <div className="BookPropose-item-content-view">
                      <img src={Icon10} alt="" className="BookPropose-item-content-icon" />
                      <p className="BookPropose-item-content-countView">169 lượt xem</p>
                    </div>
                    <div className="BookPropose-item-content-time">
                      <img src={Icon11} alt="" className="BookPropose-item-content-icon" />
                      <p className="BookPropose-item-content-clock">23 phút</p>
                    </div>
                  </div>
                  <div className="BookPropose-item-star">
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                  </div>
                  <div className="BookPropose-item-seeDetailWrapper">
                    <Link to="/" className="BookPropose-item-seeDetail">
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="BookPropose-itemWrapper">
            <div className="BookPropose-item">
              <img src={Item8} alt="" className="BookPropose-item-image" />
              <div className="BookPropose-item-content">
                <div className="BookPropose-item-contentWrapper">
                  <h2 className="BookPropose-item-content-title">Khoa học và đời sống xu...</h2>
                  <p className="BookPropose-item-content-author">
                    Tác giả : <span>Wiliam Cavalho</span>
                  </p>
                  <div className="BookPropose-item-content-viewTime">
                    <div className="BookPropose-item-content-view">
                      <img src={Icon10} alt="" className="BookPropose-item-content-icon" />
                      <p className="BookPropose-item-content-countView">169 lượt xem</p>
                    </div>
                    <div className="BookPropose-item-content-time">
                      <img src={Icon11} alt="" className="BookPropose-item-content-icon" />
                      <p className="BookPropose-item-content-clock">23 phút</p>
                    </div>
                  </div>
                  <div className="BookPropose-item-star">
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                  </div>
                  <div className="BookPropose-item-seeDetailWrapper">
                    <Link to="/" className="BookPropose-item-seeDetail">
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="BookPropose-itemWrapper">
            <div className="BookPropose-item">
              <img src={Item8} alt="" className="BookPropose-item-image" />
              <div className="BookPropose-item-content">
                <div className="BookPropose-item-contentWrapper">
                  <h2 className="BookPropose-item-content-title">Khoa học và đời sống xu...</h2>
                  <p className="BookPropose-item-content-author">
                    Tác giả : <span>Wiliam Cavalho</span>
                  </p>
                  <div className="BookPropose-item-content-viewTime">
                    <div className="BookPropose-item-content-view">
                      <img src={Icon10} alt="" className="BookPropose-item-content-icon" />
                      <p className="BookPropose-item-content-countView">169 lượt xem</p>
                    </div>
                    <div className="BookPropose-item-content-time">
                      <img src={Icon11} alt="" className="BookPropose-item-content-icon" />
                      <p className="BookPropose-item-content-clock">23 phút</p>
                    </div>
                  </div>
                  <div className="BookPropose-item-star">
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                  </div>
                  <div className="BookPropose-item-seeDetailWrapper">
                    <Link to="/" className="BookPropose-item-seeDetail">
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="BookPropose-itemWrapper">
            <div className="BookPropose-item">
              <img src={Item8} alt="" className="BookPropose-item-image" />
              <div className="BookPropose-item-content">
                <div className="BookPropose-item-contentWrapper">
                  <h2 className="BookPropose-item-content-title">Khoa học và đời sống xu...</h2>
                  <p className="BookPropose-item-content-author">
                    Tác giả : <span>Wiliam Cavalho</span>
                  </p>
                  <div className="BookPropose-item-content-viewTime">
                    <div className="BookPropose-item-content-view">
                      <img src={Icon10} alt="" className="BookPropose-item-content-icon" />
                      <p className="BookPropose-item-content-countView">169 lượt xem</p>
                    </div>
                    <div className="BookPropose-item-content-time">
                      <img src={Icon11} alt="" className="BookPropose-item-content-icon" />
                      <p className="BookPropose-item-content-clock">23 phút</p>
                    </div>
                  </div>
                  <div className="BookPropose-item-star">
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                    <img src={Icon5} alt="" />
                  </div>
                  <div className="BookPropose-item-seeDetailWrapper">
                    <Link to="/" className="BookPropose-item-seeDetail">
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BookPropose;
