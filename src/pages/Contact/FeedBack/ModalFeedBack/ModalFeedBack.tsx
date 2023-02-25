/* eslint-disable no-underscore-dangle */
import React from 'react';

import classNames from 'classnames';
import { TModalFeedBackProps } from './ModalFeedBack.types.d';
import IconClose from '@/assets/images/IconClose.svg';
import './ModalFeedBack.scss';

const ModalFeedBack: React.FC<TModalFeedBackProps> = ({ className, onClose, item }) => {
  return (
    <div className={classNames('ModalFeedBack', className)}>
      <div onClick={onClose}>
        <img src={IconClose} alt="" className="ModalFeedBack-close" />
      </div>
      <img src={item?.[0]?.avatar} alt="" className="ModalFeedBack-img" />
      <div className="ModalFeedBack-info">
        <p className="ModalFeedBack-title">{item?.[0]?.name}</p>
        <p className="ModalFeedBack-des">{item?.[0]?.content}</p>
      </div>
    </div>
  );
};

export default ModalFeedBack;
