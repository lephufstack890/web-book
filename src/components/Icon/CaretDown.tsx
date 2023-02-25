import React from 'react';

import { TIconProps } from '@/components/Icon/Icon.types';
import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.32733 4.71653C5.13944 4.87924 4.86056 4.87924 4.67267 4.71653L0.817636 1.37796C0.467684 1.0749 0.682019 0.499999 1.14496 0.499999L8.85504 0.5C9.31798 0.5 9.53232 1.0749 9.18237 1.37796L5.32733 4.71653Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
