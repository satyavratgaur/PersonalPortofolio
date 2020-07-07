import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='34'
      height='34'
      fill='none'
      viewBox='0 0 34 34'
      {...props}
    >
      <g filter='url(#filter0_i)'>
        <path
          fill='fill'
          d='M17.002.337C7.798.337.337 7.798.337 17.002c0 8.316 6.093 15.21 14.061 16.465V21.82h-4.233v-4.818h4.233V13.33c0-4.18 2.489-6.485 6.294-6.485 1.823 0 3.733.325 3.733.325v4.098h-2.107c-2.066 0-2.713 1.287-2.713 2.605v3.125h4.618l-.738 4.819h-3.88v11.646c7.968-1.248 14.062-8.143 14.062-16.461 0-9.204-7.462-16.665-16.665-16.665z'
        ></path>
      </g>
      <defs>
        <filter
          id='filter0_i'
          width='33.33'
          height='37.13'
          x='0.337'
          y='0.337'
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
          <feBlend
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          ></feBlend>
          <feColorMatrix
            in='SourceAlpha'
            result='hardAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          ></feColorMatrix>
          <feOffset dy='4'></feOffset>
          <feGaussianBlur stdDeviation='2'></feGaussianBlur>
          <feComposite
            in2='hardAlpha'
            k2='-1'
            k3='1'
            operator='arithmetic'
          ></feComposite>
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'></feColorMatrix>
          <feBlend in2='shape' result='effect1_innerShadow'></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default React.memo(Icon);
