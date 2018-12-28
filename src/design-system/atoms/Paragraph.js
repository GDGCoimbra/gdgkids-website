import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Paragraph = styled.p`
  margin: 0;
`;

export default class extends Component {
  static propTypes = {
    value: PropTypes.string
  };

  render() {
    return <Paragraph>{this.props.value}</Paragraph>;
  }
}
