import React, { Component } from "react";
import styled from "styled-components";
import Image from "../atoms/Image";

const MainWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

const LogoArea = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / 2;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: 80px;
  }
`;

const Menu = styled.div`
  grid-column: 1 / span 4;
  grid-row: 2 / -1;
  background-color: var(--yellow, hsl(42, 99%, 48%));
`;

const HeroImage = styled.div`
  grid-column: 4 / span 4;
  grid-row: 2 / span 4;
  margin-top: -50px;
  border-radius: 20px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
`;

const Intro = styled.div`
  grid-column: 8 / 13;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5vw;

  h1 {
    margin-bottom: 30px;
  }

  p {
    margin: 0;
  }

  button {
    margin-top: 5vw;
  }
`;

export default class extends Component {
  render() {
    return (
      <MainWrapper>
        <LogoArea>
          <Image src={this.props.logo} alt={this.props.alt} />
        </LogoArea>

        <Menu />
        <HeroImage image={this.props.image} />
        <Intro>{this.props.children}</Intro>
      </MainWrapper>
    );
  }
}
