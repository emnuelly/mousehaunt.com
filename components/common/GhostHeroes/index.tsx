import type { NextPage } from 'next'
import Image from 'next/image'

import ghost from '../../../public/images/game-related/ghost-4.png'
import { Container, Left, Right, Title, Subtitle, Phone, Ellipse } from './styles'

const GhostHeroes: NextPage = () => (
  <Container>
    <Left>
      <Title>Ghost Villains NFT</Title>
      <Subtitle>
        When you die in a match, it’s not over, you get to play as a powerful ghost!
        <br />
        NFTs with distinct abilities coming soon.
      </Subtitle>
    </Left>
    <Right>
      <Phone>
        <Image src={ghost} alt='Ghost' placeholder='blur' />
      </Phone>
    </Right>
    <Ellipse />
  </Container>
)

export default GhostHeroes
