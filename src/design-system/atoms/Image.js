import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Image = styled.img`
  width: auto;
  height: auto;
`;

export default class extends Component {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string.isRequired
  };

  render() {
    return <Image src={this.props.src} alt={this.props.alt} />;
  }
}
