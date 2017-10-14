import React from "react";
import styled from "styled-components";

const InfoList = styled.ul`
  list-style: none;
  margin: 1.5rem 0;
  padding: 0;
`;

export default ({ children }) => <InfoList>{children}</InfoList>;
