import React from "react";
import type { NextPage } from "next";
import {
  Container,
  Content,
  StoreContainer,
  StorePageSub,
  StoreTitle,
} from "./styles";
import Cards from "../Cards";
import Header from "../Header";
import Logo from "../Logo";
import Sections from "../Sections";
import { ConnectWalletButton } from "../ConnectWalletButton";

const sections = [
  {
    title: "Store",
    to: "/store",
  },
  {
    title: "Inventory",
    to: "/inventory",
  },
];

const StoreHome: NextPage = () => {
  return (
    <Container>
      <Content>
        <StoreContainer>
          <Header>
            <Logo />
            <Sections sections={sections} />
            <ConnectWalletButton />
          </Header>
          <StoreTitle>SHOP</StoreTitle>
          <StorePageSub>
            Welcome to the Mouse Haunt Shop!
            <br />
            Here you will find the latest goods on this cheesy universe!
          </StorePageSub>
          <Cards />
        </StoreContainer>
      </Content>
    </Container>
  );
};

export default StoreHome;
