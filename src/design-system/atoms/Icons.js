import React, { Component } from "react";

const icons = {
  translate:
    "M16.867 20.893c0.187-0.48 0.067-1.027-0.307-1.4l-2.787-2.747 0.040-0.040c2.32-2.587 3.973-5.56 4.947-8.707h2.587c0.72 0 1.32-0.6 1.32-1.32v-0.027c0-0.72-0.6-1.32-1.32-1.32h-8.013v-1.333c0-0.733-0.6-1.333-1.333-1.333s-1.333 0.6-1.333 1.333v1.333h-8.013c-0.72 0-1.32 0.6-1.32 1.32 0 0.733 0.6 1.32 1.32 1.32h13.573c-0.893 2.587-2.307 5.027-4.227 7.16-1.080-1.187-1.987-2.48-2.747-3.84-0.213-0.387-0.6-0.627-1.040-0.627-0.92 0-1.507 1-1.053 1.8 0.84 1.507 1.867 2.947 3.067 4.28l-5.827 5.747c-0.533 0.52-0.533 1.373 0 1.893 0.52 0.52 1.36 0.52 1.893 0l5.707-5.72 2.693 2.693c0.68 0.68 1.84 0.427 2.173-0.467zM23.333 13.333c-0.8 0-1.52 0.493-1.8 1.253l-4.893 13.067c-0.32 0.813 0.293 1.68 1.16 1.68 0.52 0 0.987-0.32 1.173-0.813l1.187-3.187h6.333l1.2 3.187c0.187 0.48 0.653 0.813 1.173 0.813 0.867 0 1.48-0.867 1.173-1.68l-4.893-13.067c-0.293-0.76-1.013-1.253-1.813-1.253zM21.173 22.667l2.16-5.773 2.16 5.773h-4.32z"
};

export default class extends Component {
  render() {
    return (
      <svg viewBox="0 0 32 32">
        <path style={{ fill: this.props.fill }} d={icons[this.props.icon]} />
      </svg>
    );
  }
}