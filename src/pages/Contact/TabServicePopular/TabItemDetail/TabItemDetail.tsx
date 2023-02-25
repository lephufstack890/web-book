/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Col, Row } from 'antd';

import { TTabItemDetailProps } from './TabItemDetail.types';
import './TabItemDetail.scss';

const TabItemDetail: React.FC<TTabItemDetailProps> = ({ data = [], id }) => {
  return (
    <div className="TabItemDetailPopular-container">
      <Row className="TabItemDetailPopular">
        {data.map((item) => (
          <Col key={item.id} md={item.col} lg={item.col} className="TabItemDetailPopular-item">
            <h2 className="TabItemDetailPopular-item-title" style={{ background: item.color }}>
              {item.title}
              <p>{item.note}</p>
            </h2>
            {id === 1 ? (
              <div className="TabItemDetailPopular-item-des">
                {item.cat_id === 1 ? (
                  <div>
                    <li>Có dấu hiệu ngoại tình</li>
                    <li>Gặli vấn đề về sinh lý, xuất tinh sớm</li>
                    <li>
                      Dễ nổi nóng, bạo lực gia đình{' '}
                      <span style={{ color: '#2200F0', cursor: 'pointer' }}>
                        <span style={{ color: '#2200F0', cursor: 'pointer' }}>(Xem thêm)</span>
                      </span>
                    </li>
                    <li>Có thói quen than vãn, cằn nhằn</li>
                    <li>....v..v....</li>
                  </div>
                ) : (
                  ''
                )}
                {item.cat_id === 2 ? (
                  <div>
                    <li>Tính con lầm lỳ, khó bảo</li>
                    <li>Con mặc cảm tự ti về bản thân </li>
                    <li>Con có dấu hiệu nói lắp</li>
                    <li>Con có dấu hiệu tự kỷ</li>
                    <li>....v..v....</li>
                  </div>
                ) : (
                  ''
                )}
                {item.cat_id === 3 ? (
                  <div>
                    <li>
                      Tình trạng stress kéo dài <span style={{ color: '#2200F0', cursor: 'pointer' }}>(Xem thêm)</span>
                    </li>
                    <li>Rối loạn giấc ngủ và ăn uống</li>
                    <li>Dễ cáu ghét những chuyện nhỏ nhặt</li>
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            )}
            {id === 2 ? (
              <div className="TabItemDetailPopular-item-des">
                {item.cat_id === 1 ? (
                  <div>
                    <li>
                      Áp lực thi cử và học hành <span style={{ color: '#2200F0', cursor: 'pointer' }}>(Xem thêm)</span>
                    </li>
                    <li>Chán nản muốn bỏ cuộc</li>
                    <li>Khó tập trung</li>
                    <li>Tăng động giảm chú ý</li>
                    <li>....v..v....</li>
                  </div>
                ) : (
                  ''
                )}
                {item.cat_id === 2 ? (
                  <div>
                    <li>
                      Mặc cảm tự ti về bản thân <span style={{ color: '#2200F0', cursor: 'pointer' }}>(Xem thêm)</span>
                    </li>
                    <li>Ngại tương tác với mọi người</li>
                    <li>
                      Ham mê những thú vui không lành mạnh <br />{' '}
                      <span style={{ paddingLeft: '1.8rem' }}>(Game bạo lực, phim đồi trụy,...)</span>
                    </li>
                    <li>....v..v....</li>
                  </div>
                ) : (
                  ''
                )}
                {item.cat_id === 3 ? (
                  <div>
                    <li>Bất hòa với người thân</li>
                    <li>Phiền lòng chuyện tình yêu</li>
                    <li>Mâu thuẫn với bạn học</li>
                    <li>....v..v....</li>
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            )}
            {id === 3 ? (
              <div className="TabItemDetailPopular-item-des">
                {item.cat_id === 1 ? (
                  <div>
                    <li>
                      Áp lực công việc kéo dài <span style={{ color: '#2200F0', cursor: 'pointer' }}>(Xem thêm)</span>
                    </li>
                    <li>Kiệt sức và trơ lì cảm xúc</li>
                    <li>Chán nản muốn bỏ cuộc</li>
                    <li>Mất tập trung và rối loạn giấc ngủ</li>
                    <li>....v..v....</li>
                  </div>
                ) : (
                  ''
                )}
                {item.cat_id === 2 ? (
                  <div>
                    <li>Áp lực do gánh vác quá nhiều trách nhiệm</li>
                    <li>Day dứt hối tiếc vì sai lầm thời niên thiếu</li>
                    <li>Xuống sắc, sợ hãi tuổi già và cái chết</li>
                    <li>Nhu cầu tình dục giảm sút</li>
                    <li>....v..v....</li>
                  </div>
                ) : (
                  ''
                )}
                {item.cat_id === 3 ? (
                  <div>
                    <li>Bất hòa với người thân</li>
                    <li>Mâu thuẫn với đồng nghiệp</li>
                    <li>Phiền lòng chuyện tình yêu (Thất tình, đơn phương, cô đơn, xung đột,...)</li>
                    <li>....v..v....</li>
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            )}
            {id === 4 ? (
              <div className="TabItemDetailPopular-item-des">
                {item.cat_id === 1 ? (
                  <p>
                    Dễ dàng bực tức những việc nhỏ nhặt, nóng giận vô vớ không phù hợp với ngữ cảnh. Thường xuyên xuất
                    hiện hành vi thách thức và ngôn từ thiếu tôn trọng người khác.
                  </p>
                ) : (
                  ''
                )}
                {item.cat_id === 2 ? (
                  <p>
                    Luôn mang suy nghĩ tiêu cực về bản thân, cảm giác mình vô dụng, yếu kém và là gánh nặng cho người
                    khác. Tự đổ lỗi cho bản thân, dễ dàng tiếp nhận lời phê bình, thiếu tự tin.
                  </p>
                ) : (
                  ''
                )}
                {item.cat_id === 3 ? (
                  <p>
                    Áp lực cuộc sống kéo dài khiến cơ thể mệt mỏi. Rối loạn giấc ngủ và ăn uống nên tinh thần sa sút,
                    trở nên bi quan và dễ cáu gắt. Đầu óc thiếu sáng suốt, trí nhớ và khả năng tập trung suy giảm.
                  </p>
                ) : (
                  ''
                )}
                {item.cat_id === 4 ? (
                  <div>
                    <li style={{ marginBottom: '0.2rem' }}>Lo âu và sợ hãi</li>
                    <li style={{ marginBottom: '0.2rem' }}>Sân si phẫn uất</li>
                    <li style={{ marginBottom: '0.2rem' }}>Ganh ghét tật đố</li>
                    <li style={{ marginBottom: '0.2rem' }}>Tham dục vô độ</li>
                    <li style={{ marginBottom: '0.2rem' }}>Mặc cảm tự ti</li>
                    <li style={{ marginBottom: '0.2rem' }}>....v..v....</li>
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TabItemDetail;
