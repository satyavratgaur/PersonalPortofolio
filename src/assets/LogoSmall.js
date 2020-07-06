import * as React from "react";

function LogoSmall(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 76 116" fill="none" {...props}>
      <g filter="url(#prefix__filter0_d)">
        <path
          d="M21.525 80.64c-7.306 0-13.12-1.707-17.44-5.12l2.8-7.04c4.32 3.2 9.254 4.8 14.8 4.8 2.4 0 4.24-.4 5.52-1.2 1.334-.8 2-1.92 2-3.36 0-1.227-.453-2.187-1.36-2.88-.906-.747-2.453-1.387-4.64-1.92l-6.72-1.52c-7.36-1.6-11.04-5.36-11.04-11.28 0-2.453.694-4.613 2.08-6.48 1.387-1.92 3.334-3.413 5.84-4.48 2.507-1.067 5.414-1.6 8.72-1.6 2.88 0 5.654.453 8.32 1.36 2.667.853 5.014 2.107 7.04 3.76l-2.96 6.8C30.432 47.493 26.272 46 22.005 46c-2.293 0-4.08.427-5.36 1.28-1.28.853-1.92 2.027-1.92 3.52 0 1.173.374 2.107 1.12 2.8.8.693 2.134 1.28 4 1.76l6.88 1.52c4 .907 6.907 2.32 8.72 4.24 1.867 1.867 2.8 4.32 2.8 7.36 0 3.733-1.493 6.693-4.48 8.88-2.986 2.187-7.066 3.28-12.24 3.28z"
          fill="fill"
        />
      </g>
      <g filter="url(#prefix__filter1_d)">
        <path
          d="M71.45 57.832v29.34c0 4.72-1.3 8.3-3.9 10.74-2.6 2.44-6.42 3.66-11.46 3.66-4.68 0-8.8-.98-12.36-2.94l1.2-5.7c3.68 1.92 7.34 2.88 10.98 2.88 5.4 0 8.1-2.68 8.1-8.04v-6c-.92 1.64-2.26 2.98-4.02 4.02-1.76 1-3.74 1.5-5.94 1.5-2.64 0-5-.62-7.08-1.86-2.04-1.28-3.64-3.06-4.8-5.34-1.12-2.32-1.68-4.96-1.68-7.92s.56-5.58 1.68-7.86c1.16-2.32 2.76-4.1 4.8-5.34 2.08-1.28 4.44-1.92 7.08-1.92 2.24 0 4.22.48 5.94 1.44 1.76.92 3.1 2.22 4.02 3.9v-4.56h7.44zm-15.42 23.58c2.48 0 4.42-.82 5.82-2.46 1.44-1.64 2.16-3.9 2.16-6.78 0-2.88-.7-5.14-2.1-6.78-1.4-1.64-3.36-2.46-5.88-2.46-2.48 0-4.44.82-5.88 2.46-1.4 1.64-2.1 3.9-2.1 6.78 0 2.88.7 5.14 2.1 6.78 1.44 1.64 3.4 2.46 5.88 2.46z"
          fill="fill"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d"
          x={0.085}
          y={38.56}
          width={42.16}
          height={50.08}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="prefix__filter1_d"
          x={36.49}
          y={57.052}
          width={38.96}
          height={52.52}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

const MemoLogoSmall = React.memo(LogoSmall);
export default MemoLogoSmall;
