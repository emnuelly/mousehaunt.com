import type { NextPage } from "next";

import {
  Container,
  Header,
  Logo,
  Video,
  Phone,
  Sections,
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
import logo from "../../public/images/logo.png";
import google from "../../public/images/Google_Play.png";
import apple from "../../public/images/App_Store.png";
import windows from "../../public/images/Windows.png";

const Landing: NextPage = () => {
  const sections = [
    "About",
    "Gameplay",
    "Value Proposition",
    "Token",
    "Team",
    "Roadmap",
  ];
  return (
    <Container id="About">
      <Header>
        <Logo>
          <a href="#">
            <Image
              src={logo}
              width="90px"
              height="90px"
              alt="logo"
              priority
              placeholder="blur"
            />
          </a>
        </Logo>
        <Sections total={sections.length}>
          {sections.map((section) => (
            <a key={section} href={`#${section}`}>
              {section}
            </a>
          ))}
        </Sections>
        <Link
          href="https://sweepwidget.com/view/37247-hnmvxit9"
          target="_blank"
        >
          JOIN WHITELIST
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
              Collect NFTs, farm tokens, breed characters and build levels to
              earn money! Mouse Haunt is a kick ass play-to-earn universe.
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
};

export default Landing;
