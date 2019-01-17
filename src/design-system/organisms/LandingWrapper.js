import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import styled from "styled-components";
import LanguageSelector from "../atoms/LanguageSelector";
import Image from "../atoms/Image";
import HeroImage from "../atoms/HeroImage";
import LandingMenu from "../molecules/LandingMenu";
import LandingIntro from "../molecules/LandingIntro";

const Wrapper = styled.div`
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
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 5vw;
  z-index: 2;

  img {
    width: auto;
    height: 80px;
  }

  @media all and (min-width: 992px) {
    padding: 2vw;
  }
`;

class MainWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    const { i18n } = this.props;
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    changeLanguage(event.target.value);
  }

  render() {
    const { i18n } = this.props;
    const activeLanguage = i18n.languages[0];

    return (
      <Wrapper>
        <LogoArea>
          <Image src={this.props.logo} alt={this.props.alt} />
          <LanguageSelector
            value={activeLanguage}
            onChange={this.handleChange}
          />
        </LogoArea>

        <LandingMenu values={this.props.values} />
        <HeroImage image={this.props.image} />
        <LandingIntro>{this.props.children}</LandingIntro>
      </Wrapper>
    );
  }
}

export default withNamespaces("translation")(MainWrapper);
