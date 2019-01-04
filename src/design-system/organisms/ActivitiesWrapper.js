import React, { Component } from "react";
import styled from "styled-components";

const ActivitiesWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
`;

export default class extends Component {
  render() {
    return <ActivitiesWrapper>{this.props.children}</ActivitiesWrapper>;
  }
}
