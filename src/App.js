import React, { Component } from "react";
import "./App.css";
import logo from "./images/gdgkids-logo.svg";

export default class extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="GDG Kids" />
        <span>Brevemente</span>
      </div>
    );
  }
}
