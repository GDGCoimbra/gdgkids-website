import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ContentCard = styled.div`
  border-radius: 20px;
  background-color: var(--white, hsl(0, 0%, 0%));
  padding: 2vw;
`;

export default class extends Component {
  render() {
    return <ContentCard>{this.props.children}</ContentCard>;
  }
}
