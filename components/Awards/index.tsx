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
          Audiances love us!
        </Title>
        <Subtitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
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
