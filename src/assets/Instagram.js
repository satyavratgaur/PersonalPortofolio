import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='none'
      viewBox='0 0 32 32'
      {...props}
    >
      <g fill='fill' filter='url(#filter0_i)'>
        <path d='M30.912 9.842a10.881 10.881 0 00-.699-3.694 7.682 7.682 0 00-4.388-4.388 11.01 11.01 0 00-3.643-.7C20.578.988 20.07.968 16 .968s-4.591 0-6.183.092a11.01 11.01 0 00-3.642.7 7.678 7.678 0 00-4.388 4.388 10.923 10.923 0 00-.699 3.642c-.071 1.605-.093 2.113-.093 6.183s0 4.59.093 6.184c.025 1.246.26 2.476.699 3.645a7.683 7.683 0 004.39 4.386c1.162.456 2.394.71 3.641.75 1.606.072 2.114.094 6.184.094s4.591 0 6.183-.094a10.984 10.984 0 003.643-.698 7.69 7.69 0 004.389-4.388c.438-1.167.673-2.397.698-3.645.072-1.604.093-2.112.093-6.184-.003-4.07-.003-4.586-.096-6.181zM15.99 23.67a7.703 7.703 0 01-7.705-7.705 7.703 7.703 0 0113.153-5.448A7.705 7.705 0 0115.99 23.67zm8.012-13.898a1.794 1.794 0 01-1.27-3.067 1.796 1.796 0 111.27 3.067z'></path>
        <path d='M15.99 20.97a5.005 5.005 0 100-10.01 5.005 5.005 0 000 10.01z'></path>
      </g>
      <defs>
        <filter
          id='filter0_i'
          width='30.013'
          height='34.063'
          x='0.995'
          y='0.968'
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
