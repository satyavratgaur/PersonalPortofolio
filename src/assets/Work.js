import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='17'
      fill='none'
      viewBox='0 0 18 17'
      {...props}
    >
      <path
        fill='fill'
        fillRule='evenodd'
        d='M14 3a3 3 0 00-3-3H7a3 3 0 00-3 3H3a3 3 0 00-3 3v8a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3h-1zm-3-1H7a1 1 0 00-1 1h6a1 1 0 00-1-1zM3 5h12a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
