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
          <Countdown
            startText={"$MHT CLAIMABLE ON DECEMBER 21ST 4PM UTC"}
            endText={"$MHT CLAIMABLE ON DECEMBER 21ST 4PM UTC"}
            date={new Date("2021-12-21T16:00:00.000Z")}
          />
        </StoreContainer>
      </Content>
    </Container>
  );
};

export default StoreHome;
