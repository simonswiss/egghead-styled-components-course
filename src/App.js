import React from "react";
import styled from "styled-components";

import Button from "./components/Button";

const ProgressWrapper = styled.div`
  position: relative;
  height: 1.25rem;
  width: 100%;
  background: #f8f8f8;
  margin: 1rem 0;
`;

const Progress = styled.div`
  position: absolute;
  background: #0099aa;
  top: 0;
  left: 0;
  height: 100%;
  width: 40%;
`;

// width: ${props => props.status / props.target}

export default () => (
  <div>
    <Button>Click me!</Button>
    <ProgressWrapper>
      <Progress />
    </ProgressWrapper>
  </div>
);
