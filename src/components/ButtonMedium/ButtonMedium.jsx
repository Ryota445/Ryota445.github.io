/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconWrapper } from "../IconWrapper";
import "./style.css";

export const ButtonMedium = ({
  icon = true,
  className,
  override = <IconWrapper className="icon-wrapper-instance" img="/img/union-13.svg" size="fourteen-px" union />,
  hasText = true,
  textClassName,
  text = "Button Title",
}) => {
  return (
    <div className={`button-medium ${className}`}>
      {override}

      {hasText && <div className={`text-3 ${textClassName}`}>{text}</div>}
    </div>
  );
};

ButtonMedium.propTypes = {
  icon: PropTypes.bool,
  hasText: PropTypes.bool,
  text: PropTypes.string,
};
