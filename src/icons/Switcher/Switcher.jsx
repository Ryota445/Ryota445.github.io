/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Switcher = ({ color = "#A3AED0", className }) => {
  return (
    <svg
      className={`switcher ${className}`}
      fill="none"
      height="36"
      viewBox="0 0 36 36"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M26.4375 8.4375H5.0625C4.44023 8.4375 3.9375 8.94023 3.9375 9.5625V30.9375C3.9375 31.5598 4.44023 32.0625 5.0625 32.0625H26.4375C27.0598 32.0625 27.5625 31.5598 27.5625 30.9375V9.5625C27.5625 8.94023 27.0598 8.4375 26.4375 8.4375ZM20.9531 21.3047C20.9531 21.4594 20.8266 21.5859 20.6719 21.5859H10.8281C10.6734 21.5859 10.5469 21.4594 10.5469 21.3047V19.6172C10.5469 19.4625 10.6734 19.3359 10.8281 19.3359H20.6719C20.8266 19.3359 20.9531 19.4625 20.9531 19.6172V21.3047ZM30.9375 3.9375H9.28125C9.12656 3.9375 9 4.06406 9 4.21875V6.1875C9 6.34219 9.12656 6.46875 9.28125 6.46875H29.5312V26.7188C29.5312 26.8734 29.6578 27 29.8125 27H31.7812C31.9359 27 32.0625 26.8734 32.0625 26.7188V5.0625C32.0625 4.44023 31.5598 3.9375 30.9375 3.9375Z"
        fill={color}
        fillOpacity="0.85"
      />
    </svg>
  );
};

Switcher.propTypes = {
  color: PropTypes.string,
};
