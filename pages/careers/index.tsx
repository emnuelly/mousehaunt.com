import type { NextPage } from 'next'

import Career from '../../components/career/Career'
import Menu from '../../components/common/BurgerMenu'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import { Link } from '../../components/common/Link'
import Logo from '../../components/common/Logo'
import Ruler from '../../components/common/Ruler'
import Sections from '../../components/common/Sections'
import { Container } from '../../styles/Home'

const CareerPage: NextPage = () => (
  <>
    <Container>
      <Header>
        <Logo />
        <Sections />
        <Menu>
          <div>
            <Link href='/store'>PRIVATE SALE</Link>
          </div>
        </Menu>
      </Header>
      <Career />
      <Ruler />
      <Footer />
    </Container>
  </>
)

export default CareerPage
