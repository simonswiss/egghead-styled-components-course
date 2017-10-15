import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea.attrs({
  rows: props => {
    if (props.small) return 3;
    if (props.big) return 10;
  }
})`
  border: solid 2px #e6e6e6;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  resize: vertical;
`;

export default () => (
  <div>
    <TextArea small />
    <TextArea big />
  </div>
);
