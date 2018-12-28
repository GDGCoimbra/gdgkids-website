import React, { Component } from "react";
import styled from "styled-components";
import Image from "../atoms/Image";
import HeroImage from "../atoms/HeroImage";
import MainMenu from "../molecules/MainMenu";
import MainIntro from "../molecules/MainIntro";

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

export default class extends Component {
  render() {
    return (
      <MainWrapper>
        <LogoArea>
          <Image src={this.props.logo} alt={this.props.alt} />
        </LogoArea>

        <MainMenu values={this.props.values} />
        <HeroImage image={this.props.image} />
        <MainIntro>{this.props.children}</MainIntro>
      </MainWrapper>
    );
  }
}
