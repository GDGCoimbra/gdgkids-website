import React, { Component } from "react";
import MainWrapper from "../design-system/organisms/MainWrapper";
import Title from "../design-system/atoms/Title";
import Paragraph from "../design-system/atoms/Paragraph";
import Button from "../design-system/atoms/Button";
import logo from "../images/gdgkids-logo.svg";
import image from "../images/jelleke-vanooteghem-554406-unsplash.jpg";

export default class extends Component {
  render() {
    return (
      <MainWrapper logo={logo} alt="GDG Kids" image={image}>
        <Title value="Atividades a pensar nos mais pequenos, que pretende mostrar que nunca é cedo demais para aprender como funciona o mundo da tecnologia." />
        <Paragraph value="Mentes mais jovens apreendem muito mais facilmente matérias técnicas e o GDG Kids pretende mostrar que a informática não é nenhum vilão de banda desenhada e que na realidade está mais acessível do que se possa pensar. Temos a certeza que no final das atividades, as crianças se irão sentir verdadeiros heróis!" />
        <Button
          value="Newsletter"
          onClick={() => {
            console.log("newsletter click");
          }}
        />
      </MainWrapper>
    );
  }
}