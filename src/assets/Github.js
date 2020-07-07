import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='36'
      height='36'
      fill='none'
      viewBox='0 0 36 36'
      {...props}
    >
      <g filter='url(#filter0_i)'>
        <path
          fill='fill'
          d='M17.984.98C8.324.977.5 8.797.5 18.45c0 7.632 4.895 14.12 11.71 16.503.919.23.778-.422.778-.867v-3.027c-5.3.62-5.515-2.887-5.87-3.473-.72-1.227-2.419-1.54-1.911-2.125 1.207-.621 2.438.156 3.863 2.262 1.032 1.527 3.043 1.27 4.063 1.015.223-.918.699-1.738 1.355-2.375-5.492-.984-7.781-4.336-7.781-8.32 0-1.934.637-3.711 1.887-5.145-.797-2.363.074-4.386.191-4.687 2.27-.203 4.63 1.625 4.813 1.77 1.289-.348 2.761-.532 4.41-.532 1.656 0 3.133.192 4.433.543.442-.336 2.63-1.906 4.739-1.715.113.301.965 2.278.215 4.61 1.265 1.437 1.91 3.23 1.91 5.168 0 3.992-2.305 7.347-7.813 8.316a4.981 4.981 0 011.488 3.555v4.394c.032.352 0 .7.586.7 6.918-2.333 11.899-8.868 11.899-16.567C35.465 8.797 27.637.98 17.985.98z'
        ></path>
      </g>
      <defs>
        <filter
          id='filter0_i'
          width='34.965'
          height='38.039'
          x='0.5'
          y='0.98'
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
