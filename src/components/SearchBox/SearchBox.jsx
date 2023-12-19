/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Audio24 } from "../../icons/Audio24";
import { CloseCircle8 } from "../../icons/CloseCircle8";
import { Search18 } from "../../icons/Search18";
import { ButtonMedium } from "../ButtonMedium";
import "./style.css";

export const SearchBox = ({
  size,
  enter,
  suffix,
  filled,
  allowClear,
  className,
  buttonMedium = <Search18 className="search" />,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "large",
    enter: enter || "icon",
    suffix: suffix || true,
    filled: filled || true,
    allowClear: allowClear || true,
  });

  return (
    <div className={`search-box ${state.enter} ${className}`}>
      <div
        className={`affix-wrapper ${state.size} suffix-${state.suffix} allow-clear-${state.allowClear} enter-${state.enter}`}
      >
        {(state.allowClear || state.suffix) && (
          <>
            <div
              className={`input-wrapper size-${state.size} filled-${state.filled} ${state.enter}`}
              onClick={() => {
                dispatch("click");
              }}
            >
              <div className="input">
                {state.filled && <>search text</>}

                {!state.filled && <>input search text</>}
              </div>
            </div>
            <div className="suffix">
              {state.allowClear && <CloseCircle8 className="close-circle" />}

              {state.suffix && <Audio24 className="audio" />}
            </div>
          </>
        )}

        {!state.allowClear && !state.suffix && (
          <div
            className="text-4"
            onClick={() => {
              dispatch("click_495");
            }}
          >
            <div className={`input-2 size-2-${state.size} filled-1-${state.filled}`}>
              {state.filled && <>search text</>}

              {!state.filled && <>input search text</>}
            </div>
          </div>
        )}
      </div>
      {["icon", "text"].includes(state.enter) && (
        <ButtonMedium
          className={`${state.size === "small" ? "class-3" : "class-4"}`}
          hasText={state.enter === "icon" ? false : undefined}
          override={buttonMedium}
          text={state.enter === "text" ? "Search" : undefined}
          textClassName={`${state.enter === "text" && state.size === "large" && "class"} ${
            state.enter === "text" && ["medium", "small"].includes(state.size) && "class-2"
          }`}
        />
      )}

      {state.enter === "default" && (
        <div className={`input-addon-icon size-3-${state.size}`}>
          <div className="icon-wrapper-2">
            {["large", "small"].includes(state.size) && (
              <img
                className="union"
                alt="Union"
                src={state.size === "small" ? "/img/union-18.svg" : "/img/union-23.svg"}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (
    state.allowClear === false &&
    state.enter === "icon" &&
    state.filled === false &&
    state.size === "large" &&
    state.suffix === true
  ) {
    switch (action) {
      case "click":
        return {
          allowClear: true,
          enter: "icon",
          filled: true,
          size: "large",
          suffix: true,
        };
    }
  }

  if (
    state.allowClear === false &&
    state.enter === "text" &&
    state.filled === false &&
    state.size === "large" &&
    state.suffix === true
  ) {
    switch (action) {
      case "click":
        return {
          allowClear: true,
          enter: "text",
          filled: true,
          size: "large",
          suffix: true,
        };
    }
  }

  if (
    state.allowClear === false &&
    state.enter === "default" &&
    state.filled === false &&
    state.size === "large" &&
    state.suffix === true
  ) {
    switch (action) {
      case "click":
        return {
          allowClear: true,
          enter: "default",
          filled: true,
          size: "large",
          suffix: true,
        };
    }
  }

  if (
    state.allowClear === false &&
    state.enter === "default" &&
    state.filled === false &&
    state.size === "large" &&
    state.suffix === false
  ) {
    switch (action) {
      case "click_495":
        return {
          allowClear: true,
          enter: "default",
          filled: true,
          size: "large",
          suffix: false,
        };
    }
  }

  if (
    state.allowClear === false &&
    state.enter === "icon" &&
    state.filled === false &&
    state.size === "large" &&
    state.suffix === false
  ) {
    switch (action) {
      case "click_495":
        return {
          allowClear: true,
          enter: "icon",
          filled: true,
          size: "large",
          suffix: false,
        };
    }
  }

  if (
    state.allowClear === false &&
    state.enter === "text" &&
    state.filled === false &&
    state.size === "large" &&
    state.suffix === false
  ) {
    switch (action) {
      case "click_495":
        return {
          allowClear: true,
          enter: "text",
          filled: true,
          size: "large",
          suffix: false,
        };
    }
  }

  if (
    state.allowClear === false &&
    state.enter === "icon" &&
    state.filled === false &&
    state.size === "small" &&
    state.suffix === true
  ) {
    switch (action) {
      case "click":
        return {
          allowClear: true,
          enter: "icon",
          filled: true,
          size: "small",
          suffix: true,
        };
    }
  }

  if (
    state.allowClear === false &&
    state.enter === "text" &&
    state.filled === false &&
    state.size === "small" &&
    state.suffix === true
  ) {
    switch (action) {
      case "click":
        return {
          allowClear: true,
          enter: "text",
          filled: true,
          size: "small",
          suffix: true,
        };
    }
  }

  if (
    state.allowClear === false &&
    state.enter === "default" &&
    state.filled === false &&
    state.size === "small" &&
    state.suffix === true
  ) {
    switch (action) {
      case "click":
        return {
          allowClear: true,
          enter: "default",
          filled: true,
          size: "small",
          suffix: true,
        };
    }
  }

  if (
    state.allowClear === false &&
    state.enter === "icon" &&
    state.filled === false &&
    state.size === "small" &&
    state.suffix === false
  ) {
    switch (action) {
      case "click_495":
        return {
          allowClear: true,
          enter: "icon",
          filled: true,
          size: "small",
          suffix: false,
        };
    }
  }

  if (
    state.allowClear === false &&
    state.enter === "text" &&
    state.filled === false &&
    state.size === "small" &&
    state.suffix === false
  ) {
    switch (action) {
      case "click_495":
        return {
          allowClear: true,
          enter: "text",
          filled: true,
          size: "small",
          suffix: false,
        };
    }
  }

  if (
    state.allowClear === false &&
    state.enter === "default" &&
    state.filled === false &&
    state.size === "small" &&
    state.suffix === false
  ) {
    switch (action) {
      case "click_495":
        return {
          allowClear: true,
          enter: "default",
          filled: true,
          size: "small",
          suffix: false,
        };
    }
  }

  if (
    state.allowClear === false &&
    state.enter === "icon" &&
    state.filled === false &&
    state.size === "medium" &&
    state.suffix === true
  ) {
    switch (action) {
      case "click":
        return {
          allowClear: true,
          enter: "icon",
          filled: true,
          size: "medium",
          suffix: true,
        };
    }
  }

  if (
    state.allowClear === false &&
    state.enter === "text" &&
    state.filled === false &&
    state.size === "medium" &&
    state.suffix === true
  ) {
    switch (action) {
      case "click":
        return {
          allowClear: true,
          enter: "text",
          filled: true,
          size: "medium",
          suffix: true,
        };
    }
  }

  if (
    state.allowClear === false &&
    state.enter === "default" &&
    state.filled === false &&
    state.size === "medium" &&
    state.suffix === true
  ) {
    switch (action) {
      case "click":
        return {
          allowClear: true,
          enter: "default",
          filled: true,
          size: "medium",
          suffix: true,
        };
    }
  }

  if (
    state.allowClear === false &&
    state.enter === "icon" &&
    state.filled === false &&
    state.size === "medium" &&
    state.suffix === false
  ) {
    switch (action) {
      case "click_495":
        return {
          allowClear: true,
          enter: "icon",
          filled: true,
          size: "medium",
          suffix: false,
        };
    }
  }

  if (
    state.allowClear === false &&
    state.enter === "text" &&
    state.filled === false &&
    state.size === "medium" &&
    state.suffix === false
  ) {
    switch (action) {
      case "click_495":
        return {
          allowClear: true,
          enter: "text",
          filled: true,
          size: "medium",
          suffix: false,
        };
    }
  }

  if (
    state.allowClear === false &&
    state.enter === "default" &&
    state.filled === false &&
    state.size === "medium" &&
    state.suffix === false
  ) {
    switch (action) {
      case "click_495":
        return {
          allowClear: true,
          enter: "default",
          filled: true,
          size: "medium",
          suffix: false,
        };
    }
  }

  return state;
}

SearchBox.propTypes = {
  size: PropTypes.oneOf(["large", "medium", "small"]),
  enter: PropTypes.oneOf(["text", "icon", "default"]),
  suffix: PropTypes.bool,
  filled: PropTypes.bool,
  allowClear: PropTypes.bool,
};
