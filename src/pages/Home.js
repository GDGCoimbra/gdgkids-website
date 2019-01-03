import React from "react";
import { withNamespaces } from "react-i18next";
import MainWrapper from "../design-system/organisms/MainWrapper";
import Title from "../design-system/atoms/Title";
import Paragraph from "../design-system/atoms/Paragraph";
import Link from "../design-system/atoms/Link";
import logo from "../images/gdgkids-logo.svg";
import image from "../images/mindstorms.jpg";

function Home({ t }) {
  const menuLinks = [
    {
      id: 1,
      to: "/activities",
      name: t("menu.activities")
    },
    {
      id: 2,
      to: "http://gdgcoimbra.xyz/events",
      name: t("menu.events")
    },
    {
      id: 3,
      to: "http://gdgcoimbra.xyz",
      name: t("menu.gdg")
    }
  ];

  return (
    <MainWrapper logo={logo} alt="GDG Kids" image={image} values={menuLinks}>
      <Title value={t("title")} />
      <Paragraph value={t("text")} />
      <Link
        to="https://github.us13.list-manage.com/subscribe?u=3f81ad81416bca071bb4b2eab&id=3f860243bf"
        target="_blank"
        rel="noreferrer"
        value="Newsletter"
      />
    </MainWrapper>
  );
}

export default withNamespaces()(Home);
