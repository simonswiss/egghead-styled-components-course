import React from "react";
import styled from "styled-components";

const List = styled.li`
  display: inline-block;
  margin-right: 2rem;
`;

const Label = styled.h4`
  font-weight: 400;
  margin: 0;
  line-height: 1;
  font-size: 0.75rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #a6a6a6;
`;

const Value = styled.p`
  font-size: 3rem;
  font-weight: 900;
  margin: 0;
`;

export default props => (
  <List>
    <Label>{props.label}</Label>
    <Value>{props.value}</Value>
  </List>
);
