import React from 'react';

import { TIconProps } from '@/components/Icon/Icon.types';
import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6.5C0.850908 2.79136 4.557 0 9 0C13.443 0 17.1491 2.79136 18 6.5C17.1491 10.2086 13.443 13 9 13C4.557 13 0.850908 10.2086 0 6.5ZM9 10.5625C11.4853 10.5625 13.5 8.74366 13.5 6.5C13.5 4.25634 11.4853 2.4375 9 2.4375C6.51472 2.4375 4.5 4.25634 4.5 6.5C4.5 8.74366 6.51472 10.5625 9 10.5625ZM9 8.9375C10.4912 8.9375 11.7 7.84619 11.7 6.5C11.7 5.15381 10.4912 4.0625 9 4.0625C7.50883 4.0625 6.3 5.15381 6.3 6.5C6.3 7.84619 7.50883 8.9375 9 8.9375Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
