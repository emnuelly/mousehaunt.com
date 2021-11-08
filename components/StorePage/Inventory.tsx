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
import { useRouter } from "next/router";
import Image from "next/image";

import coffin from "../../public/images/coffin-store.png";
import mht from "../../public/images/MHT.png";
import { addToWallet, getNetwork } from "../../utils/blockchain";
import { Button } from "../Button";
import { StoreContext, UserInfoDetailed } from "../../contexts/StoreContext";
import { ethers } from "ethers";
import StoreInventory from "../../pages/store/inventory";
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
      </Content>
    </Container>
  );
};

export default Inventory;
