/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Image = ({ ratio, placeholder, className }) => {
  return (
    <div className={`image ${ratio} placeholder-${placeholder} ${className}`}>
      {(ratio === "eleven-thousand-six-hundred-and-eighteen" ||
        ratio === "eleven" ||
        ratio === "fifty-two" ||
        ratio === "forty-three" ||
        ratio === "one-hundred-and-sixty-nine" ||
        ratio === "one-thousand-six-hundred-and-ten" ||
        ratio === "sixteen-thousand-one-hundred-and-eighty-one" ||
        ratio === "thirty-four" ||
        ratio === "thirty-one" ||
        ratio === "thirty-two" ||
        ratio === "twenty-one" ||
        ratio === "twenty-three") && (
        <div className="aspect-ratio-keeper">
          {[
            "eleven-thousand-six-hundred-and-eighteen",
            "eleven",
            "forty-three",
            "thirty-four",
            "twenty-three",
          ].includes(ratio) && (
            <div className="aspect-ratio-keeper-2">
              {["eleven-thousand-six-hundred-and-eighteen", "thirty-four", "twenty-three"].includes(ratio) && (
                <div className="aspect-ratio-keeper-3">
                  {ratio === "eleven-thousand-six-hundred-and-eighteen" && <div className="aspect-ratio-keeper-4" />}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {ratio === "custom" && (
        <>
          <div className="height">
            <div className="rectangle" />
            <div className="rectangle" />
          </div>
          <div className="width">
            <div className="rectangle" />
            <div className="rectangle" />
          </div>
        </>
      )}
    </div>
  );
};

Image.propTypes = {
  ratio: PropTypes.oneOf([
    "eleven-thousand-six-hundred-and-eighteen",
    "thirty-four",
    "twenty-three",
    "one-thousand-six-hundred-and-ten",
    "custom",
    "fifty-two",
    "twenty-one",
    "thirty-two",
    "eleven",
    "thirty-one",
    "sixteen-thousand-one-hundred-and-eighty-one",
    "one-hundred-and-sixty-nine",
    "forty-three",
  ]),
  placeholder: PropTypes.bool,
};
