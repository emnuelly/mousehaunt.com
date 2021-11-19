import type { NextPage } from 'next';
import Header from '../Header';
import Logo from '../Logo';
import Sections from '../Sections';
import Footer from '../Footer';
import { BiRightArrowAlt } from 'react-icons/bi';
import { RiMapPinLine } from 'react-icons/ri';
import { FiBriefcase } from 'react-icons/fi';
import {
  Container,
  Content,
  CareerContainer,
  CareerTitle,
  CareerPageSub,
  CareerPageSubText,
  CardsColumn,
  Cards,
  CardsBody,
  CardsItems,
  CardsTitle,
  CardsButton,
  IconStyle,
  IconButton,
} from './styles';
import { Link } from '../Link';
import { Ruler } from '../Ruler';
import { sections, jobPostings } from './utils.functions';

const CareerPage: NextPage = () => {
  const displayPostings = () => {
    return jobPostings.map((event, key) => (
      <Cards key={key}>
        <CardsTitle>{event.name}</CardsTitle>
        <CardsBody>
          <CardsItems>
            <IconStyle>
              <FiBriefcase />
              <div style={{ color: 'white', padding: '3px' }}>{event.type}</div>
            </IconStyle>
          </CardsItems>
          <CardsItems>
            <IconStyle>
              <RiMapPinLine />
              <div style={{ color: 'white', padding: '3px' }}>
                {event.location}
              </div>
            </IconStyle>
          </CardsItems>
        </CardsBody>

        <CardsButton
          onClick={() => alert('You are trying to hire a ' + event.name)}
        >
          <IconButton>
            More Details
            <BiRightArrowAlt />
          </IconButton>
        </CardsButton>
      </Cards>
    ));
  };

  return (
    <>
      <Container>
        <Content>
          <Header>
            <Logo />
            <Sections sections={sections} />
            <Link href="/store">PRIVATE SALE</Link>
          </Header>
          <CareerContainer>
            <CareerTitle>Career</CareerTitle>
            <CareerPageSub>
              <CareerPageSubText>
                Our team is filled with people that are humans and are very good
                at being humans. We do all sorts of things that human do, like
                eating, walking in the park.
              </CareerPageSubText>
              <CareerPageSubText>
                We are looking for humans that also are, in fact, humans, and
                also do humans stuff. If you feel that you are really a human
                and want to be a part of our team, check ot our positions below!
              </CareerPageSubText>
            </CareerPageSub>
          </CareerContainer>
          <CardsColumn>{displayPostings()}</CardsColumn>
          <Ruler />
          <Footer />
        </Content>
      </Container>
    </>
  );
};

export default CareerPage;
