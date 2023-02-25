/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { TContentArticleProps } from './ContentArticle.types';
import './ContentArticle.scss';
import Icon5 from '@/assets/images/articles/icon5.svg';
import Icon1 from '@/assets/images/articleDetail/icon1.svg';
import Icon6 from '@/assets/images/articles/icon6.svg';
import Item1 from '@/assets/images/articleDetail/item1.png';
import Item2 from '@/assets/images/articleDetail/item2.png';

const ContentArticle: React.FC<TContentArticleProps> = () => {
  return (
    <div className="ContentArticle">
      <h2 className="ContentArticle-title">Phía sau những câu chuyện cuộc sống</h2>
      <div className="ContentArticle-LikeFollow">
        <div className="ContentArticle-like">
          <img src={Icon5} alt="" />
          <p className="ContentArticle-likeCount">123</p>
        </div>
        <div className="ContentArticle-follow">
          <img src={Icon6} alt="" />
          <p className="ContentArticle-followCount">1235</p>
        </div>
        <div className="ContentArticle-listen">
          <div className="ContentArticle-listen-wrapper">
            <div className="ContentArticle-listen-icon">
              <img src={Icon1} alt="" />
            </div>
            <p className="ContentArticle-listen-text">Nghe Radio</p>
          </div>
        </div>
      </div>
      <div className="ContentArticle-content">
        <img className="ContentArticle-content-image" src={Item1} alt="" />
        <p className="ContentArticle-content-desc">
          Tellus magna vitae, quisque erat posuere semper. Tristique blandit turpis nunc, at lacinia lorem urna, in. At
          nisl pharetra nec vitae id nullam amet. Magna fames at nisi, tempor. Est, at molestie integer libero et. Eu
          velit congue at orci sodales sed .quis dui varius. Vel elementum eget commodo erat est dignissim. Mauris in mi
          viverra ut lectus nulla mauris vestibulum. Tellus magna vitae, quisque erat posuere semper. Tristique blandit
          turpis nunc, at lacinia lorem urna, in. At nisl pharetra nec vitae id nullam amet. Magna fames at nisi,
          tempor. Est, at molestie integer libero et. Eu velit congue at orci sodales sedquis dui varius. Vel elementum
          eget commodo erat est dignissim. Mauris in mi viverra ut lectus nulla mauris vestibulum. Tellus magna vitae,
          quisque erat posuere semper. Tristique blandit turpis nunc, at lacinia lorem urna, in. At nisl pharetra nec
          vitae id nullam amet. Magna fames at nisi, tempor. Est, at molestie integer libero et. Eu velit congue at orci
          sodales sed Lorem ultrices libero tempus id habitant magna. Diam et lacus, morbi non ultricies. Condimentum a
          sed adipiscing sit et, orci. Enim pellentesque pretium aliquet nullam diam. Dictumst amet, aliquet id maecenas
          cras. Condimentum consectetur est cras eleifend dictum vitae. Elit, eu nam egestas tempus, risus sit commodo
          tristique suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo vitae amet sagittis odio
          ullamcorper at. Sed nisi, arcu ut nam. Egestas eget convallis aliquam, turpis amet dolor elit. Donec nisl,
          quis dui varius. Vel elementum eget commodo erat est dignissim. Mauris in mi viverra ut lectus nulla mauris
          vestibulum.
        </p>
        <img className="ContentArticle-content-image" src={Item2} alt="" />
        <p className="ContentArticle-content-desc">
          Lorem ultrices libero tempus id habitant magna. Diam et lacus, morbi non ultricies. Condimentum a sed
          adipiscing sit et, orci. Enim pellentesque pretium aliquet nullam diam. Dictumst amet, aliquet id maecenas
          cras. Condimentum consectetur est cras eleifend dictum vitae. Elit, eu nam egestas tempus, risus sit commodo
          tristique suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo vitae amet sagittis odio
          ullamcorper at. Sed nisi, arcu ut nam. Egestas eget convallis aliquam, turpis amet dolor elit. Donec nisl,
          quis dui varius. Vel elementum eget commodo erat est dignissim. Mauris in mi viverra ut lectus nulla mauris
          vestibulum.
        </p>
      </div>
    </div>
  );
};

export default ContentArticle;
