import type { NextPage } from 'next';
import Header from '../../components/common/Header';
import Ruler from '../../components/common/Ruler';
import Footer from '../../components/common/Footer';
import Sections from '../../components/common/Sections';
import { Link } from '../../components/common/Link';
import Logo from '../../components/common/Logo';
import { sections } from '../../utils/sections';
import {
  Container,
  HeaderContainerTitle,
  HeaderPageSubText,
  HeaderContainer,
  Ellipse,
  Content,
} from '../../styles/Home';
import MarketPlace from '../../components/marketplace';

const MarketPlacePage: NextPage = () => {
  const headerPage = () => {
    return (
      <HeaderContainer>
        <HeaderContainerTitle style={styles.editHeaderTitle}>
          NFT MarketPlace
        </HeaderContainerTitle>
        <HeaderPageSubText style={styles.editHeaderSub}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis mauris in
          vitae, scelerisque. Neque adipiscing sed tortor eu nulla
        </HeaderPageSubText>
      </HeaderContainer>
    );
  };
  return (
    <>
      <Container>
        <Header>
          <Logo />
          <Sections sections={sections} />
          <Link href="/store">PRIVATE SALE</Link>
        </Header>
        {headerPage()}
        <Ellipse style={styles.ellipsePosition} />
        <Content style={{ width: '90%' }}>
          <MarketPlace />
        </Content>
        <Ruler />
        <Footer />
      </Container>
    </>
  );
};

const styles = {
  editHeaderTitle: {
    fontSize: '48px',
    marginTop: ' -2%',
  },
  ellipsePosition: {
    width: '558.55px',
    height: '558.55px',
    left: '100.08px',
    top: '207.56px',
  },
  editHeaderSub: {
    fontSize: '18px',
    width: '45%',
    marginTop: '-20px',
  },
};
export default MarketPlacePage;
