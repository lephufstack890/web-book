/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Col, Row } from 'antd';
import { Link } from '@reach/router';

import classNames from 'classnames';
import { dataFooterMenu } from './Footer.data';
import Logo from '@/assets/images/logo.png';
import Iconpotenial from '@/assets/images/Iconpotenial.svg';
import IconContact from '@/assets/images/IconContact.svg';
import Qr from '@/assets/images/Qr.png';
import app from '@/assets/images/app.png';
import chPlay from '@/assets/images/chPlay.png';
import { TFooterProps } from './Footer.types.d';
import './Footer.scss';
import Input from '@/components/Input';

const Footer: React.FC<TFooterProps> = () => {
  return (
    <div className="Footer">
      <div className="Footer-top">
        <div className="Footer-container">
          <div className="Footer-top-wrapper">
            <Row gutter={[32, 32]}>
              <Col
                span={24}
                md={{ span: 12 }}
                lg={{ span: 8 }}
                sm={{ span: 24 }}
                className={classNames('Footer-menu', 'Footer-col')}
              >
                <div className="Footer-col">
                  <div className="Footer-socials flex">
                    <ul className="Footer-list">
                      <h3 className="Footer-list-title">
                        <img src={Iconpotenial} alt="" />
                        Tiềm năng master
                      </h3>
                      {dataFooterMenu.map((item) => (
                        <Link key={item.key} to={item.link} className="Footer-list-item">
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>
              <Col
                span={24}
                md={{ span: 12 }}
                lg={{ span: 8 }}
                sm={{ span: 24 }}
                className={classNames('Footer-logo', 'Footer-col')}
              >
                <div className="Footer-col">
                  <div className="Footer-contact vollkorn-font">
                    <img src={Logo} alt="" />
                    <h2 className="Footer-contact-title">Công ty cổ phần Tâm lý giáo dục Tâm Đức</h2>
                    <p>Trụ sở 03/63 Võ Văn Kiệt, Tp. Buôn Ma Thuột, Tỉnh ĐăkLăk</p>
                    <p>Hotline (Có thể kết nối qua Zalo):0903245691 - 090xxx</p>
                  </div>
                </div>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }} sm={{ span: 24 }} className={classNames('Footer-col')}>
                <div className="Footer-col">
                  <h2 className="Footer-download">
                    <img src={Iconpotenial} alt="" />
                    Tải ứng dụng ngay
                  </h2>
                  <div className="Footer-qr-wp">
                    <img src={Qr} alt="" />
                    <div className="Footer-app-wp">
                      <img className="Footer-app" src={app} alt="" />
                      <img className="Footer-chplay" src={chPlay} alt="" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="Footer-bottom">
        <div className="container">
          <div className="Footer-bottom-wrapper">
            <div className="Footer-copyright">
              <p>Copyright ©2019 Basictheme. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
