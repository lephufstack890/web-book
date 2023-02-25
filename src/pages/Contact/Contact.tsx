import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import classNames from 'classnames';
import IconSearch from '@/assets/images/IconSearch.svg';
import IconContact from '@/assets/images/contact.svg';
import IconZalo from '@/assets/images/zalo.svg';
import IconCall from '@/assets/images/call.svg';
import TuiTion from '@/pages/Contact/TuiTion';
import ContactForm from '@/containers/ContactForm';
import TabServicePopular from './TabServicePopular';

import { getThreeFeedBackListAction } from '@/redux/actions';
import './Contact.scss';
import Input from '@/components/Input';
import { Paths } from '@/pages/routers';
import Button from '@/components/Button';
import FeedBack from './FeedBack';
import TabServiceDiscorder from './TabServiceDiscorder';
import { TRootState } from '@/redux/reducers';

const Contact: React.FC = () => {
  const dispatch = useDispatch();

  const getThreeFeedbackList = useCallback(() => {
    dispatch(getThreeFeedBackListAction.request({}));
  }, [dispatch]);
  useEffect(() => {
    getThreeFeedbackList();
  }, [getThreeFeedbackList]);
  const getThreeFeedbackState = useSelector(
    (state: TRootState) => state.feedbackReducer.getThreeFeedBackListResponse?.data,
  );
  const handleShowModal = (): void => {};
  const [keyword, setKeyword] = useState('');
  const handleSearch = (): void => {
    navigate(Paths.BooksListSearch(keyword));
  };

  const renderComponentSearch = (): React.ReactNode => {
    return (
      <div className="container">
        <div className="Contact-middle-search">
          <img src={IconSearch} alt="" />
          <Input
            className="Input-search"
            placeholder="Nhập từ khóa để tìm kiếm"
            value={keyword}
            onChange={(e): void => setKeyword(e.target.value)}
            onEnter={handleSearch}
          />
          <Button title="Tìm kiếm" />
        </div>
      </div>
    );
  };
  const renderComponentTabs = (): React.ReactNode => {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Col lg={48}>
          <Nav variant="pills">
            <div className={classNames('container', 'menu-tab')}>
              <Nav.Item>
                <Nav.Link eventKey="first" className="Contact-tab-item">
                  <h6 className="Contact-service">Dịch vụ</h6>
                  <h3 className="Contact-psychologicalDissemination">Nhóm tâm lý phổ biến</h3>
                  <p className="underline">
                    <span>_____</span>
                    ...
                    <span>_____</span>
                  </p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="Contact-tab-item">
                  <h6 className="Contact-service">Dịch vụ</h6>
                  <h3 className="Contact-psychologicalDisorder">Nhóm rối loạn tâm lý</h3>
                  <p className="underline">
                    <span>_____</span>
                    ...
                    <span>_____</span>
                  </p>
                </Nav.Link>
              </Nav.Item>
            </div>
          </Nav>
        </Col>
        <Col lg={48}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <TabServicePopular />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <TabServiceDiscorder />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Tab.Container>
    );
  };

  return (
    <div className="Contact">
      <div className="Contact-container">
        <div className="Contact-wrapper">
          <Row gutter={[20, 0]}>
            <Col span={24} lg={{ span: 100 }} className="Contact-wrapper-center">
              <div className="container">
                <div className="Contact-content">
                  <div className="Contact-text">
                    <p className="Contact-yourcare">We are here for your care</p>
                    <h2 className="Contact-doctor">Best Care & Better Doctor.</h2>
                    <div className="Contact-start">
                      <div className="Contact-action">
                        <div className="Contact-contactTitle">Liên hệ</div>
                        <img src={IconContact} alt="" />
                      </div>
                      <a href="/zalo" className="Contact-zalo">
                        <img src={IconZalo} alt="" />
                      </a>
                      <a href="/call" className="Contact-call">
                        <img src={IconCall} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="Contact-form">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </Col>
            <Col span={24} lg={{ span: 100 }}>
              {renderComponentSearch()}
            </Col>
          </Row>
          {renderComponentTabs()}
          <div className="Contact-tuition-wp">
            <TuiTion />
          </div>
          <div className="Contact-feedback-wp">
            <FeedBack list={getThreeFeedbackState} onShowModal={handleShowModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
