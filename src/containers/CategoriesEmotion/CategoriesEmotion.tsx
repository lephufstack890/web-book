/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import { TCategoriesEmotionProps } from './CategoriesEmotion.types.d';
import './CategoriesEmotion.scss';

const CategoriesEmotion: React.FC<TCategoriesEmotionProps> = ({
  loading,
  titleSticky,
  ids = [],
  data = [],
  onClickItem,
  onClickFilter,
  onLoadMore,
}) => {
  const handleScroll = (e: React.UIEvent<HTMLDivElement>): void => {
    const element = e.currentTarget;
    const isScrollEnd = element.offsetWidth + Math.ceil(element.scrollLeft) >= element.scrollWidth;

    if (isScrollEnd && !loading) onLoadMore?.();
  };

  return (
    <div className="CategoriesEmotion">
      <div className="container">
        <h2 className="CategoriesEmotion-select">Lựa chọn danh mục</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            300: {
              width: 640,
              slidesPerView: 3,
            },
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 4,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 5,
            },
          }}
          pagination={{ clickable: true }}
        >
          {data.map((item) => (
            <SwiperSlide onClick={(): void => onClickFilter?.(item)}>{item.name}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategoriesEmotion;
