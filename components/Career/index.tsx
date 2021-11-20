import Links from 'next/link';
import Header from '../Header';
import Logo from '../Logo';
import { useState, useEffect } from 'react';
import Sections from '../Sections';
import Footer from '../Footer';
import jobListings from './jobListings.functions';
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

interface Props {
  location: string;
  idVal: string | string[] | undefined;
}

const CareerPage: React.FC<Props> = ({ location, idVal }: Props) => {
  const [jobObject, setJobObject] = useState<any>({});
  const displayCareerPage = () =>
    location === 'job-posting' ? (
      <>
        {displayJobPostings()}
        <CardsColumn>{displayPostings()}</CardsColumn>
      </>
    ) : null;
  const displayJobListing = () =>
    location === 'job-listing' ? triggerJobListings() : null;

  const triggerJobListings = () => {
    const errorMessage = (
      <div key={Number(idVal)}>Sorry, something went wrong.</div>
    );

    if (!jobObject.id) {
      return errorMessage;
    }
    return displayJobListingsInfo();
  };

  const displayJobListingsInfo = () => {
    return jobObject?.jobInfo?.role;
  };

  const getValues = () => {
    const value = jobListings;
    const paramId = Number(idVal);

    for (let i in value) {
      if (value[i].id === paramId) {
        return setJobObject(value[i]);
      }
    }
  };

  useEffect(() => {
    getValues();
  });

  const displayJobPostings = () => {
    return (
      <CareerContainer>
        <CareerTitle>Career</CareerTitle>
        <CareerPageSub>
          <CareerPageSubText>
            Our team is filled with people that are humans and are very good at
            being humans. We do all sorts of things that human do, like eating,
            walking in the park.
          </CareerPageSubText>
          <CareerPageSubText>
            We are looking for humans that also are, in fact, humans, and also
            do humans stuff. If you feel that you are really a human and want to
            be a part of our team, check ot our positions below!
          </CareerPageSubText>
        </CareerPageSub>
      </CareerContainer>
    );
  };
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

        <Links href={`/careers/${event.id}`}>
          <CardsButton>
            <IconButton>
              More Details
              <BiRightArrowAlt />
            </IconButton>
          </CardsButton>
        </Links>
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

          {displayCareerPage() || displayJobListing()}
          <Ruler />
          <Footer />
        </Content>
      </Container>
    </>
  );
};

export default CareerPage;
