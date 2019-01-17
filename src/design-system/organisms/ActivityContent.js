import React, { Component } from "react";
import styled from "styled-components";

const ActivityContent = styled.div`
  display: flex;
  min-height: 100%;
  padding: 2vw;
`;

export default class extends Component {
  render() {
    return <ActivityContent>{this.props.children}</ActivityContent>;
  }
}
