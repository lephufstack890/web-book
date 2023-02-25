/* eslint-disable no-underscore-dangle */
import React from 'react';

import { TMenuItemProps } from './MenuItem.types';
import './MenuItem.scss';
import ClockIcon from '@/assets/images/ClockIcon.svg';
import IconRadio from '@/assets/images/IconRadio.svg';

const MenuItem: React.FC<TMenuItemProps> = ({ data = [] }) => {
  return (
    <>
      {data.records?.[0]
        .filter((checkParent) => checkParent.parent === null)
        .map((item) => (
          <div className="MenuItem-menu-item">
            <div className="MenuItem-menu-title">
              <img src={ClockIcon} alt="" />
              <h2 className="MenuItem-menu-text">{item.name}</h2>
            </div>
            <img src={IconRadio} alt="" />
          </div>
        ))}
    </>
  );
};

export default MenuItem;
