import type { NextPage } from "next";

import {
  Container,
  Title,
  Subtitle,
  Left,
  Right,
  Top,
  Bottom,
  Ellipse1,
  Ellipse2,
} from "./styles";
import Image from "next/image";
import awardDesign from "../../public/images/award_design.png"
import awardDreamhack from "../../public/images/award_dreamhack.png"


const Awards: NextPage = () => {
  return (
    <>
      <Container>
        <Top>
        <Title>
          Audiences loves us! 
        </Title>
        <Subtitle>
            <a 
              href="https://www.youtube.com/watch?v=7lXChVSE3Bc"
            >
              Click here
            </a>
            to see our Dreamhack Atlanta aftermovie! 
        </Subtitle>
        </Top>
        <Bottom>
          <Left>
            <Image src={awardDreamhack} alt="Dreamhack Award" placeholder="blur"/>
          </Left>
          <Right>
            <Image src={awardDesign} alt="Design Award" placeholder="blur" />
          </Right>
        </Bottom>
      
      </Container>

      <Ellipse2 />
    </>
  );
};

export default Awards;
