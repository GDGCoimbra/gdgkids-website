import React, { Component } from "react";
import styled from "styled-components";

const MainIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5vw;
  overflow-y: scroll;

  h1 {
    margin: 30px 0;
  }

  p {
    margin: 0;
  }

  button,
  a {
    margin: 30px auto;
  }

  @media all and (max-height: 767px) {
    display: initial;

    &:after {
      content: "";
      display: block;
      height: 5vw;
      width: 100%;
    }
  }

  @media all and (min-width: 768px) {
    grid-column: 7 / 13;
    grid-row: 1 / -1;

    h1 {
      margin: 0 0 30px 0;
    }

    button,
    a {
      margin: 30px 0 0 0;
    }
  }

  @media all and (min-width: 992px) {
    grid-column: 8 / 13;
  }
`;

export default class extends Component {
  render() {
    return <MainIntro>{this.props.children}</MainIntro>;
  }
}
