/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import classNames from 'classnames';
import { Col, Row } from 'antd';
import Iconhand from '@/assets/images/Iconhand.svg';
import star from '@/assets/images/star.svg';
import IconSeemore from '@/assets/images/IconSeemore.svg';
import IconBack from '@/assets/images/IconBack.svg';

import { TTabItemDetailProps } from './TabItemDetail.types';
import './TabItemDetail.scss';

const TabItemDetail: React.FC<TTabItemDetailProps> = ({ data = [], id, dataSeeMore }) => {
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const handleToggleSeeMore = (TabId: number): void => {
    setSeeMore(!seeMore);
  };

  return (
    <div className="TabItemDetailDiscord-container">
      <div className="TabItemDetailDiscord">
        {data.map((item) => (
          <div key={item.id}>
            {seeMore === false ? (
              <div className="TabItemDetailDiscord-item">
                {id === 1 ? (
                  <div className="TabItemDetailDiscord-item-des">
                    {item.cat_id === 1 ? (
                      <div>
                        <p>
                          <img src={star} alt="" />
                          Thân chủ dễ <span>sợ hãi và hay lo lắng</span> thái quá, đôi khi tới mức vô lý; Triệu chứng
                          lặp lại thường xuyên trong vòng 6 tháng.
                        </p>
                        <p>
                          <img src={star} alt="" />
                          Mất kiểm soát hệ cơ vận động (Tây chân run rẩy, cơ bắp căng cứng và không thể thả lỏng; Mệt
                          mỏi và cạn năng lượng nhanh chóng).
                        </p>
                        <p>
                          <img src={star} alt="" />
                          Hệ thần kinh thực vật trở nên mẫn cảm (Nhịp tim nhanh, hơi thở gấp, miệng khô, khó khăn khi
                          nuốt, cảm giác đau bụng hoặc buồn nôn).
                        </p>
                        <p>
                          <img src={star} alt="" />
                          Luôn trong trạng thái <span>cảnh giác quá mức</span> (Thấy bất an, dễ giật mình, khó tập
                          trung, hay mất ngủ).
                        </p>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                ) : (
                  ''
                )}
                {id === 2 ? (
                  <div className="TabItemDetailDiscord-item-des">
                    {item.cat_id === 2 ? (
                      <div>
                        <p>
                          <img src={star} alt="" />
                          <span>Ám ảnh</span>: Những hình ảnh và suy nghĩ tiêu cực luôn đeo bám, gây cảm giác bất an và
                          làm mất tập trung.
                        </p>
                        <p>
                          <img src={star} alt="" />
                          <span>Cưỡng chế</span>: Thân chủ có xu hướng mất kiểm soát hành vi, lặp đi lặp lại một hành
                          động nào đó (để xua tan cảm giác bất an).
                        </p>
                        <p>
                          <img src={star} alt="" />
                          Dù biết những suy tưởng trong đầu là vô lý nhưng vẫn không thể cưỡng lại.
                        </p>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                ) : (
                  ''
                )}
                {id === 3 ? (
                  <div className="TabItemDetailDiscord-item-des">
                    {item.cat_id === 3 ? (
                      <div>
                        <p>
                          <img src={star} alt="" />
                          Tâm trạng <span>thay đổi thất thường</span> và có biểu hiện cực đoan .
                        </p>
                        <p>
                          <img src={star} alt="" />
                          Dễ bị sao nhãng, mất tập trung; <span>Rối loạn giấc ngủ</span> và giảm sút nhu cầu ăn uống.
                        </p>
                        <p>
                          <img src={star} alt="" />
                          Tình trạng kéo dài trên 6 tháng và ngày càng nghiêm trọng.
                        </p>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                ) : (
                  ''
                )}
                {id === 4 ? (
                  <div className="TabItemDetailDiscord-item-des">
                    {item.cat_id === 4 ? (
                      <div>
                        <p>
                          <img src={star} alt="" />
                          <span>Ham muốn khoái cảm cao</span>, liên tục tìm đến một đối tượng hay hoạt động nào đó để
                          thỏa mãn nhu cầu.
                        </p>
                        <p>
                          <img src={star} alt="" />
                          Bất lực trong việc tự kiểm soát bản thân, <span>không thể cưỡng lại</span> dục vọng ham muốn.
                        </p>
                        <p>
                          <img src={star} alt="" />
                          Hành vi thỏa mãn cơn nghiện lặp lại càng nhiều, mức độ nghiện càng nghiêm trọng, nhu cầu khoái
                          cảm càng khó được thỏa mãn.
                        </p>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              <Row className={classNames('TabItemDetailDiscordSeeMore', item.className)}>
                {dataSeeMore.map((seemore) => (
                  <Col
                    key={seemore.id}
                    md={seemore.col}
                    lg={seemore.col}
                    className={classNames('TabItemDetailDiscordSeeMore-item', seemore.className)}
                  >
                    <div className="TabItemDetailDiscordSeeMore-item-title" style={{ background: seemore.color }}>
                      <h2>{seemore.title}</h2>
                      <p>{seemore.note}</p>
                    </div>
                    {id === 1 ? (
                      <div className="TabItemDetailDiscordSeeMore-item-des">
                        {seemore.cat_id === 1 ? (
                          <div>
                            <p>
                              Lo âu thường trực (mọi lúc mọi nơi), kể cả với những chuyện nhỏ nhặt không đáng lo. Thân
                              chủ luôn trong trạng thái bồn chồn bất an.
                            </p>
                          </div>
                        ) : (
                          ''
                        )}
                        {seemore.cat_id === 2 ? (
                          <div>
                            <p>
                              Nỗi sợ ập đến một cách bất ngờ không rõ lý do; Cơ thể phản ứng lại một cách mãnh liệt (Tim
                              đập loạn, vã mồ hôi, chóng mặt, run cầm cập,...). Thân chủ rơi vào trạng thái hoảng loạn
                              mất kiểm soát.
                            </p>
                          </div>
                        ) : (
                          ''
                        )}
                        {seemore.cat_id === 3 ? (
                          <div>
                            <p>
                              Cảm giác hồi hộp, lo lắng. Thân chủ tỏ ra luống cuống trong những hoàn cảnh phải tương tác
                              xã hội, đặc biệt là khi giao tiếp với người lạ hoặc khi cần phải phát biểu trước đám đông.
                            </p>
                          </div>
                        ) : (
                          ''
                        )}
                        {seemore.cat_id === 4 ? (
                          <div>
                            <p>
                              Thường xuyên hồi tưởng về những ký ức đau thương trong quá khứ; Hoặc về biến cố gây tổn
                              thương tâm lý sâu sắc, ví dụ như bạo dâm, truy sát, giết người,... Mọi thứ gợi nhắc đến
                              biến cố ấy đều đem lại cảm giác lo âu, hoảng loạn và dễ kích động.
                            </p>
                          </div>
                        ) : (
                          ''
                        )}
                        {seemore.cat_id === 5 ? (
                          <div>
                            <li style={{ marginBottom: '0.2rem' }}>Sợ độ cao</li>
                            <li style={{ marginBottom: '0.2rem' }}>Sợ tốc độ</li>
                            <li style={{ marginBottom: '0.2rem' }}>Sợ không gian kín</li>
                            <li style={{ marginBottom: '0.2rem' }}>Sợ người khác giới</li>
                            <li style={{ marginBottom: '0.2rem' }}>Sợ động vật</li>
                            <li style={{ marginBottom: '0.2rem' }}>....v..v....</li>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    ) : (
                      ''
                    )}
                    {id === 2 ? (
                      <div className="TabItemDetailDiscordSeeMore-item-des">
                        {seemore.cat_id === 1 ? (
                          <div>
                            <p>
                              Sợ bẩn và có xu hướng sạch sẽ quá mức, dẫn đến những hành vi mất kiểm soát như liên tục
                              rửa tay, vệ sinh đồ đạc, kích động, hoảng loạn,...
                            </p>
                          </div>
                        ) : (
                          ''
                        )}
                        {seemore.cat_id === 2 ? (
                          <div>
                            <p>
                              Bận tâm và lo lắng quá mức về khuyết điểm ngoại hình của bản thân, ví dụ như về đặc điểm
                              khuôn mặt, hàm răng, mái tóc,... Liên tục soi gương, chải chuốt, đưa tay chạm mũi,...
                            </p>
                          </div>
                        ) : (
                          ''
                        )}
                        {seemore.cat_id === 3 ? (
                          <div>
                            <p>
                              Muốn mọi thứ phải được sắp xếp gọn gàng ngăn nắp và đúng y như trật tự mình mong muốn. Sự
                              lộn xộn và vô tổ chức sẽ gây cảm giác khó chịu, bất an.
                            </p>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    ) : (
                      ''
                    )}
                    {id === 3 ? (
                      <div className="TabItemDetailDiscordSeeMore-item-des">
                        {seemore.cat_id === 1 ? (
                          <div>
                            <p>
                              Có xu hướng tăng động, hưng phấn và phấn khích quá mức về mặt cảm xúc, suy nghĩ và hành
                              vi; Ví dụ như ảo tưởng về năng lực của bản thân, nói chuyện lấn lướt, cởi mở quá mức,...
                            </p>
                          </div>
                        ) : (
                          ''
                        )}
                        {seemore.cat_id === 2 ? (
                          <div>
                            <p>
                              Luôn mang tâm trạng u sầu, cảm giác trống rỗng, chán nản và tự ti về bản thân. Thoái lùi
                              xã hội, mất hứng thú với gần như mọi hoạt động.
                            </p>
                          </div>
                        ) : (
                          ''
                        )}
                        {seemore.cat_id === 3 ? (
                          <div>
                            <p>
                              Tâm trạng thay đổi thất thường khó nắm bắt, lúc thăng lúc trầm. Tình trạng kéo dài hơn 6
                              tháng và ảnh hưởng nghiêm trọng đến cuộc sống của thân chủ.
                            </p>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    ) : (
                      ''
                    )}
                    {id === 4 ? (
                      <div className="TabItemDetailDiscordSeeMore-item-des">
                        {seemore.cat_id === 1 ? (
                          <div>
                            <p>
                              Phụ thuộc quá mức vào những chất kích thích hoặc thuốc gây nghiện như thuốc lá, bia rượu,
                              ma túy,...
                            </p>
                          </div>
                        ) : (
                          ''
                        )}
                        {seemore.cat_id === 2 ? (
                          <div>
                            <p>
                              Ăn uống vô độ và mất kiểm soát, tiêu thụ quá mức một loại thực phẩm nào đó, ví dụ như đồ
                              ăn nhanh, cà phê, nước ngọt, pizza,...
                            </p>
                          </div>
                        ) : (
                          ''
                        )}
                        {seemore.cat_id === 3 ? (
                          <div>
                            <p>
                              Tâm trí luôn đầy ắp những suy tưởng đồi trụy, dễ dàng rơi vào trạng thái kích dục; Không
                              ngừng tìm đến các hoạt động tình dục như thủ dâm, cuồng dâm, bạo dâm,...
                            </p>
                          </div>
                        ) : (
                          ''
                        )}
                        {seemore.cat_id === 4 ? (
                          <div>
                            <li style={{ marginBottom: '0.2rem' }}>Nghiện game</li>
                            <li style={{ marginBottom: '0.2rem' }}>Nghiện thuốc lá</li>
                            <li style={{ marginBottom: '0.2rem' }}>Nghiện đồ ngọt</li>
                            <li style={{ marginBottom: '0.2rem' }}>Nghiện cà phê</li>
                            <li style={{ marginBottom: '0.2rem' }}>Nghiện bia rượu</li>
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
            )}
            <div className="TabItemDetailDiscord-seemore">
              <p className="TabItemDetailDiscord-seemore-title">
                <img src={Iconhand} alt="" />
                {seeMore ? item.noteSeeMore : item.note}
              </p>
              <div className="TabItemDetailDiscord-seemore-text" onClick={(): void => handleToggleSeeMore(id)}>
                {seeMore ? 'Trở lại' : 'Xem thêm'}
                {seeMore ? <img src={IconBack} alt="" /> : <img src={IconSeemore} alt="" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabItemDetail;
