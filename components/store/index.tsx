import React from "react";
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
            startText={"GENESIS EVENT STARTS IN"}
            endText={"GENESIS EVENT STARTED"}
            date={new Date("2021-12-23T01:00:00.000Z")}
          />
          <GenesisBooster />
        </StoreContainer>
      </Content>
    </Container>
  );
};

export default StoreHome;
