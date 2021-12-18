import React, { useEffect } from "react";
import type { NextPage } from "next";
import {
  Container,
  Content,
  StoreContainer,
  StorePageSub,
  StoreTitle,
} from "./styles/styles";
import Cards from "../common/Cards";
import Header from "../common/Header";
import Logo from "../common/Logo";
import Sections from "../common/Sections";
import { ConnectWalletButton } from "../common/ConnectWalletButton";
import Menu from "../common/BurgerMenu";
import PhishingMessage from "../common/PhishingBanner";
import Countdown from "../common/Countdown";

const StoreHome: NextPage = () => {
  const countdown = {
    date: new Date("2021-12-15T00:00:00.000Z"),
    endText: "PRIVATE SALE (#3) ENDED",
    startText: "PRIVATE SALE (#3) ENDS IN",
  };

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
          <Countdown {...countdown} />
          <Cards />
        </StoreContainer>
      </Content>
    </Container>
  );
};

export default StoreHome;
