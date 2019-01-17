import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ActivitiesMenuLink from "../molecules/ActivitiesMenuLink";
import Image from "../atoms/Image";
import logo from "../../images/gdgkids-logo.svg";

const Menu = styled.div`
  background-color: var(--white, hsl(0, 0%, 0%));
  padding: 2vw;

  img {
    margin-bottom: 5vw;
    width: auto;
    height: 80px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default class extends Component {
  render() {
    const menuLinks = this.props.values.map(value => (
      <ActivitiesMenuLink
        key={value.id}
        to={value.to}
        name={value.name}
        desc={value.desc}
      />
    ));

    return (
      <Menu>
        <Link to="/">
          <Image src={logo} alt="GDG Kids" />
        </Link>
        <ul>{menuLinks}</ul>
      </Menu>
    );
  }
}
