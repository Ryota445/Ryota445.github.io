/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Setting12 } from "../../icons/Setting12";
import { Setting2 } from "../../icons/Setting2";
import { Setting8 } from "../../icons/Setting8";
import { Setting9 } from "../../icons/Setting9";
import "./style.css";

export const IconWrapper = ({ size, union, className, img = "/img/union-2.svg" }) => {
  return (
    <div className={`icon-wrapper ${className}`}>
      {union && (
        <div className={`union-wrapper ${size}`}>
          <img
            className="img"
            alt="Union"
            src={
              size === "one-hundred-and-four-px"
                ? "/img/union-11.svg"
                : size === "sixty-four-px"
                ? "/img/union-10.svg"
                : size === "forty-eight-px"
                ? "/img/union-9.svg"
                : size === "thirty-two-px"
                ? "/img/union-8.svg"
                : size === "twenty-four-px"
                ? "/img/union-7.svg"
                : size === "twenty-two-px"
                ? "/img/union-6.svg"
                : size === "twenty-px"
                ? "/img/union-5.svg"
                : size === "eighteen-px"
                ? "/img/union-4.svg"
                : size === "sixteen-px"
                ? "/img/union-3.svg"
                : size === "fourteen-px"
                ? img
                : size === "twelve-px"
                ? "/img/union-1.svg"
                : size === "ten-px"
                ? "/img/union.svg"
                : "/img/union-12.svg"
            }
          />
        </div>
      )}

      {((size === "forty-eight-px" && !union) ||
        (size === "one-hundred-and-four-px" && !union) ||
        (size === "one-hundred-and-twenty-eight-px" && !union) ||
        (size === "sixty-four-px" && !union)) && (
        <Setting12
          className={`${
            size === "one-hundred-and-four-px"
              ? "class-5"
              : size === "sixty-four-px"
              ? "class-6"
              : size === "forty-eight-px"
              ? "class-7"
              : "class-8"
          }`}
        />
      )}

      {size === "thirty-two-px" && !union && <Setting9 className="setting-9" />}

      {((size === "eighteen-px" && !union) ||
        (size === "twenty-four-px" && !union) ||
        (size === "twenty-px" && !union) ||
        (size === "twenty-two-px" && !union)) && (
        <Setting8
          className={`${
            size === "twenty-two-px"
              ? "class-9"
              : size === "twenty-px"
              ? "class-10"
              : size === "eighteen-px"
              ? "class-11"
              : "class-12"
          }`}
        />
      )}

      {((size === "fourteen-px" && !union) ||
        (size === "sixteen-px" && !union) ||
        (size === "ten-px" && !union) ||
        (size === "twelve-px" && !union)) && (
        <Setting2
          className={`${
            size === "fourteen-px"
              ? "class-13"
              : size === "twelve-px"
              ? "class-14"
              : size === "ten-px"
              ? "class-15"
              : "class-16"
          }`}
        />
      )}
    </div>
  );
};

IconWrapper.propTypes = {
  size: PropTypes.oneOf([
    "eighteen-px",
    "twenty-four-px",
    "twelve-px",
    "one-hundred-and-four-px",
    "forty-eight-px",
    "sixteen-px",
    "one-hundred-and-twenty-eight-px",
    "sixty-four-px",
    "ten-px",
    "fourteen-px",
    "twenty-two-px",
    "thirty-two-px",
    "twenty-px",
  ]),
  union: PropTypes.bool,
  img: PropTypes.string,
};
