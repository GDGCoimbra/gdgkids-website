import React, { Component } from "react";
import styled from "styled-components";

const ActivitiesContent = styled.div`
  padding: 2vw;
`;

export default class extends Component {
  render() {
    return <ActivitiesContent>{this.props.children}</ActivitiesContent>;
  }
}
