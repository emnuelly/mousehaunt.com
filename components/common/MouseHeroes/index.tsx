import type { NextPage } from "next";

import {
  Container,
  Left,
  Right,
  Title,
  Subtitle,
  Hero,
  Ellipse,
} from "./styles";
import Image from "next/image";
import { Link } from "../Link";
import hero from "../../../public/images/game-related/hero.png";
import { SWEEPWIDGET_URL } from "../../../utils/sweepwidget";

const MouseHeroes: NextPage = () => {
  return (
    <Container id="ValueProposition">
      <Left>
        <Hero>
          <Image
            width="552.56px"
            height="487.51px"
            src={hero}
            alt="Hero"
            placeholder="blur"
          />
        </Hero>
      </Left>
      <Right>
        <Title>Mouse Heroes NFT</Title>
        <Subtitle>
          Collect the rarest characters with the best stats and skills!
          <br />
          Mouse heroes also have different abilities depending on their tail,
          weapon and hat!
          <br />
          Click the button to join our Whitelist!
        </Subtitle>
        <Link href="https://mousehaunt.com/store">
          JOIN GENESIS EVENT
        </Link>
      </Right>
      <Ellipse />
    </Container>
  );
};

export default MouseHeroes;
