import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// # For styled-components
//https://styled-components.com/docs
// npm install styled-components

// # For Emotion
// npm install @emotion/react @emotion/styled
// https://emotion.sh/docs/introduction

// Define a styled button component

const buttonStyle = (primary) => css`
  background-color: ${primary ? "blue" : "gray"};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${primary ? "darkblue" : "darkgray"};
  }
`;

const buttonContainerStyle = () => css`
  margin-top: 10px;
  display: flex;
  gap: 4px;
`;

export default function Button() {
  return (
    <div css={buttonContainerStyle()}>
      <button css={buttonStyle(true)}>Primary Button</button>
      <button css={buttonStyle(false)}>Secondary Button</button>
    </div>
  );
}
