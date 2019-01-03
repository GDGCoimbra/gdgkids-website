import React, { Component } from "react";
import styled from "styled-components";
import Image from "../atoms/Image";
import Title from "../atoms/Title";

import logo from "../../images/gdgkids-logo.svg";

const ActivitiesWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
`;

const Sidebar = styled.div`
  background-color: var(--white, hsl(0, 0%, 0%));
  padding: 2vw 5vw 2vw 2vw;

  img {
    margin-bottom: 5vw;
    width: auto;
    height: 80px;
  }

  ul {
    /* border: 1px solid red; */
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      position: relative;
      /* display: flex;
      flex-direction: column; */
      /* align-items: center; */

      &:not(:last-child) {
        margin-bottom: 30px;
      }

      &.active {
        /* color: var(--blue, hsl(218, 99%, 39%)); */

        &:before {
          position: absolute;
          top: 10px;
          left: -2vw;
          background-color: var(--blue, hsl(218, 99%, 39%));
          width: 20px;
          height: 10px;
          content: "";
        }

        span {
          &:first-child {
            color: var(--blue, hsl(218, 99%, 39%));
          }

          &:last-child {
            color: var(--black, hsl(0, 0%, 0%)) !important;
          }
        }
      }

      span {
        &.menu-title {
          font-size: 1.3rem;
          font-weight: var(--black, 900);
        }

        &.menu-desc {
          /* border: 1px solid red; */
          margin-top: 30px;
          display: block;
          max-width: 300px;
          font-size: 0.8rem;
          font-weight: var(--light, 300);
          /* color: var(--black, hsl(0, 0%, 0%)) !important; */
        }
      }
    }
  }
`;

const Content = styled.div`
  background-color: var(--grey, hsl(0, 0%, 96%));
  padding: 2vw;
`;

const ActivityInfo = styled.div`
  background-color: var(--white, hsl(0, 0%, 0%));
  border-radius: 20px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vw;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
`;

const ActivityContent = styled.div`
  margin-top: 2vw;
  background-color: var(--white, hsl(0, 0%, 0%));
  border-radius: 20px;
  padding: 2vw;

  h1 {
    display: inline-block;
    position: relative;
    margin-bottom: 2vw;
    padding-top: 10px;
    color: var(--blue, hsl(218, 99%, 39%));
    /* border: 1px solid red; */

    &:before {
      position: absolute;
      top: 0;
      /* left: -10px; */
      background-color: var(--blue, hsl(218, 99%, 39%));
      width: 70%;
      height: 10px;
      content: "";
    }
  }
`;

export default class extends Component {
  render() {
    return (
      <ActivitiesWrapper>
        <Sidebar>
          <Image src={logo} alt="GDG Kids" />
          <ul>
            <li className="active">
              <span className="menu-title">Lego Mindstorms</span>
              <span className="menu-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </li>
            <li>
              <span className="menu-title">Lego Challenge</span>
            </li>
            <li>
              <span className="menu-title">Playsketch</span>
            </li>
            <li>
              <span className="menu-title">Hour of Code</span>
            </li>
            <li>
              <span className="menu-title">Rubik Cube</span>
            </li>
          </ul>
        </Sidebar>
        <Content>
          <ActivityInfo>Info</ActivityInfo>
          <ActivityContent>
            <Title value="Commodo in est vitae" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </ActivityContent>
        </Content>
      </ActivitiesWrapper>
    );
  }
}
