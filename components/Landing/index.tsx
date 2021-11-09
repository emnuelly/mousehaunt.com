import React from "react";

import {
  Container,
  Video,
  Phone,
  Body,
  Title,
  Subtitle,
  Stores,
  BodyContent,
  Left,
  Right,
} from "./styles";
import { Link } from "../Link";
import Image from "next/image";
import google from "../../public/images/Google_Play.png";
import apple from "../../public/images/App_Store.png";
import windows from "../../public/images/Windows.png";
import Header from "../Header";
import Logo from "../Logo";
import Sections from "../Sections";

const sections = [
  { title: "About", to: "#About" },
  { title: "Gameplay", to: "#Gameplay" },
  { title: "Value Proposition", to: "Value Proposition" },
  { title: "Token", to: "Token" },
  { title: "Team", to: "Team" },
  { title: "Roadmap", to: "Roadmap" },
];

interface Props {
  location: string;
  pageHeaders?: string[] | undefined;
}

const Landing: React.FC = () => (
  <Container id="About">
    <Header>
      <Logo />
      <Sections sections={sections}></Sections>
      <Link href="/store" target="_blank">
        STORE
      </Link>
    </Header>
    <Body>
      <BodyContent>
        <Left>
          <Title>
            MOUSE
            <br />
            HAUNT
          </Title>
          <Subtitle>
            Collect NFTs, farm tokens, breed characters and build levels to earn
            money! Mouse Haunt is a kick ass play-to-earn universe.
            <br />
            Here, fun comes first. Play on!
          </Subtitle>
          <Stores>
            <Link href="https://whitepaper.mousehaunt.com" target="_blank">
              WHITEPAPER
            </Link>

            <div>
              <span>
                <Image
                  src={google}
                  width="148px"
                  height="45px"
                  alt="Get it on Google Play"
                  placeholder="blur"
                  priority
                />
              </span>
              <span>
                <Image
                  src={apple}
                  width="148px"
                  height="45px"
                  alt="Download on the App Store"
                  placeholder="blur"
                  priority
                />
              </span>
              <span>
                <Image
                  src={windows}
                  width="148px"
                  height="45px"
                  alt="Available on Windows"
                  placeholder="blur"
                  priority
                />
              </span>
            </div>
            <small>
              <i>Coming soon</i>
            </small>
          </Stores>
        </Left>
        <Right>
          <Video>
            <Phone />
            <video
              loop
              muted
              autoPlay
              src="https://assets.mousehaunt.com/videos/LandingPage.mp4"
              poster="/images/landing-poster.webp"
              width="600px"
              height="293px"
            />
          </Video>
        </Right>
      </BodyContent>
    </Body>
  </Container>
);
export default Landing;
