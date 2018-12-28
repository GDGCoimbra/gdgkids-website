import React, { Component } from "react";
import styled from "styled-components";
import MainMenuLink from "../atoms/MainMenuLink";

const MainMenu = styled.div`
  background-color: var(--yellow, hsl(42, 99%, 48%));
  padding: 2vw 5vw;
  font-size: 17px;
  font-weight: var(--regular, 400);
  color: var(--white, hsl(0, 0%, 100%));

  ul {
    margin: 0;
    padding: 0 0 0 25px;
    list-style: none;
  }

  @media all and (min-width: 768px) {
    grid-column: 1 / span 4;
    grid-row: 2 / -1;
    flex-direction: row-reverse;
    border-radius: 0;

    ul {
      writing-mode: vertical-lr;
      position: absolute;
      bottom: 5vw;
      padding: 35px 0;
      transform: rotate(180deg);
      }
    }
  }

  @media all and (min-width: 992px) {
    padding: 2vw;

    ul {
      bottom: 2vw;
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
