import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  font-size: 1.3rem;
  font-weight: var(--black, 900);
  line-height: 120%;
`;

export default class extends Component {
  static propTypes = {
    value: PropTypes.string
  };

  render() {
    return <Title>{this.props.value}</Title>;
  }
}
