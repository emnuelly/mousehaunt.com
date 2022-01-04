import { useEffect, useState } from 'react'

import { BiRightArrowAlt } from 'react-icons/bi'
import { FiBriefcase } from 'react-icons/fi'
import { RiMapPinLine } from 'react-icons/ri'

import JobDescription from './JobDescription'
import {
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
  IconButton
} from './styles/styles'
import { jobListings } from './utils/jobListings.functions'

const CareerPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [jobObject, setJobObject] = useState<any>({})
  const [displayJobSection, setDisplayJobSection] = useState(true)

  const returnToCareerPage = () => setDisplayJobSection(true)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [displayJobSection])

  const displayJobPostings = () => (
    <CareerContainer>
      <CareerTitle>Careers</CareerTitle>
      <CareerPageSub>
        <CareerPageSubText>
          Our team is filled with people that are humans and are very good at being humans. We do
          all sorts of things that human do, like eating, walking in the park.
        </CareerPageSubText>
        <div style={{ marginBottom: '-20px' }} />
        <CareerPageSubText>
          We are looking for humans that also are, in fact, humans, and also do humans stuff. If you
          feel that you are really a human and want to be a part of our team, check ot our positions
          below!
        </CareerPageSubText>
      </CareerPageSub>
    </CareerContainer>
  )

  const displayPostings = () => {
    const styleTitles = { color: 'white', padding: '3px' }
    return jobListings.map((event, key) => (
      // eslint-disable-next-line react/no-array-index-key
      <Cards key={key}>
        <CardsTitle>{event.jobRole.role}</CardsTitle>
        <CardsBody>
          <CardsItems>
            <IconStyle>
              <FiBriefcase />
              <div style={styleTitles}>{event.jobInfo.type}</div>
            </IconStyle>
          </CardsItems>
          <CardsItems>
            <IconStyle>
              <RiMapPinLine />
              <div style={styleTitles}>{event.jobInfo.location}</div>
            </IconStyle>
          </CardsItems>
        </CardsBody>

        <CardsButton
          onClick={() => {
            setJobObject(event)
            setDisplayJobSection(false)
          }}
        >
          <IconButton>
            More Details
            <BiRightArrowAlt />
          </IconButton>
        </CardsButton>
      </Cards>
    ))
  }

  return (
    <>
      <Content>
        {displayJobSection ? (
          <>
            {displayJobPostings()}
            <CardsColumn>{displayPostings()}</CardsColumn>
          </>
        ) : (
          <JobDescription job={jobObject} goBack={returnToCareerPage} />
        )}
      </Content>
    </>
  )
}

export default CareerPage
