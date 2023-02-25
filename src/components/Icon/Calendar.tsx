import React from 'react';

import { TIconProps } from '@/components/Icon/Icon.types';
import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2165_16251)">
        <path
          d="M15.5833 1.59362H13.2812V0.531116C13.2813 0.39022 13.2255 0.255057 13.1259 0.155362C13.0263 0.0556667 12.8912 -0.000394224 12.7504 -0.000488155C12.6095 -0.000582086 12.4743 0.0552987 12.3746 0.154861C12.2749 0.254423 12.2188 0.389511 12.2188 0.530408V1.59362H9.03125V0.531116C9.0313 0.461351 9.0176 0.392261 8.99095 0.327789C8.96429 0.263316 8.9252 0.204726 8.8759 0.155362C8.8266 0.105998 8.76806 0.0668272 8.70363 0.0400864C8.63919 0.0133456 8.57012 -0.000441653 8.50035 -0.000488163C8.35946 -0.000582094 8.22429 0.0552986 8.1246 0.154861C8.0249 0.254423 7.96884 0.389511 7.96875 0.530408V1.59362H4.78125V0.531116C4.7813 0.461351 4.7676 0.392261 4.74095 0.327789C4.71429 0.263316 4.6752 0.204726 4.6259 0.155362C4.5766 0.105998 4.51806 0.0668272 4.45363 0.0400864C4.38919 0.0133456 4.32012 -0.000441653 4.25035 -0.000488163C4.10946 -0.000582094 3.9743 0.0552986 3.8746 0.154861C3.7749 0.254423 3.71884 0.389511 3.71875 0.530408V1.59362H1.41667C1.04107 1.59362 0.680839 1.74277 0.415182 2.0083C0.149526 2.27382 0.0001878 2.63397 0 3.00957V15.5825C0 15.9582 0.149256 16.3186 0.414932 16.5842C0.680609 16.8499 1.04094 16.9992 1.41667 16.9992H15.5833C15.9591 16.9992 16.3194 16.8499 16.5851 16.5842C16.8507 16.3186 17 15.9582 17 15.5825V3.00957C16.9998 2.63397 16.8505 2.27382 16.5848 2.0083C16.3192 1.74277 15.9589 1.59362 15.5833 1.59362ZM15.9375 15.5832C15.9375 15.677 15.9003 15.767 15.834 15.8334C15.7678 15.8998 15.6778 15.9372 15.584 15.9374H1.41667C1.32274 15.9374 1.23265 15.9001 1.16623 15.8336C1.09981 15.7672 1.0625 15.6771 1.0625 15.5832V3.01028C1.06269 2.91647 1.10008 2.82657 1.16648 2.76031C1.23288 2.69404 1.32286 2.65682 1.41667 2.65682H3.71875V3.71932C3.71866 3.86022 3.77454 3.99538 3.8741 4.09508C3.97366 4.19477 4.10875 4.25083 4.24965 4.25093C4.39054 4.25102 4.5257 4.19514 4.6254 4.09558C4.72509 3.99602 4.78116 3.86093 4.78125 3.72003V2.65682H7.96875V3.71932C7.96866 3.86022 8.02454 3.99538 8.1241 4.09508C8.22366 4.19477 8.35875 4.25083 8.49965 4.25093C8.64054 4.25102 8.77571 4.19514 8.8754 4.09558C8.97509 3.99602 9.03116 3.86093 9.03125 3.72003V2.65682H12.2188V3.71932C12.2187 3.86022 12.2745 3.99538 12.3741 4.09508C12.4737 4.19477 12.6087 4.25083 12.7496 4.25093C12.8905 4.25102 13.0257 4.19514 13.1254 4.09558C13.2251 3.99602 13.2812 3.86093 13.2812 3.72003V2.65682H15.5833C15.677 2.65701 15.7668 2.69431 15.8331 2.76056C15.8993 2.8268 15.9366 2.9166 15.9368 3.01028L15.9375 15.5832Z"
          fill={color}
        />
        <path
          d="M3.71875 6.375H5.84375V7.96875H3.71875V6.375ZM3.71875 9.03125H5.84375V10.625H3.71875V9.03125ZM3.71875 11.6875H5.84375V13.2812H3.71875V11.6875ZM7.4375 11.6875H9.5625V13.2812H7.4375V11.6875ZM7.4375 9.03125H9.5625V10.625H7.4375V9.03125ZM7.4375 6.375H9.5625V7.96875H7.4375V6.375ZM11.1562 11.6875H13.2812V13.2812H11.1562V11.6875ZM11.1562 9.03125H13.2812V10.625H11.1562V9.03125ZM11.1562 6.375H13.2812V7.96875H11.1562V6.375Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_2165_16251">
          <rect width="17" height="17" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Svg;