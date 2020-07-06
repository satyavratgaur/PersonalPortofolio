import React from 'react';

function Icon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='26'
      height='25'
      fill='none'
      viewBox='0 0 25 25'
      {...props}
    >
      <g filter='url(#filter0_i)'>
        <path
          fill="fill"
          d='M24.25.75H15.5a3.725 3.725 0 00-2.5.975A3.725 3.725 0 0010.5.75H1.75A1.25 1.25 0 00.5 2v18.75A1.25 1.25 0 001.75 22h7.197a2.513 2.513 0 011.768.733l1.401 1.4c.011.012.027.016.038.027.107.1.227.188.367.245h.003c.305.126.647.126.952 0h.003c.14-.058.26-.146.367-.245.011-.011.027-.015.038-.026l1.401-1.401A2.513 2.513 0 0117.052 22h7.198a1.25 1.25 0 001.25-1.25V2A1.25 1.25 0 0024.25.75zM23 19.5h-5.948a5.038 5.038 0 00-2.802.861V4.5c0-.689.56-1.25 1.25-1.25H23V19.5z'
        ></path>
      </g>
      <defs>
        <filter
          id='filter0_i'
          width='25'
          height='27.75'
          x='0.5'
          y='0.75'
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
