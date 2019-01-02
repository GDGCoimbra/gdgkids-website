import React, { Component } from "react";

export default class extends Component {
  render() {
    const { key, name } = this.props.details;
    return <option value={key}>{name}</option>;
  }
}
