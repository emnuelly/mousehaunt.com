import type { NextPage } from "next";
import Head from "next/head";

import { Container, Content, EllipseBlue, EllipsePink, ImageBackground} from "../styles/Home";
import Landing from "../components/common/Landing";
import Footer from "../components/common/Footer";
import PhishingBanner from '../components/common/PhishingBanner'
import PopularCollection from "../components/common/PopularCollection";
import TrendingProduct from "../components/common/TrendingProduct";
import RemainConnected from "../components/common/RemainConnected";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Mouse Haunt</title>
      </Head>

      <Content>
        {/*<PhishingBanner />*/}
        <Landing />
        <PopularCollection />
          <EllipseBlue/>
          <TrendingProduct/>
          <TrendingProduct/>
          <EllipsePink/>
          <RemainConnected/>
        <Footer />
          <ImageBackground/>
      </Content>
    </Container>
  );
};

export default Home;
