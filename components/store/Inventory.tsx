import React from "react";
import type { NextPage } from "next";
import {
  Container,
  Content,
  StoreInventoryBody,
  StoreInventoryContainer,
  StorePageSub,
} from "./styles/styles";
import Header from "../common/HeaderDefault/HeaderDefault";
import Logo from "../common/Logo";
import Sections from "../common/Sections/Sections";
import { ConnectWalletButton } from "../common/ConnectWalletButton";
import Footer from "../common/Footer";
import Table from "../common/Table/Table";
import PhishingMessage from "../common/PhishingBanner";
import Countdown from "../common/Countdown";

const Inventory: NextPage = () => {
  return (
    <Container>
      <Content>
        <StoreInventoryContainer>
          <PhishingMessage />

          <Header>
            <Logo />
            <Sections />
            <ConnectWalletButton />
          </Header>
          <StoreInventoryBody>
            <h1>Inventory</h1>
            <StorePageSub>
              <div>
                Welcome to the Inventory! Here you can see all the cheesy goods
                you own from the Mouse Haunt Universe! 🧀🧀🧀
              </div>
            </StorePageSub>
            <Table />
          </StoreInventoryBody>
          <Footer />
        </StoreInventoryContainer>
      </Content>
    </Container>
  );
};

export default Inventory;
