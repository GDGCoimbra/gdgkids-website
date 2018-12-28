import React, { Component } from "react";
import MainWrapper from "../design-system/organisms/MainWrapper";
import Title from "../design-system/atoms/Title";
import Paragraph from "../design-system/atoms/Paragraph";
import Link from "../design-system/atoms/Link";
import logo from "../images/gdgkids-logo.svg";
import image from "../images/jelleke-vanooteghem-554406-unsplash.jpg";

const menuLinks = [
  {
    id: 1,
    to: "http://gdgcoimbra.xyz/events",
    name: "Eventos"
  },
  {
    id: 2,
    to: "http://gdgcoimbra.xyz",
    name: "GDG Coimbra"
  }
];

export default class extends Component {
  render() {
    return (
      <MainWrapper logo={logo} alt="GDG Kids" image={image} values={menuLinks}>
        <Title value="Atividades a pensar nos mais pequenos, que pretende mostrar que nunca é cedo demais para aprender como funciona o mundo da tecnologia." />
        <Paragraph value="Mentes mais jovens apreendem muito mais facilmente matérias técnicas e o GDG Kids pretende mostrar que a informática não é nenhum vilão de banda desenhada e que na realidade está mais acessível do que se possa pensar. Temos a certeza que no final das atividades, as crianças se irão sentir verdadeiros heróis!" />
        <Link
          to="https://github.us13.list-manage.com/subscribe?u=3f81ad81416bca071bb4b2eab&id=3f860243bf"
          target="_blank"
          value="Newsletter"
        />
      </MainWrapper>
    );
  }
}
