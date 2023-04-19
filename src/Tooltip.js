import React, { useState } from "react";
import styled from "styled-components";

function Tooltip(props) {
  const [isHovering, setIsHovering] = useState(false);

  const Tool = styled.p`
  max-width: 200px;
  position: absolute;

  top: ${props.position === "right" ? "50%" : props.position === "left" ? "50%" : props.position === "top" ? 0 : null};

  right: ${props.position === "right" ? 0 : null};

  left: ${props.position === "left" ? "20px" : props.position === "bottom" || props.position === "top" ? "35%" : null};

  bottom: ${props.position === "bottom" ? "-120%" : null};

  padding: 20px;
  width: 200px;
  background-color: #1b1b1b;
  color: #fff;
  font-weight: 700;
  font-size: 1.2em;
  border-radius: 12px;
  border: 2px solid #ff0852;
  box-shadow: 2px 1px 5px 1px #000000b6;
  margin-bottom: 120px;

  &::before {
    content: "";
    position: absolute;
    
    ${props.position === "right" && `
      top: 10px;
      left: -15px; 
      border-top: 13px solid transparent;
      border-bottom: 13px solid transparent;
      border-right: 15px solid #ff0852;
    `}

    ${props.position === "left" && `
      top: 10px;
      right: -15px;
      border-top: 13px solid transparent;
      border-bottom: 13px solid transparent;
      border-left: 15px solid #ff0852;
    `}

    ${props.position === "bottom" && `
      top: -18%;
      left: 40%;
      border-left: 13px solid transparent;
      border-right: 13px solid transparent;
      border-bottom: 15px solid #ff0852;
    `}

    ${props.position === "top" && `
      bottom: -18%;
      left: 45%;
      border-left: 13px solid transparent;
      border-right: 13px solid transparent;
      border-top: 15px solid #ff0852;
    `}
  }
`;
  return (
    <div className="ToolContainer">
      <button
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        Hover Over Me!
      </button>

      {isHovering ? <Tool className="tooltip">{props.text}</Tool> : null}
    </div>
  );
}

export default Tooltip;
