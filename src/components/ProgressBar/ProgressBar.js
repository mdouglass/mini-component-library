/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const styles = {
  small: {
    trackHeight: 8,
    trackPadding: 0,
    trackRadius: 4,
  },
  medium: {
    trackHeight: 12,
    trackPadding: 0,
    trackRadius: 4,
  },
  large: {
    trackHeight: 24,
    trackPadding: 4,
    trackRadius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const style = styles[size];
  return (
    <Track
      role="progressbar"
      aria-valuenow={value}
      style={{
        "--height": `${style.trackHeight}px`,
        "--padding": `${style.trackPadding}px`,
        "--radius": `${style.trackRadius}px`,
      }}
    >
      <Indicator
        style={{
          "--percent": `${value}%`,
          "--radius": `${Math.max(0, value - 98) * 2}px`,
        }}
      ></Indicator>
    </Track>
  );
};

export default ProgressBar;

const Track = styled.div`
  height: var(--height);
  width: 370px;
  padding: var(--padding);
  border-radius: var(--radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Indicator = styled.div`
  background-color: ${COLORS.primary};
  width: var(--percent);
  height: 100%;
  border-radius: var(--radius);
`;
