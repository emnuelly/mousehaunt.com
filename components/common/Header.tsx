import styled from "styled-components";
import React from "react";
import {Ellipse1} from "./Landing/styles";
import Logo from "./Logo";
import Sections from "./Sections";
import Menu from "./BurgerMenu";

export const ContainerHeader = styled.section`
  top: 0px;
  left: 0px;
  right: 0px;
  width: 90%;
  
  margin: auto;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 60px;
    background: #0f0e23;
    padding: 16px;
    position: fixed;
    z-index: 1;

  }
`;

export const Header = styled.header`
  padding-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 20px;
  line-height: 23px;

  @media only screen and (max-width: 600px) {
    height: 60px;
    padding: 16px;
     width: 100vw;
     position: fixed;
     z-index: 1;
  }

  a,
  button {
    margin-left: auto;
    display: flex;
  }
`;

function HeaderDefault(props: any) {
    const {option} = props;

    return (
        <ContainerHeader>
            <Header>
                <Ellipse1/>
                <Logo />
                <Sections />
                <Menu />
            </Header>
        </ContainerHeader>
    );
};

export default HeaderDefault;
