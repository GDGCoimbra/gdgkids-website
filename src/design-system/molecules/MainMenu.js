import React, { Component } from "react";
import styled from "styled-components";
import MainMenuLink from "../atoms/MainMenuLink";

const MainMenu = styled.div`
  background-color: var(--yellow, hsl(42, 99%, 48%));
  padding: 10px 5vw;
  font-size: 17px;
  font-weight: var(--regular, 400);
  color: var(--white, hsl(0, 0%, 100%));

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  @media all and (min-width: 768px) {
    grid-column: 1 / span 4;
    grid-row: 2 / -1;
    border-radius: 0;
    padding: 0;

    ul {
      position: absolute;
      left: 5vw;
      bottom: 2vw;
      display: flex;
      flex-direction: row-reverse;
      transform: rotate(-90deg);
      transform-origin: top left;
    }
  }

  @media all and (min-width: 992px) {
    ul {
      left: 2vw;
      bottom: 0;
    }
  }
`;

export default class extends Component {
  render() {
    const menuLinks = this.props.values.map(value => (
      <MainMenuLink key={value.id} to={value.to} value={value.name} />
    ));

    return (
      <MainMenu>
        <ul>{menuLinks}</ul>
      </MainMenu>
    );
  }
}
