import type { NextPage } from "next";
import Head from "next/head";

import { Container, Content } from "../styles/Home";
import Landing from "../components/common/Landing";
import Welcome from "../components/common/Welcome";
import MouseHeroes from "../components/common/MouseHeroes";
import GhostHeroes from "../components/common/GhostHeroes";
import Whitelist from "../components/common/Whitelist";
import Realtime from "../components/common/Realtime";
import InnovativeGameplay from "../components/common/InnovativeGameplay";
import Bosses from "../components/common/Bosses";
import MHT from "../components/common/MHT";
import Awards from "../components/common/Awards";
import Team from "../components/common/Team";
import PoweredBy from "../components/common/PoweredBy";
import Roadmap from "../components/common/Roadmap";
import Footer from "../components/common/Footer";
import PhishingBanner from '../components/common/PhishingBanner'
import { Ruler } from "../components/common/Ruler";

const Home: NextPage = () => {
  return (
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
  );
};

export default Home;
