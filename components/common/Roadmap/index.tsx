import type { NextPage } from 'next';

import {
  Container,
  Title,
  Subtitle,
  Text,
  Plan,
  Content,
  RoadmapImage,
  Upward,
  Downward,
} from './styles';
import Image from 'next/image';
import roadmapDesktop from "/public/images/other/roadmap.png";
import roadmapMobile from "/public/images/other/roadmap-mobile.png";

const Roadmap: NextPage = () => {
  return (
    <>
      <Container id="Roadmap">
        <Title>
          Company <b>ROADMAP</b>
        </Title>
        <Content>
          <RoadmapImage>
            <div className="mobile">
              <Image
                src={roadmapMobile}
                width="32px"
                height="660px"
                alt="Roadmap"
                placeholder="blur"
              />
            </div>
          </RoadmapImage>
          <Upward>
            <Plan className="first">
              <Text>
                <br />
                <br />
                Mouse Haunt: Lock and Load Game (PVE)
                <br />
                $MHT Staking
                <br />
                Legendary Ghost NFT pre-sale
                <br />
              </Text>
              <Subtitle>2022 Q1</Subtitle>
            </Plan>
            <Plan className="second">
              <Text>
                <br />
                <br />
                <br />
                Mouse Haunt: Castle Heist Game (PVP)
              </Text>

              <Subtitle>2022 Q3</Subtitle>
            </Plan>
          </Upward>
          <RoadmapImage>
            <div className="desktop">
              <Image
                src={roadmapDesktop}
                width="1200px"
                height="24px"
                alt="Roadmap"
                placeholder="blur"
              />
            </div>
          </RoadmapImage>
          <Downward>
            <Plan className="third">
              <Subtitle>2021 Q4</Subtitle>
              <Text>
                Pancake Swap Listing Dec 21st
                <br />
                $MHT Pre-Sale rounds (Whitelist)
                <br />
                Mouse Heroes Booster Sale
                <br />
                Marketplace
                <br />
              </Text>
            </Plan>
            <Plan className="fourth">
              <Subtitle>2022 Q2</Subtitle>
              <Text>
                Castle Land pre-sale
                <br />
                Mouse Haunt: Lock and Load Update
                <br />
              </Text>
            </Plan>
          </Downward>
        </Content>
      </Container>
    </>
  );
};

export default Roadmap;
