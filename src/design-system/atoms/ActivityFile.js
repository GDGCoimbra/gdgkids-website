import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import styled from "styled-components";

const ActivityFile = styled.div`
  min-height: 100%;
  border-radius: 20px;
  background-color: var(--white, hsl(0, 0%, 0%));
  padding: 2vw;
`;

export default class extends Component {
  static propTypes = {
    file: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = { md: null };
  }

  componentWillMount() {
    fetch(this.props.file)
      .then(response => response.text())
      .then(text => {
        this.setState({ md: text });
      });
  }

  render() {
    return (
      <ActivityFile>
        <ReactMarkdown source={this.state.md} />
      </ActivityFile>
    );
  }
}
