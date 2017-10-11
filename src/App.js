import React from "react";
import styled from "styled-components";
import "./App.css";

const Button = styled.button`
  margin: 0.25rem;
  border: none;
  padding: 0.85rem 1.5rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 700;
  border-bottom: solid 5px rgba(0, 0, 0, 0.1);
  color: white;
  cursor: pointer;

  border-radius: ${props => (props.pill ? "30px" : "4px")};
  background: ${props => {
    if (props.success) return "limegreen;";
    if (props.warning) return "tomato;";
    return "#a965cc;";
  }}

  &:hover {
    border-bottom-width: 3px;
    transform: translateY(2px);
  }

  &:active {
    border-bottom-width: 1px;
    transform: translateY(4px);
  }

  &:focus {
    outline: none;
  }
`;

export default () => (
  <div>
    <Button>Click me!</Button>
    <Button pill>Pill button</Button>
    <Button success>Success!</Button>
    <Button warning pill>
      Be careful!
    </Button>
  </div>
);
