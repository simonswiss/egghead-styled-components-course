import React, { Component } from "react";
import styled from "styled-components";

import Button from "./components/Button";
import InfoList from "./components/InfoList";
import InfoItem from "./components/InfoItem";

const ProgressWrapper = styled.div`
  position: relative;
  height: 1.25rem;
  width: 100%;
  background: #f2f2f2;
  border-radius: 10px;
  overflow: hidden;
`;

const Progress = styled.div`
  position: absolute;
  background: ${props =>
    props.progress === props.target ? "limegreen" : "#a965cc"};
  width: ${props => `${props.progress / props.target * 100}%`};
  top: 0;
  left: 0;
  height: 100%;
  transition: all 0.2s ease-in-out;
`;

// width: ${props => props.status / props.target}

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      target: 10
    };
    this.updateProgress = this.updateProgress.bind(this);
  }

  updateProgress(value) {
    let { progress } = this.state;
    progress = progress + value;

    // only update state if progress is within range
    if (progress >= 0 && progress <= this.state.target) {
      this.setState({
        progress: progress
      });
    }
  }
  render() {
    const { progress, target } = this.state;
    return (
      <div>
        <Button onClick={() => this.updateProgress(-1)}>-1</Button>
        <Button onClick={() => this.updateProgress(1)}>+1</Button>
        <ProgressWrapper>
          <Progress progress={progress} target={target} />
        </ProgressWrapper>
        <InfoList>
          <InfoItem label="Points" value={progress} />
          <InfoItem label="Target" value={target} />
        </InfoList>
      </div>
    );
  }
}
