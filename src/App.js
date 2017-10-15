import React from "react";
import styled from "styled-components";

const Quote = styled.blockquote`
  position: relative;
  background: #f7f7f7;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 4rem;
  padding-right: 2rem;
  margin: 0;
  border-left: solid 5px rgba(0, 0, 0, 0.4);
  font-family: Georgia, serif;
  font-style: italic;
  line-height: 1.5;
  margin-bottom: 1rem;

  &:before {
    content: "“";
    font-size: 4rem;
    position: absolute;
    left: 1.25rem;
    top: 0;
  }
`;

const CalloutQuote = styled(Quote)`
  background: limegreen;
  color: white;
`;

export default () => (
  <div>
    <Quote>
      I am super happy this has finally happened. I have been waiting for it for
      so long!
    </Quote>
    <CalloutQuote>
      I am super happy this has finally happened. I have been waiting for it for
      so long!
    </CalloutQuote>
  </div>
);
