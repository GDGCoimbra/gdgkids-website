import React, { Component } from "react";
import styled from "styled-components";

const ActivitiesWrapper = styled.div`
  border: 1px solid red;
`;

export default class extends Component {
  render() {
    return (
      <ActivitiesWrapper>
        <div>menu</div>
        <div>content</div>
      </ActivitiesWrapper>
    );
  }
}
