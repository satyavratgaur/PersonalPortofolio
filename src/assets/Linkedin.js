import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      fill='none'
      viewBox='0 0 40 40'
      {...props}
    >
      <g filter='url(#filter0_i)'>
        <path
          fill='fill'
          d='M7.843.01C3.534.01.008 3.536.008 7.845V32.16c0 4.308 3.526 7.834 7.835 7.834h24.313c4.309 0 7.834-3.526 7.834-7.834V7.845c0-4.309-3.525-7.835-7.834-7.835H7.843zm1.97 6.598c2.066 0 3.339 1.356 3.378 3.139 0 1.743-1.312 3.138-3.418 3.138h-.038c-2.027 0-3.337-1.395-3.337-3.138 0-1.783 1.35-3.14 3.415-3.14zm17.803 8.332c3.974 0 6.952 2.597 6.952 8.178v10.418H28.53v-9.72c0-2.442-.874-4.108-3.06-4.108-1.667 0-2.662 1.123-3.098 2.208-.16.388-.199.93-.199 1.473v10.147h-6.038s.08-16.465 0-18.17h6.04v2.573c.802-1.238 2.237-2.999 5.441-2.999zm-20.862.428h6.038v18.168H6.754V15.368z'
        ></path>
      </g>
      <defs>
        <filter
          id='filter0_i'
          width='39.983'
          height='43.983'
          x='0.008'
          y='0.01'
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
