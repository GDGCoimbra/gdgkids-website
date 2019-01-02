import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SelectOption from "./SelectOption";
import translate from "../../images/translate.svg";
import languages from "../../utils/languages";

const LanguageSelector = styled.div`
  position: absolute;
  top: 58px;
  right: 5vw;
  width: min-content;
  display: flex;
  flex-direction: row;

  label {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
      width: auto;
      height: 24px;
    }
  }

  select {
    border: 0;
    border-radius: 0;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 32 32'><path fill='rgb(153, 153, 153)' d='M10.827 12.387l5.173 5.173 5.173-5.173c0.52-0.52 1.36-0.52 1.88 0v0c0.52 0.52 0.52 1.36 0 1.88l-6.12 6.12c-0.52 0.52-1.36 0.52-1.88 0l-6.12-6.12c-0.52-0.52-0.52-1.36 0-1.88v0c0.52-0.507 1.373-0.52 1.893 0z'></path></svg>");
    background-position: right center;
    background-repeat: no-repeat;
    padding: 0 20px 0 0;
    font-size: 0.6rem;
    color: var(--darkGrey, hsl(0, 0%, 60%));
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

export default class extends Component {
  static propTypes = {
    value: PropTypes.string,
    details: PropTypes.string
  };

  state = {
    languages: languages
  };

  render() {
    return (
      <LanguageSelector>
        <label htmlFor="language-selector">
          <img src={translate} alt="Choose a language" />
        </label>
        <select
          id="language-selector"
          value={this.props.value}
          onChange={this.props.onChange}
        >
          {Object.keys(this.state.languages).map(key => (
            <SelectOption
              key={key}
              index={key}
              details={this.state.languages[key]}
            />
          ))}
        </select>
      </LanguageSelector>
    );
  }
}
