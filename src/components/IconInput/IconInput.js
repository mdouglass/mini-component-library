import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconSize = size === "large" ? 24 : 16;
  const fontSize = size === "large" ? 18 : 14;

  return (
    <>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper id={icon} size={iconSize} />
      <InputWrapper
        type="text"
        placeholder={placeholder}
        style={{
          "--icon-size": iconSize + "px",
          "--font-size": fontSize + "px",
          "--width": width + "px",
        }}
      />
    </>
  );
};

const IconWrapper = styled(Icon)`
  position: absolute;
`;

const InputWrapper = styled.input`
  border: none;
  border-bottom: 1px solid;
  padding-left: var(--icon-size);

  font-family: Roboto;
  font-size: var(--font-size);
  font-weight: 700;
  color: ${COLORS.gray700};
  width: var(--width);

  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  :focus {
    outline: 2px solid hsla(218, 57%, 53%, 1);
    outline-offset: 2px;
  }

  :hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
