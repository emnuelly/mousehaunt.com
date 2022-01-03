import { useState } from 'react'

import type { NextPage } from 'next'
import Image from 'next/image'
import { BiRightArrowAlt } from 'react-icons/bi'

import genesisEventMobile from '../../../public/images/other/genesis-event-mobile.png'
import genesisEvent from '../../../public/images/other/genesis-event.png'
import CardAmount from '../Cards/CardAmount'
import { CardSubtitle, IconStyle } from '../Cards/styles'
import Countdown from '../Countdown'
import Footer from '../Footer'
import { Container, GenesisContainer, Overlay, ImageContainer } from './styles'

const GenesisBooster: NextPage = () => {
  const [hasEnded, setHasEnded] = useState(false)

  const messages = [
    'Legendary drop rate: 1.25%',
    'Epic drop rate: 10%',
    'Rare drop rate: 31.25%',
    'Common drop rate: 57.5%'
  ]
  return (
    <>
      <Container>
        <Countdown
          startText='GENESIS EVENT ENDS IN'
          endText='GENESIS EVENT ENDED'
          date={new Date('2021-12-25T16:00:00.000Z')}
          setHasEnded={setHasEnded}
        />
        <GenesisContainer>
          <ImageContainer>
            <div className='desktop'>
              <Image src={genesisEvent} alt='Genesis Event' placeholder='blur' />
            </div>
            <div className='mobile'>
              <Image src={genesisEventMobile} alt='Genesis Event' placeholder='blur' />
            </div>
          </ImageContainer>
          <Overlay>
            <h1>
              GENESIS
              <br />
              BOOSTER
            </h1>

            <CardSubtitle>
              <ul>
                {messages.map((text, i) =>
                  text ? (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={i}>
                      <IconStyle>
                        <BiRightArrowAlt />
                      </IconStyle>
                      {text}
                    </li>
                  ) : (
                    // eslint-disable-next-line react/no-array-index-key
                    <br key={i} />
                  )
                )}
              </ul>
            </CardSubtitle>
            {hasEnded ? null : <CardAmount />}
          </Overlay>
        </GenesisContainer>
      </Container>
      <Footer />
    </>
  )
}

export default GenesisBooster
