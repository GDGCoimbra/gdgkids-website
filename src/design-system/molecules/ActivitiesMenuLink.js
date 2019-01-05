import React from "react";
import { Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const MenuItem = styled.li`
  position: relative;
  padding-left: 1vw;

  &:not(:last-child) {
    margin-bottom: calc(2vw + 15px);
  }

  a {
    font-size: 1.3rem;
    font-weight: var(--black, 900);
    color: var(--blue, hsl(218, 99%, 39%));
    text-decoration: none;

    & + span {
      display: none;
      margin-top: 15px;
      max-width: 300px;
      font-size: 0.8rem;
      font-weight: var(--light, 300);
      color: var(--black, hsl(0, 0%, 0%)) !important;
    }
  }

  &.active {
    a + span {
      display: block;
    }

    &:before {
      position: absolute;
      top: 12px;
      left: -2vw;
      background-color: var(--blue, hsl(218, 99%, 39%));
      width: 2vw;
      height: 8px;
      content: "";
    }
  }
`;

MenuLink.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string
};

function MenuLink({ to, name, desc, activeOnlyWhenExact }) {
  return (
    <Route
      path={to}
      exact
      children={({ match }) => (
        <MenuItem className={match ? "active" : ""}>
          <Link to={to}>{name}</Link>
          <span className="menu-desc">{desc}</span>
        </MenuItem>
      )}
    />
  );
}

export default MenuLink;
