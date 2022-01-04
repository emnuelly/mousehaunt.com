import type { NextPage } from 'next';
import Career from '../../components/career/Career';
import Header from '../../components/common/Header';
import Ruler from '../../components/common/Ruler';
import Footer from '../../components/common/Footer';
import Sections from '../../components/common/Sections/Sections';
import { Link } from '../../components/common/Link';
import Logo from '../../components/common/Logo';
import { Container } from '../../styles/Home';
import Menu from '../../components/common/BurgerMenu';

const CareerPage: NextPage = () => {
  return (
    <>
      <Container>
        <Header>
          <Logo />
          <Sections />
          <Menu>
            <div>
              <Link href="/store">PRIVATE SALE</Link>
            </div>
          </Menu>
        </Header>
        <Career />
        <Ruler />
        <Footer />
      </Container>
    </>
  );
};

export default CareerPage;
