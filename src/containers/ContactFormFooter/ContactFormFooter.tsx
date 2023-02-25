/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect } from 'react';
import { Col, Form, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import moment, { Moment } from 'moment';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { showNotification, validationRules } from '@/utils/functions';
import Select from '@/components/Select';
import DatePicker from '@/components/DatePicker';
import { ETypeNotification } from '@/common/enums';
import { ERequestAdvisoryAction, getAdvisoryIssuesAction, requestAdvisoryAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { DEFAULT_PAGE } from '@/common/constants';

import { TContactFormFooterProps } from './ContactFormFooter.types.d';
import './ContactFormFooter.scss';

const ContactForm: React.FC<TContactFormFooterProps> = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse)?.data;
  const getAdvisoryIssuesState = useSelector(
    (state: TRootState) => state.advisoryReducer.getAdvisoryIssuesResponse?.data?.records,
  );
  const requestAdvisoryLoading = useSelector(
    (state: TRootState) => state.loadingReducer[ERequestAdvisoryAction.REQUEST_ADVISORY],
  );

  const advisoryIssuesOptions = getAdvisoryIssuesState?.map((item) => ({ label: item.name, value: item._id }));

  const handleSubmit = (values: any): void => {
    const body = {
      ...values,
      issueType: values.issueType?.value,
    };
    dispatch(requestAdvisoryAction.request({ body }, handleRequestAdvisorySuccess));
  };

  const handleRequestAdvisorySuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Gửi yêu cầu tư vấn thành công');
    form.resetFields();
  };

  const disabledDate = (date: Moment): boolean => {
    return date && date.valueOf() < moment().subtract(1, 'd').valueOf();
  };

  const getAdvisoryIssues = useCallback(() => {
    const params = {
      page: DEFAULT_PAGE,
      pageSize: 100,
    };

    dispatch(getAdvisoryIssuesAction.request({ params }));
  }, [dispatch]);

  useEffect(() => {
    getAdvisoryIssues();
  }, [getAdvisoryIssues]);

  useEffect(() => {
    form.setFieldsValue({
      name: profileState?.name,
    });
  }, [form, profileState]);

  return (
    <div className="ContactForm">
      <div className="container">
        <div className="ContactForm-wrapper">
          <div className="ContactForm-title">Đặt lịch tư vấn</div>
          <Form form={form} className="ContactForm-form" onFinish={handleSubmit}>
            <Row gutter={[16, 16]}>
              <Col span={24} sm={{ span: 24 }}>
                <Form.Item name="name" rules={[validationRules.required()]}>
                  <Input className="info" label="Tên của bạn" placeholder="Nhập tên" />
                </Form.Item>
              </Col>
              <Col span={24} sm={{ span: 24 }}>
                <Form.Item name="contact" rules={[validationRules.required(), validationRules.emailOrPhoneNumber()]}>
                  <Input className="info" label="Liên hệ" placeholder="Số điện thoại/Email" />
                </Form.Item>
              </Col>
              <Col span={24} sm={{ span: 24 }}>
                <Form.Item name="issueType" rules={[validationRules.required()]}>
                  <Select
                    className="info"
                    label="Vấn đề gặp phải"
                    placeholder="Chọn nguyên nhân"
                    options={advisoryIssuesOptions}
                  />
                </Form.Item>
              </Col>
              <Col span={24} sm={{ span: 24 }}>
                <Form.Item name="appointmentDate" rules={[validationRules.required()]}>
                  <DatePicker
                    className="info"
                    label="Đặt lịch tư vấn"
                    placeholder="Thời gian"
                    disabledDate={disabledDate}
                  />
                </Form.Item>
              </Col>
            </Row>

            <div className="ContactForm-form-submit flex justify-center">
              <Button title="Xác nhận" htmlType="submit" disabled={requestAdvisoryLoading} />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
