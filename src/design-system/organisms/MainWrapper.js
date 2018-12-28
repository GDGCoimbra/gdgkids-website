import React, { Component } from "react";
import styled from "styled-components";
import Image from "../atoms/Image";

const MainWrapper = styled.div`
  @media all and (min-width: 768px) {
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`;

const LogoArea = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  padding: 5vw;

  img {
    width: auto;
    height: 80px;
  }

  @media all and (min-width: 992px) {
    padding: 2vw;
  }
`;

const Menu = styled.div`
  margin-left: 25%;
  width: 75%;
  background-color: var(--yellow, hsl(42, 99%, 48%));
  border-radius: 20px 0 0 20px;
  padding: 2vw 5vw;
  text-align: right;
  font-size: 17px;
  font-weight: var(--regular, 400);
  color: var(--white, hsl(0, 0%, 100%));

  ul {
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding: 0;

    li {
      list-style: none;
      display: inline-block;
      height: 100%;
      display: flex;
      align-items: center;
      white-space: nowrap;

      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }

  @media all and (min-width: 768px) {
    grid-column: 1 / span 4;
    grid-row: 2 / -1;
    margin-left: 0;
    width: 100%;
    height: 100%;
    flex-direction: row-reverse;
    border-radius: 0;

    ul {
      writing-mode: vertical-lr;
      position: absolute;
      bottom: 5vw;
      transform: rotate(180deg);

      li {
        height: initial;

        &:not(:last-child) {
          margin: 0 0 30px 0;
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

const HeroImage = styled.div`
  display: none;

  @media all and (min-width: 768px) {
    display: initial;
    grid-column: 3 / span 4;
    grid-row: 2 / span 4;
    margin-top: -50px;
    border-radius: 20px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
  }

  @media all and (min-width: 992px) {
    grid-column: 4 / span 4;
  }
`;

const Intro = styled.div`
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

  button {
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

    button {
      margin: 30px 0 0 0;
    }
  }

  @media all and (min-width: 992px) {
    grid-column: 8 / 13;
  }
`;

export default class extends Component {
  render() {
    return (
      <MainWrapper>
        <LogoArea>
          <Image src={this.props.logo} alt={this.props.alt} />
        </LogoArea>

        <Menu>
          <ul>
            <li>Eventos</li>
            <li>GDG Coimbra</li>
          </ul>
        </Menu>
        <HeroImage image={this.props.image} />
        <Intro>{this.props.children}</Intro>
      </MainWrapper>
    );
  }
}
