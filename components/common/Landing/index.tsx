import React from "react";

import {
  Container,
  Body,
  Title,
  Subtitle,
  BodyContent,
  Left,
  Right,
  ButtonDark,
  ContainerButton,
    Ellipse1
} from "./styles";
import Header from "../Header";
import Logo from "../Logo";
import Sections from "../Sections";
import Menu from "../BurgerMenu";
import { Link as LinkButton } from "../Link";
import CardShop from "../CardShop";


const Landing: React.FC = () => (
    <Container id="About">
      <Header>
        <Logo />
        <Sections />
        <Menu />
      </Header>
      <Body>
        <BodyContent>
          <Left>
            <Title>
              Buy and sell <text>digital art</text>  in the world of nft
            </Title>
            <Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis mauris in vitae, scelerisque. Neque adipiscing sed tortor eu nulla
            </Subtitle>
            <ContainerButton>
              <LinkButton className="right" href="/store">
                Explore now
              </LinkButton>
              <ButtonDark>
                Learn More
              </ButtonDark>
            </ContainerButton>
          </Left>
          <Right>
            <CardShop/>
          </Right>
        </BodyContent>
      </Body>
    </Container>
);
export default Landing;
