import type { NextPage } from "next";

import {
  Container,
  Left,
  Right,
  Title,
  Subtitle,
  Hero,
  Phone,
  Ellipse,
} from "./styles";
import Image from "next/image";
import hero from "../../../public/images/game-related/hero-6.png";
import gameplay from "../../../public/images/game-related/gameplay-6.png";

const InnovativeGameplay: NextPage = () => {
  return (
    <>
      <Container>
        <Left>
          <Title>Innovative Gameplay</Title>
          <Subtitle>
            The ONLY multiplayer game where death is not the end! When a mouse
            dies it switches to the ghost team and continues to accumulate
            rewards.
            <br />
            The best action NFT game!
          </Subtitle>
        </Left>
        <Right>
          <Hero>
            <Image
              src={hero}
              width="227px"
              height="264px"
              alt="Hero"
              placeholder="blur"
            />
          </Hero>
          <Phone>
            <Image
              src={gameplay}
              width="512px"
              height="287px"
              alt="Gameplay"
              placeholder="blur"
            />
          </Phone>
        </Right>
      </Container>
      <Ellipse />
    </>
  );
};

export default InnovativeGameplay;
