import React, { useState } from "react";
import styled from "styled-components";
import "./index.css";

export default function Tooltip(props) {
  const [isHovering, setIsHovering] = useState(false);

  const HoverEffect = styled.p`
    max-width: 200px;
    position: absolute;
    ${props.position}: 0;
    right: 0;
    padding: 20px;
    width: max-content;
    background-color: #1b1b1b;
    color: #fff;
    font-weight: 700;
    font-size: 1.2em;
    border-radius: 12px;
    border: 2px solid #ff0852;
    box-shadow: 2px 1px 5px 1px #000000b6;

    &::before {
      content: "";
      position: absolute;
      top: 10;
      left: -15px;
      border-top: 13px solid transparent;
      border-bottom: 13px solid transparent;
      border-right: 15px solid #ff0852;
    }
  `;


  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };


  const styles = {
    parent_container: {
      position: "relative",
      display: "flex",
      marginTop: 100,
    },

    container: {
      width: "max-content",
      borderRadius: 10,
    },
    text: {
      textDecoration: "underline",
      color: "grey",
    }
  };


  return (
    <div style={styles.parent_container}>
      <div
        style={styles.container}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1 style={styles.text}>Hover Over Me!</h1>
      </div>

      <div style={styles.tooltip}>
        {isHovering ? (
          <HoverEffect className="tool" position={props.position}>
            {props.text}
          </HoverEffect>
        ) : null}
      </div>
    </div>
  );
}
