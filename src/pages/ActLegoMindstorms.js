import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import ContentCard from "../design-system/atoms/ContentCard";
import termsFrPath from "../utils/actLegoMindstorms.md";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { terms: null };
  }

  componentWillMount() {
    fetch(termsFrPath)
      .then(response => response.text())
      .then(text => {
        this.setState({ terms: text });
      });
  }

  render() {
    return (
      <ContentCard>
        <ReactMarkdown source={this.state.terms} />
      </ContentCard>
    );
  }
}
