/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TFeedBackProps } from './FeedBack.types.d';
import './FeedBack.scss';
import { getFeedBackIdAction } from '@/redux/actions';
import FeedBackCustomer from '@/assets/images/bg_feedbackCustomer.png';
import ArrowBottom from '@/assets/images/arrow-bottom.svg';
import Button from '@/components/Button';
import ModalFeedBack from './ModalFeedBack';
import { TRootState } from '@/redux/reducers';
import { TGetFeedbackIdParams } from '@/services/api';

const FeedBack: React.FC<TFeedBackProps> = ({ list = [] }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [ModalId, setModalId] = useState<TGetFeedbackIdParams>('');

  const handleModalFeedBack = (idModal: string): void => {
    setShowModal(true);
    setModalId(idModal);
  };

  const getFeedbackIdState = useSelector((state: TRootState) => state.feedbackReducer.getFeedBackIdResponse?.data);

  useEffect(() => {
    if (ModalId) {
      dispatch(getFeedBackIdAction.request({ params: ModalId }));
    }
  }, [dispatch, ModalId]);

  const handleHideModal = (): void => {
    setShowModal(false);
    setModalId('');
  };

  return (
    <div className="FeedBack">
      <div className="container">
        <div className="FeedBack-wp">
          <div className="FeedBack-customer">
            <div className="FeedBack-customer-text">
              <h2 className="FeedBack-customer-title">Phản Hồi Khách Hàng Cũ</h2>
            </div>
            <Button title="Xem tất cả phản hồi" className="FeedBack-customer-button" />
          </div>
          <div className="FeedBack-list">
            {list.map((item: any, index: any) => (
              <div
                className={'FeedBack-item'.concat(index)}
                key={item._id}
                onClick={(): void => handleModalFeedBack(item._id)}
              >
                <img className="FeedBack-list-avatar" src={item.avatar} alt="" />
                <div className="FeedBack-inf">
                  <h2 className="FeedBack-item-name">{item.name}</h2>
                  <p className="FeedBack-item-des">{item.content}</p>
                  <div onClick={(): void => handleModalFeedBack(item._id)}>
                    <img className={'FeedBack-inf-arrowBottom'.concat(index)} src={ArrowBottom} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ModalFeedBack
        className={showModal === true ? 'showModal' : ''}
        onClose={handleHideModal}
        item={getFeedbackIdState}
      />
    </div>
  );
};

export default FeedBack;
