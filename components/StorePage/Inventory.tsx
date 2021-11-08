import React, { useContext, useEffect } from "react";
import type { NextPage } from "next";
import {
  Container,
  Content,
  StoreInventoryBody,
  StoreInventoryContainer,
  StorePageSub,
} from "./styles";
import Header from "../Header";
import Logo from "../Logo";
import Sections from "../Sections";
import { ConnectWalletButton } from "../ConnectWalletButton";
import Footer from "../Footer";
import Table from "../Table/Table";

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

const Inventory: NextPage = () => {
  return (
    <Container>
      <Content>
        <StoreInventoryContainer>
          <Header>
            <Logo />
            <Sections sections={sections} />
            <ConnectWalletButton />
          </Header>
          <StoreInventoryBody>
            <h1>Inventory</h1>
            <StorePageSub>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis
              mauris in vitae, scelerisque. Neque adipiscing sed tortor eu nulla
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
