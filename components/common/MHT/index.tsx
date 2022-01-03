import { useContext } from 'react'

import type { NextPage } from 'next'
import Image from 'next/image'

import { StoreContext } from '../../../contexts/StoreContext'
import mht from '../../../public/images/other/MHT.png'
import { addToWallet } from '../../../utils/blockchain'
import config from '../../../utils/config'
import { Button } from '../Button'
import { Container, Left, Right, Title, Subtitle, Chest, Ellipse } from './styles'

const MHT: NextPage = () => {
  const { network } = useContext(StoreContext)

  return (
    <>
      <Container id='Token'>
        <Left>
          <Chest>
            <Image src={mht} width='540px' height='473.5px' alt='MHT' placeholder='blur' />
          </Chest>
        </Left>
        <Right>
          <Title>HAVE FUN AND EARN!</Title>
          <Subtitle>
            Tired of playing boring NFT games just to make a couple bucks?
            <br />
            Come to Mouse Haunt now, showcase your skills and have fun{' '}
            <a
              href={`https://bscscan.com/token/${config[network].MouseHauntToken.address}`}
              target='_blank'
              rel='noreferrer'
            >
              earning MHT!
            </a>
          </Subtitle>
          <Button onClick={() => addToWallet(network)}>ADD TO WALLET</Button>
        </Right>
      </Container>
      <Ellipse />
    </>
  )
}

export default MHT
