import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 42 42"
      {...props}
    >
      <g filter="url(#filter0_i)">
        {/* <path
          fill="fill"
          d="M20 40c11.045 0 20-8.954 20-20S31.045 0 20 0C8.954 0 0 8.954 0 20s8.954 20 20 20z"
        ></path> */}
        <path
          fill="fill"
          d="M25.205 9.592c-3.21.412-5.652 2.799-5.816 5.678-.019.344-.057.618-.082.618-.202 0-1.81-.309-2.365-.457-2.757-.727-5.412-2.256-7.248-4.174-.309-.32-.643-.623-.738-.67-.252-.114-.599-.097-.889.046-.214.11-.296.218-.561.705-.17.314-.385.83-.473 1.145-.145.497-.17.692-.17 1.46-.007 1.11.126 1.665.674 2.816.038.074 0 .114-.164.177-.498.189-.65.572-.555 1.408.158 1.386.77 2.599 1.823 3.624.398.389.429.429.347.532-.202.246-.227.515-.082.899.202.55.669 1.316 1.11 1.814.587.67 1.217 1.134 2.164 1.603l.46.224-.246.114c-.77.343-1.98.652-3.116.79-.605.069-1.04.086-1.867.057-1.047-.034-1.078-.034-1.287.092-.328.206-.454.395-.454.687 0 .503.164.652 1.464 1.305 4.22 2.123 9.58 2.513 14.286 1.03.915-.292 2.428-.944 3.248-1.402 3.508-1.975 6.188-5.21 7.406-8.936.447-1.374.725-2.982.731-4.23v-.573l.259-.171c.422-.287 1.646-1.454 2.094-2.004.486-.59.587-.836.486-1.168-.12-.4-.682-.721-1.079-.607-.164.052-.158.03.107-.543.246-.527.265-.888.076-1.145a1.05 1.05 0 00-.788-.4c-.127 0-.524.142-1.029.371-.788.36-1.993.773-2.258.773-.07 0-.34-.143-.593-.32-.473-.321-1.35-.745-1.904-.91-.846-.253-2.151-.367-2.971-.258zm2.176 1.831a5.492 5.492 0 011.987 1.008c.63.487.788.532 1.4.406.24-.045.435-.08.448-.068.012.005-.082.074-.202.143-.473.263-.637.681-.43 1.105.165.332.386.463.852.498l.366.028-.321.218c-.53.355-.568.452-.568 1.385 0 2.696-.814 5.335-2.346 7.596-1.23 1.815-2.997 3.43-4.983 4.545-3.608 2.027-8.377 2.565-12.596 1.42-.284-.08-.511-.155-.499-.172.02-.011.385-.108.814-.217 1.52-.384 2.832-.956 4.08-1.792.701-.47.846-.864.512-1.368-.152-.23-.48-.35-1.047-.395a5.481 5.481 0 01-2.416-.79c-.347-.218-1.072-.882-1.072-.979 0-.051.126-.086.366-.109.473-.045.97-.171 1.173-.286.492-.292.473-1.122-.025-1.402-.076-.04-.379-.138-.67-.218-1.008-.263-1.816-.75-2.46-1.477-.308-.349-.712-1.019-.813-1.345-.044-.12-.031-.132.101-.103.36.092 1.25.166 1.463.132.53-.092.877-.596.739-1.06-.051-.183-.177-.309-.619-.652-.68-.52-1.072-.956-1.394-1.551-.378-.699-.473-1.088-.479-1.924 0-.395.019-.784.05-.875l.045-.155.68.555c2.183 1.798 4.605 3 7.362 3.652 1.122.27 2.188.43 3.09.47.726.028.77.023.978-.109.12-.074.278-.229.347-.343.113-.195.113-.247.044-.687-.158-.99-.07-1.786.29-2.553.625-1.346 1.98-2.347 3.577-2.622.586-.103 1.57-.063 2.176.091z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_i"
          width="40"
          height="44"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow"></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default React.memo(Icon);
