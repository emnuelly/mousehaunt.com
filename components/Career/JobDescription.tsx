import {
  JobTitle,
  JobDescriptionHeader,
  JobDescriptionText,
  IconStyle,
  IconPadding,
  IconTextSub,
  SectionTitle,
  SectionParagraph,
  SectionBullet,
  ButtonStyle,
  DisplayButtons,
} from './jobDescriptionStyles';
import { Fragment, useEffect } from 'react';
import { Link } from '../Link';
import { Props } from './jobListings.functions';
import HeaderJobInfo from './HeaderJobInfo';
import DisplayJobDescription from './DisplayJobDescription';

const JobDescription: React.FC<Props> = ({ job, goBack }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <JobTitle>
        {job.jobRole.role} - {job.jobRole.extra}
      </JobTitle>
      <JobDescriptionHeader>
        <HeaderJobInfo jobListingHeader={job} />
      </JobDescriptionHeader>

      <SectionTitle>Job Description</SectionTitle>
      <SectionParagraph>
        <DisplayJobDescription
          paragraphs={job.jobDescription.paragraphs}
          needBreakLine
        />
      </SectionParagraph>

      <SectionTitle>Responsibilities</SectionTitle>
      <SectionParagraph>
        <DisplayJobDescription
          paragraphs={job.jobResponsibilities.responsibilities}
        />
      </SectionParagraph>
      <ul>
        <DisplayJobDescription
          bulletPoints={job.jobResponsibilities.bulletPoints}
        />
      </ul>

      <SectionTitle>Job Requirements</SectionTitle>
      <SectionParagraph>
        <DisplayJobDescription paragraphs={job.jobRequirements.paragraphs} />
      </SectionParagraph>
      <ul>
        <DisplayJobDescription
          bulletPoints={job.jobRequirements.bulletPoints}
        />
      </ul>

      <DisplayButtons>
        <Link
          style={{ width: '15%' }}
          onClick={() => alert("I don't know where to go.")}
        >
          APPLY NOW
        </Link>
        <ButtonStyle onClick={() => goBack()}>GO BACK</ButtonStyle>
      </DisplayButtons>
    </>
  );
};

export default JobDescription;
