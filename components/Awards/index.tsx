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
          Audience love us! 
        </Title>
        <Subtitle>
          
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
