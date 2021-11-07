import type { NextPage } from "next";
import Head from "next/head";

import { Container, Content } from "../styles/Home";
import Landing from "../components/Landing";
import Welcome from "../components/Welcome";
import MouseHeroes from "../components/MouseHeroes";
import GhostHeroes from "../components/GhostHeroes";
import Whitelist from "../components/Whitelist";
import Realtime from "../components/Realtime";
import InnovativeGameplay from "../components/InnovativeGameplay";
import Bosses from "../components/Bosses";
import MHT from "../components/MHT";
import Awards from "../components/Awards";
import Team from "../components/Team";
import PoweredBy from "../components/PoweredBy";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";
import { Ruler } from "../components/Ruler";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Mouse Haunt</title>
      </Head>

      <Content>
        <Landing location={"landingPage"} />
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
