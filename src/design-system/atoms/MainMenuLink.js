import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Link = styled.li`
  position: relative;
  display: inline-block;

  &:not(:last-child) {
    margin-right: 35px;
  }

  &:before {
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    left: -25px;
    width: 15px;
    height: 2px;
    background-color: #fff;
  }

  a {
    color: var(--white, hsl(0, 0%, 100%));
    text-decoration: none;
  }

  @media all and (min-width: 768px) {
    width: 100%;
    padding: 0;

    &:not(:last-child) {
      margin: 0 0 35px 0;
    }

    &:before {
      content: "";
      position: absolute;
      left: calc(50% - -1px);
      top: -25px;
      width: 2px;
      height: 15px;
      background-color: #fff;
    }
  }
`;

MainMenuLink.propTypes = {
  to: PropTypes.string,
  value: PropTypes.string
};

function MainMenuLink({ to, value }) {
  return (
    <Link>
      <a href={to} target="_blank">
        {value}
      </a>
    </Link>
  );
}

export default MainMenuLink;
