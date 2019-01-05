import React, { Component } from "react";
import ActivityFile from "../design-system/atoms/ActivityFile";
import actLegoMindstorms from "../utils/actLegoMindstorms.md";

export default class extends Component {
  render() {
    return <ActivityFile file={actLegoMindstorms} />;
  }
}
