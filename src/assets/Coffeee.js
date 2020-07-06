import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='23'
      height='22'
      fill='none'
      viewBox='0 0 23 22'
      {...props}
    >
      <g fill='#fff' filter='url(#filter0_i)'>
        <path d='M17 8h1a4 4 0 110 8h-1M1 8h16v9a4 4 0 01-4 4H5a4 4 0 01-4-4V8zM5 1v3zM9 1v3zM13 1v3z'></path>
      </g>
      <path
        stroke='fill'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M17 8h1a4 4 0 110 8h-1m0-8H1v9a4 4 0 004 4h8a4 4 0 004-4V8zM5 1v3m4-3v3m4-3v3'
      ></path>
      <defs>
        <filter
          id='filter0_i'
          width='23'
          height='26'
          x='0'
          y='0'
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
