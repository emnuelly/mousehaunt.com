import React, { useContext, useEffect } from "react";
import type { NextPage } from "next";
import {
  Container,
  Content,
  StoreSuccessBody,
  StoreSuccessContainer,
  StorePageSub,
} from "./styles";
import Header from "../Header";
import Logo from "../Logo";
import Sections from "../Sections";
import { ConnectWalletButton } from "../ConnectWalletButton";
import Footer from "../Footer";
import StoreInventory from "../../pages/store/inventory";

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
      {/* <Content>
        <StoreSuccessContainer>
          <Header>
            <Logo />
            <Sections sections={sections} />
            <ConnectWalletButton />
          </Header>
          <StoreSuccessBody>
            <StoreInventory>Inventory</StoreInventory>
            <StorePageSub>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis
              mauris in vitae, scelerisque. Neque adipiscing sed tortor eu nulla
            </StorePageSub>

             <Table /> 
          </StoreSuccessBody>
          <Footer />
        </StoreSuccessContainer>
      </Content> */}
    </Container>
  );
};

export default Inventory;
