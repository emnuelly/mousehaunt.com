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
import hero from "../../public/images/hero.png";

const MouseHeroes: NextPage = () => {
  return (
    <Container id="Value Proposition">
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
        <Link
          href="https://sweepwidget.com/view/37247-hnmvxit9"
          target="_blank"
        >
          JOIN WHITELIST
        </Link>
      </Right>
      <Ellipse />
    </Container>
  );
};

export default MouseHeroes;
