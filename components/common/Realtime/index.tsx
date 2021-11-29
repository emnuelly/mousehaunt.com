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
import { Link } from "../Link";
import rats from "../../../public/images/game-related/rats.png";
import hero from "../../../public/images/game-related/rat-5.png";

const Realtime: NextPage = () => {
  return (
    <>
      <Container>
        <Left>
          <Phone>
            <Image
              src={rats}
              width="512px"
              height="287px"
              alt="Rats"
              placeholder="blur"
            />
          </Phone>
          <Hero>
            <Image
              src={hero}
              width="227px"
              height="264px"
              alt="Hero"
              placeholder="blur"
            />
          </Hero>
        </Left>
        <Right>
          <Title>Realtime Multiplayer</Title>
          <Subtitle>
            Showcase your unique NFTs and your kickass skills in our action
            packed online multiplayer.
            <br />
            The better you are, the more rewards you get! Invite your friends
            and get rewards!
          </Subtitle>
          <Link
            href="https://twitter.com/intent/tweet?original_referer=mousehaunt.com&source=tweetbutton&text=Check+out+Mouse+Haunt%21+A+new+NFT+game+built+on+Unreal+5+%F0%9F%9A%80"
            target="_blank"
          >
            INVITE FRIENDS
          </Link>
        </Right>
      </Container>
      <Ellipse />
    </>
  );
};

export default Realtime;
