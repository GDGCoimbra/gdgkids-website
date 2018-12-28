import React, { Component } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

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

    li {
      position: relative;
      display: inline-block;

      &:not(:last-child) {
        margin-right: 35px;
      }

      &:before {
        content: "";
        position: absolute;
        top: calc(50% - 1px);
        left: -25px;
        width: 15px;
        height: 2px;
        background-color: #fff;
      }
    }
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

      li {
        width: 100%;
        padding: 0;

        &:not(:last-child) {
          margin: 0 0 35px 0;
        }

        &:before {
          content: "";
          position: absolute;
          left: calc(50% - -1px);
          top: -25px;
          width: 2px;
          height: 15px;
          background-color: #fff;
        }
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
  // static propTypes = {
  //   src: PropTypes.string,
  //   alt: PropTypes.string.isRequired
  // };

  render() {
    return (
      <MainMenu>
        <ul>
          <li>Eventos</li>
          <li>GDG Coimbra</li>
        </ul>
      </MainMenu>
    );
  }
}
