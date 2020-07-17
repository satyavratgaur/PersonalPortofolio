import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg width='1em' height='1em' viewBox='0 0 18 18' fill='none' {...props}>
      <g filter='url(#prefix__filter0_i)' fill='#9C9C9C'>
        <path d='M17 8a1 1 0 00-1 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h6a1 1 0 000-2H3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V9a1 1 0 00-1-1z' />
        <path d='M13 2h1.58L8.29 8.28a1 1 0 000 1.42 1 1 0 001.42 0L16 3.42V5a1 1 0 002 0V1a1 1 0 00-1-1h-4a1 1 0 100 2z' />
      </g>
      <path
        d='M14.933 2.354l.856-.854H13a.5.5 0 010-1h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V2.214l-.853.852-6.29 6.28-.002.002a.5.5 0 01-.71 0l-.003-.003a.5.5 0 010-.71l.001-.001 6.29-6.28zm1.713 6.292A.5.5 0 0117.5 9v6a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 15V3A2.5 2.5 0 013 .5h6a.5.5 0 110 1H3A1.5 1.5 0 001.5 3v12A1.5 1.5 0 003 16.5h12a1.5 1.5 0 001.5-1.5V9a.5.5 0 01.146-.354z'
        stroke='#000'
      />
      <defs>
        <filter
          id='prefix__filter0_i'
          x={0}
          y={0}
          width={18}
          height={22}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
          <feBlend in2='shape' result='effect1_innerShadow' />
        </filter>
      </defs>
    </svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
