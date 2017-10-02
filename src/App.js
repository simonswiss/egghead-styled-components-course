import React from "react";
import styled from "styled-components";
import "./App.css";

const Button = styled.button`
  background: #a965cc;
  border: none;
  padding: 0.85rem 1.5rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 700;
  border-bottom: solid 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: white;
  cursor: pointer;

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

export default () => <Button>Click me!</Button>;
