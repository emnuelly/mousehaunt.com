import type { NextPage } from 'next'
import Image from 'next/image'

import awardDesign from '../../../public/images/other/award_design.png'
import awardDreamhack from '../../../public/images/other/award_dreamhack.png'
import { Container, Title, Subtitle, Left, Right, Top, Bottom, Ellipse2 } from './styles'

const Awards: NextPage = () => (
  <>
    <Container>
      <Top>
        <Title>Audiences love us!</Title>
        <Subtitle>
          <a href='https://www.youtube.com/watch?v=7lXChVSE3Bc'>Click here ‎</a>
          to see our Dreamhack Atlanta aftermovie!
        </Subtitle>
      </Top>
      <Bottom>
        <Left>
          <Image src={awardDreamhack} alt='Dreamhack Award' placeholder='blur' />
        </Left>
        <Right>
          <Image src={awardDesign} alt='Design Award' placeholder='blur' />
        </Right>
      </Bottom>
    </Container>

    <Ellipse2 />
  </>
)

export default Awards
