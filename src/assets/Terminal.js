import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='16'
      fill='none'
      viewBox='0 0 18 16'
      {...props}
    >
      <g filter='url(#filter0_i)'>
        <path
          fill='fill'
          d='M6.013 7.58L.651 2.01A1.162 1.162 0 01.638.406 1.048 1.048 0 012.182.42L8.31 6.784c.203.211.317.498.317.796 0 .298-.114.584-.317.795L2.183 14.74a1.062 1.062 0 01-.762.316 1.064 1.064 0 01-.757-.33c-.2-.208-.315-.49-.317-.785-.003-.295.106-.58.304-.791l5.362-5.57zm1.827 5.545h8.666c.288 0 .563.118.767.33.203.21.317.497.317.795 0 .298-.114.585-.317.796-.204.21-.48.329-.767.329H7.84c-.288 0-.563-.119-.766-.33a1.147 1.147 0 01-.318-.795c0-.298.115-.585.318-.796.203-.21.478-.329.766-.329z'
        ></path>
      </g>
      <path
        stroke='fill'
        d='M1.011 1.664h0l-.006-.006A.662.662 0 01.998.753a.581.581 0 01.19-.132.548.548 0 01.629.14h0l.005.006 6.129 6.364s0 0 0 0a.647.647 0 01.177.449.647.647 0 01-.177.448s0 0 0 0l-6.125 6.36a.562.562 0 01-.4.167.563.563 0 01-.402-.176.647.647 0 01-.177-.443.649.649 0 01.167-.444l5.36-5.565-.36-.347.36-.347L1.01 1.664zM7.84 13.625h8.666c.149 0 .295.061.406.176a.648.648 0 01.178.449.647.647 0 01-.178.449.563.563 0 01-.405.176H7.84a.563.563 0 01-.406-.176.647.647 0 01-.178-.449c0-.172.066-.333.178-.449a.564.564 0 01.406-.176z'
      ></path>
      <defs>
        <filter
          id='filter0_i'
          width='17.27'
          height='19.298'
          x='0.32'
          y='0.077'
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
