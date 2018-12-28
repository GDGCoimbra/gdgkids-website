import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  --height: 70px;

  border: 0;
  border-radius: calc(var(--height, 70px) / 2);
  background-color: var(--blue, hsl(219, 86%, 57%));
  min-width: 200px;
  width: min-content;
  height: var(--height, 70px);
  padding: 10px 50px;
  font-size: 17px;
  font-weight: var(--regular, 400);
  color: var(--white, hsl(0, 0%, 100%));
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    background-color: hsl(219, 86%, 47%);
  }
`;

export default class extends Component {
  static propTypes = {
    value: PropTypes.string
  };

  render() {
    return <Button onClick={this.props.onClick}>{this.props.value}</Button>;
  }
}
