import React from 'react';

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
  DiscordButton,
} from './styles';

import Image from 'next/image';
import telegram from '../../../public/images/other/button_telegram.png';
import medium from '../../../public/images/other/button_medium.png';
import twitter from '../../../public/images/other/button_twitter.png';
import discord from '../../../public/images/other/button_discord.png';
import Header from '../Header';
import Logo from '../Logo';
import Sections from '../Sections';
import Menu from '../BurgerMenu';

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
            <DiscordButton>
              <a
                href="http://mht.gg/discord-hero"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  src={discord}
                  width="222px"
                  height="68px"
                  alt="Join us on Discord"
                  placeholder="blur"
                  priority
                />
              </a>
            </DiscordButton>
            <div>
              <span>
                <a
                  href="http://mht.gg/discord-hero"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    src={twitter}
                    width="148px"
                    height="45px"
                    alt="Follow us on Twitter"
                    placeholder="blur"
                    priority
                  />
                </a>
              </span>
              <span>
                <a
                  href="http://mht.gg/discord-hero"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    src={telegram}
                    width="148px"
                    height="45px"
                    alt="Join us on Telegram"
                    placeholder="blur"
                    priority
                  />
                </a>
              </span>
              <span>
                <a
                  href="http://mht.gg/discord-hero"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    src={medium}
                    width="148px"
                    height="45px"
                    alt="Follow us on Telegram"
                    placeholder="blur"
                    priority
                  />
                </a>
              </span>
            </div>
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
              poster="/images/game-related/landing-poster.jpeg"
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
