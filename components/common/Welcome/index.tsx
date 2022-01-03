import type { NextPage } from 'next'
import Image from 'next/image'

import logo from '../../../public/images/other/logo.png'
import { Container, Title, Subtitle, Video, Logo, Ellipse1, Ellipse2 } from './styles'

const Welcome: NextPage = () => (
  <Container id='Gameplay'>
    <Title>
      Welcome to <b>MOUSE HAUNT</b>
    </Title>
    <Subtitle>
      In this revolutionary game, players can play as the heroes, <br />
      as the villains and as the architects of the castles.
      <br />
      <i>Built in Unreal Engine 5.</i>
    </Subtitle>
    <Video>
      <iframe
        width='806'
        height='428'
        style={{
          borderRadius: '13px',
          marginLeft: '-1px',
          marginTop: '-1px'
        }}
        src='https://www.youtube.com/embed/U85LIlTqACk?autoplay=0'
        title='Mouse Haunt'
        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:72px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/U85LIlTqACk?autoplay=0><img src=https://img.youtube.com/vi/U85LIlTqACk/hqdefault.jpg alt='Mouse Haunt'><span>▶</span></a>"
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </Video>
    <Logo>
      <Image src={logo} width='137px' height='137px' alt='Logo' placeholder='blur' />
    </Logo>
    <Ellipse1 />
    <Ellipse2 />
  </Container>
)

export default Welcome
