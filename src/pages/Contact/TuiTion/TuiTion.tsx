/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Col, Row } from 'antd';
import { TTuiTionProps } from './TuiTion.types.d';
import './TuiTion.scss';
import FeeSession from '@/assets/images/FeeSession.png';
import FeeMonth from '@/assets/images/FeeMonth.png';
import FeePackage from '@/assets/images/FeePackage.png';
import ArrowRight from '@/assets/images/arrow-right.svg';
import Eclip from '@/assets/images/Eclip.svg';

const TuiTion: React.FC<TTuiTionProps> = () => {
  return (
    <div className="container">
      <div className="TuiTion">
        <div className="TuiTion-header">
          <p className="TuiTion-qualityFee">Mức phí & chất lượng</p>
          <h2 className="TuiTion-overalFee">Mức Phí Tổng Quan</h2>
          <p className="TuiTion-underline">
            <span>_____</span>
            ...
            <span>_____</span>
          </p>
        </div>
        <Row className="TuiTion-body">
          <Col sm={12} md={12} lg={8} className="TuiTion-body-item">
            <img src={FeeSession} alt="" />
          </Col>
          <Col sm={12} md={12} lg={8} className="TuiTion-body-item">
            <img src={FeeMonth} alt="" />
          </Col>
          <Col sm={12} md={12} lg={8} className="TuiTion-body-item">
            <img src={FeePackage} alt="" />
          </Col>
        </Row>
        <div className="TuiTion-footer">
          <p>
            <img src={ArrowRight} alt="" />
            Khách hàng sau khi nhận được kết quả mong đợi (Căn cứ theo <b>Hợp đồng tham vấn</b>) mới phải chi trả phí
          </p>
          <p>
            <img src={ArrowRight} alt="" />
            Có thể lựa chọn thanh toán theo từng giai đoạn liệu trình (Có xuất <b>hóa đơn thanh toán</b>).
          </p>
          <p>
            <img src={ArrowRight} alt="" />
            Khách hàng được <b>trải nghiệm miễn phí</b> phiên tham vấn đầu tiên.
          </p>
          <p>
            <img src={ArrowRight} alt="" />
            Có thể tùy chọn hình thức tham vấn:
            <p className="TuiTion-footer-online">
              <img src={Eclip} alt="" />
              <b>Online</b> (Toàn quốc)
            </p>
            <p className="TuiTion-footer-off">
              <img src={Eclip} alt="" />
              <b>Trực tiếp</b> (Tp. Hồ Chí Minh và các tỉnh thành lân cận)
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TuiTion;
