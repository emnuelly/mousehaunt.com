import React, { useContext } from "react";

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
    Ellipse1,
    EllipseCenter,
    CardStyle
} from "./styles";
import Header from "../Header";
import Logo from "../Logo";
import Sections from "../Sections";
import Menu from "../BurgerMenu";
import { Link as LinkButton } from "../Link";
import CardShop from "../CardShop";
import { OrdersContext } from "../../../contexts/OrdersContext";


const Landing: React.FC = () => { 
  
  const { heroOrders } = useContext(OrdersContext);

  console.log(heroOrders);

  return (
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
              <LinkButton className="right" href="/marketplace">
                Explore now
              </LinkButton>
              <ButtonDark>
                Learn More
              </ButtonDark>
            </ContainerButton>
          </Left>
          <Right>
            {heroOrders.map((current) => {
              return (
                <CardStyle key={current.id}>
                  <CardShop order={current}/>
                </CardStyle>
              )
            })}
          </Right>
        </BodyContent>
      </Body>
    </Container>
  )
};
export default Landing;
