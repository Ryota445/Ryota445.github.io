/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Home = ({ color = "#a3aed0", opacity = "unset", className }) => {
  return (
    <svg
      className={`home ${className}`}
      fill="none"
      height="36"
      viewBox="0 0 36 36"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M33.2752 17.7538L18.7943 3.28353C18.6901 3.17906 18.5662 3.09617 18.4299 3.03962C18.2935 2.98307 18.1474 2.95396 17.9998 2.95396C17.8522 2.95396 17.706 2.98307 17.5697 3.03962C17.4334 3.09617 17.3095 3.17906 17.2053 3.28353L2.7244 17.7538C2.30253 18.1757 2.06347 18.7488 2.06347 19.3464C2.06347 20.5874 3.07245 21.5964 4.31346 21.5964H5.83925V31.9218C5.83925 32.5441 6.34198 33.0468 6.96425 33.0468H15.7498V25.1718H19.6873V33.0468H29.0353C29.6576 33.0468 30.1603 32.5441 30.1603 31.9218V21.5964H31.6861C32.2838 21.5964 32.8568 21.3609 33.2787 20.9355C34.1541 20.0566 34.1541 18.6327 33.2752 17.7538V17.7538Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Home.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
