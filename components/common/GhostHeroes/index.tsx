import type { NextPage } from "next";

import {
  Container,
  Left,
  Right,
  Title,
  Subtitle,
  Phone,
  Ellipse,
} from "./styles";
import Image from "next/image";
import ghost from "../../../public/images/game-related/ghost-4.png";

const GhostHeroes: NextPage = () => {
  return (
    <Container>
      <Left>
        <Title>Ghost Villains NFT</Title>
        <Subtitle>
          When you die in a match, it’s not over, you get to play as a powerful
          ghost!
          <br />
          NFTs with distinct abilities coming soon.
        </Subtitle>
      </Left>
      <Right>
        <Phone>
          <Image src={ghost} alt="Ghost" placeholder="blur" />
        </Phone>
      </Right>
      <Ellipse />
    </Container>
  );
};

export default GhostHeroes;
