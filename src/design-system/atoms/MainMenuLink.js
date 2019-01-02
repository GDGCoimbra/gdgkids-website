import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Link = styled.li`
  position: relative;
  display: inline-block;
  padding: 0 0 0 25px;

  &:not(:last-child) {
    margin-right: 15px;
  }

  &:before {
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    width: 15px;
    height: 2px;
    background-color: #000000;
  }

  a {
    color: var(--black, hsl(0, 0%, 0%));
    text-decoration: none;
  }

  @media all and (min-width: 768px) {
    &:not(:last-child) {
      margin-left: 15px;
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
      <a href={to} target="_blank" rel="noopener noreferrer">
        {value}
      </a>
    </Link>
  );
}

export default MainMenuLink;
