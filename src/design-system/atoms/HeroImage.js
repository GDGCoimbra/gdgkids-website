import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeroImage = styled.div`
  height: 25vh;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;

  @media all and (min-width: 768px) {
    grid-column: 3 / span 4;
    grid-row: 2 / span 4;
    margin-top: -50px;
    height: initial;
    border-radius: 20px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
  }

  @media all and (min-width: 992px) {
    grid-column: 4 / span 4;
  }
`;

export default class extends Component {
  static propTypes = {
    image: PropTypes.string
  };

  render() {
    return <HeroImage image={this.props.image} />;
  }
}
