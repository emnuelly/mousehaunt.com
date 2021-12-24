import React, { useState } from "react";
import type { NextPage } from "next";
import {
  Container,
  Content,
  StoreContainer,
  StorePageSub,
  StoreTitle,
} from "./styles/styles";
import Header from "../common/Header";
import Logo from "../common/Logo";
import Sections from "../common/Sections";
import { ConnectWalletButton } from "../common/ConnectWalletButton";
import Menu from "../common/BurgerMenu";
import PhishingMessage from "../common/PhishingBanner";
import GenesisBooster from "../common/GenesisBooster";

const StoreHome: NextPage = () => {
  return (
    <Container>
      <Content>
        <PhishingMessage />
        <StoreContainer>
          <Header>
            <Logo />
            <Sections />
            <ConnectWalletButton />
            <Menu>
              <div>
                <ConnectWalletButton />
              </div>
            </Menu>
          </Header>
          <StoreTitle>SHOP</StoreTitle>
          <StorePageSub>Welcome to the Mouse Haunt Shop!</StorePageSub>
          <GenesisBooster />
        </StoreContainer>
      </Content>
    </Container>
  );
};

export default StoreHome;
