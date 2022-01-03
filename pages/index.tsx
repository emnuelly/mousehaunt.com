import type { NextPage } from 'next'
import Head from 'next/head'

import Awards from '../components/common/Awards'
import Bosses from '../components/common/Bosses'
import Footer from '../components/common/Footer'
import GhostHeroes from '../components/common/GhostHeroes'
import InnovativeGameplay from '../components/common/InnovativeGameplay'
import Landing from '../components/common/Landing'
import MHT from '../components/common/MHT'
import MouseHeroes from '../components/common/MouseHeroes'
import PhishingBanner from '../components/common/PhishingBanner'
import PoweredBy from '../components/common/PoweredBy'
import Realtime from '../components/common/Realtime'
import Roadmap from '../components/common/Roadmap'
import Ruler from '../components/common/Ruler'
import Team from '../components/common/Team'
import Welcome from '../components/common/Welcome'
import Whitelist from '../components/common/Whitelist'
import { Container, Content } from '../styles/Home'

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>Mouse Haunt</title>
    </Head>

    <Content>
      <PhishingBanner />
      <Landing />
      <Welcome />
      <MouseHeroes />
      <GhostHeroes />
      <Ruler />
      <Whitelist />
      <Ruler />
      <Realtime />
      <InnovativeGameplay />
      <Bosses />
      <MHT />
      <Awards />
      <Team />
      <Roadmap />
      <Ruler />
      <PoweredBy />
      <Ruler />
      <Footer />
    </Content>
  </Container>
)

export default Home
