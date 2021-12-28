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
  ContainerButton
} from "./styles";
import Header from "../Header";
import Logo from "../Logo";
import Sections from "../Sections";
import Menu from "../BurgerMenu";
import { Link as LinkButton } from "../Link";
import {
  Card,
  Image,
  InfoContainer,
  InfoContainerValue,
  InfoContainerTitle,
  InfoValue,
  InfoBadgeValue,
  InfoSubtitle,
  InfoDollar,
  InfoTitle,
} from "../CardShop/styles";


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
            <Card>
              <Image/>
              <InfoContainer>
                <InfoContainerTitle>
                  <InfoTitle>
                    Amazing Digital ART
                  </InfoTitle>
                  <InfoSubtitle>
                    posted 3 days ago
                  </InfoSubtitle>
                </InfoContainerTitle>
                <InfoContainerValue>
                  <InfoValue>
                    0,45 $MHT
                  </InfoValue>
                  <InfoDollar>
                    8,324 USD
                  </InfoDollar>
                </InfoContainerValue>
              </InfoContainer>
            </Card>
          </Right>
        </BodyContent>
      </Body>
    </Container>
);
export default Landing;
