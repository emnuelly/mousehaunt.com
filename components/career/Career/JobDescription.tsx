import { useEffect } from 'react'

import { Link } from '../../common/Link'
import DisplayJobDescription from './DisplayJobDescription'
import HeaderJobInfo from './HeaderJobInfo'
import {
  JobTitle,
  JobDescriptionHeader,
  SectionTitle,
  SectionParagraph,
  ButtonStyle,
  DisplayButtons
} from './styles/jobDescriptionStyles'
import { Props } from './utils/jobListings.functions'

const JobDescription: React.FC<Props> = ({ job, goBack }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <JobTitle>
        {job.jobRole.role} {job.jobRole.extra}
      </JobTitle>
      <JobDescriptionHeader>
        <HeaderJobInfo jobListingHeader={job} />
      </JobDescriptionHeader>

      <SectionTitle>Job Description</SectionTitle>
      <SectionParagraph>
        <DisplayJobDescription paragraphs={job.jobDescription.paragraphs} needBreakLine />
      </SectionParagraph>

      <SectionTitle>Responsibilities</SectionTitle>
      <SectionParagraph>
        <DisplayJobDescription paragraphs={job.jobResponsibilities.responsibilities} />
      </SectionParagraph>
      <ul>
        <DisplayJobDescription bulletPoints={job.jobResponsibilities.bulletPoints} />
      </ul>

      <SectionTitle>Job Requirements</SectionTitle>
      <SectionParagraph>
        <DisplayJobDescription paragraphs={job.jobRequirements.paragraphs} />
      </SectionParagraph>
      <ul>
        <DisplayJobDescription bulletPoints={job.jobRequirements.bulletPoints} />
      </ul>

      <DisplayButtons>
        <a href={job.link} target='_blank' rel='noreferrer'>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link>APPLY NOW</Link>
        </a>
        <ButtonStyle onClick={() => goBack()}>GO BACK</ButtonStyle>
      </DisplayButtons>
    </>
  )
}

export default JobDescription
