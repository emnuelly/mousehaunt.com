import Header from '../../../components/common/Header';
import Head from 'next/head';
import Ruler from '../../../components/common/Ruler';
import Footer from '../../../components/common/Footer';
import Sections from '../../../components/common/Sections';
import { Link } from '../../../components/common/Link';
import Logo from '../../../components/common/Logo';
import { sections } from '../../../utils/sections';
import {
  Container,
  HeaderContainerTitle,
  HeaderPageSubText,
  HeaderContainer,
  Ellipse,
  Content,
} from '../../../styles/Home';

interface Props {
  pageConfig: {
    title?: string;
    pageTitle?: string;
    subtitle?: string;
    titleSize?: React.CSSProperties | undefined;
    subtitleSize?: React.CSSProperties | undefined;
  };
  children: React.ReactNode;
}

const CustomHeader: React.FC<Props> = ({ pageConfig, children }, ...props) => {
  const { title, pageTitle, subtitle, titleSize, subtitleSize } = pageConfig;
  return (
    <>
      <Container>
        <Head>
          {pageTitle ? <title>{pageTitle}</title> : <title>Mouse Haunt</title>}
        </Head>
        <Header>
          <Logo />
          <Sections sections={sections} />
          <Link href="/store">PRIVATE SALE</Link>
        </Header>
        <HeaderContainer>
          <HeaderContainerTitle
            style={titleSize ? titleSize : styles.editHeaderTitle}
          >
            {title}
          </HeaderContainerTitle>

          {subtitle && (
            <HeaderPageSubText
              style={subtitleSize ? subtitleSize : styles.editHeaderSub}
            >
              {subtitle}
            </HeaderPageSubText>
          )}
        </HeaderContainer>
        <Ellipse style={styles.ellipsePosition} />
        <Content style={{ width: '90%' }}>{children}</Content>
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
export default CustomHeader;
