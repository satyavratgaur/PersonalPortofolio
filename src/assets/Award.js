import React from 'react';

function Icon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='26'
      fill='none'
      viewBox='0 0 14 26'
      {...props}
    >
      <g filter='url(#filter0_i)'>
        <path
          fill='fill'
          d='M13.25 11.037V.5H.75v10.537c0 .438.225.85.613 1.075l5.225 3.138-1.238 2.925-4.262.363 3.237 2.8-.988 4.162L7 23.288l3.662 2.212-.975-4.163 3.238-2.8-4.263-.362-1.237-2.925 5.225-3.137c.375-.226.6-.625.6-1.075zm-5 2.25l-1.25.75-1.25-.75V1.75h2.5v11.537z'
        ></path>
      </g>
      <defs>
        <filter
          id='filter0_i'
          width='12.5'
          height='29'
          x='0.75'
          y='0.5'
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
