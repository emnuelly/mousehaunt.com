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

const Roadmap: NextPage = () => {
  const roadmapDesktop = '/images/other/roadmap.png';
  const roadmapMobile = '/images/other/roadmap-mobile.png';
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
                Whitepaper and Website release
                <br />
                $MHT Pre-Sale rounds (Whitelist)
                <br />
                Pancake Swap Listing Dec 21st
                <br />
                Mouse Heroes Booster Sale
                <br />
                Staking Launch
              </Text>
              <Subtitle>2021 Q4</Subtitle>
            </Plan>
            <Plan className="second">
              <Text>
                <br />
                <br />
                <br />
                Castle Land pre-sale
                <br />
                More information coming soon!
              </Text>

              <Subtitle>2022 Q2</Subtitle>
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
              <Subtitle>2021 Q3</Subtitle>
              <Text>
                Migrating game to blockchain and upgrading to UE5
                <br />
                Growing staff and advisors
                <br />
                Seed round
                <br />
                Partnership development
                <br />
              </Text>
            </Plan>
            <Plan className="fourth">
              <Subtitle>2022 Q1</Subtitle>
              <Text>
                Mouse Haunt: Lock and Load play-to-earn launch
                <br />
                Legendary Ghost NFT pre-sale
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
