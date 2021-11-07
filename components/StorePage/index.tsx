import type { NextPage } from "next";
import {
  Container,
  Content,
  StoreContainer,
  StorePageSub,
  StoreTitle,
} from "./styles";
import Card from "../Card/Card";
import Header from "../Header";
import Logo from "../Logo";
import Sections from "../Sections";
import { ConnectWalletButton } from "../ConnectWalletButton";

const sections = ["Store", "Inventory"];

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
          <Card />
        </StoreContainer>
      </Content>
    </Container>
  );
};

export default StoreHome;
