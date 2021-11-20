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
import { FiBriefcase, FiDollarSign } from 'react-icons/fi';
import { BsBarChart } from 'react-icons/bs';
import { RiMapPinLine } from 'react-icons/ri';
import { Fragment, useEffect } from 'react';
import { Link } from '../Link';

interface Props {
  object: any;
  goBack: any;
}

const JobDescription: React.FC<Props> = ({ object, goBack }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const displayHeaderJobInfo = () => {
    const { jobInfo } = object;
    const keys = 'icon';
    const icons = [
      <FiBriefcase key={keys} />,
      <BsBarChart key={keys} />,
      <RiMapPinLine key={keys} />,
      <FiDollarSign key={keys} />,
    ];

    return Object.entries(jobInfo).map((e: any, k: number) => {
      return (
        <JobDescriptionText key={k}>
          <IconStyle>
            {icons[k]}
            <IconPadding>{e[0]}</IconPadding>
          </IconStyle>
          <br />
          <IconTextSub>{e[1]}</IconTextSub>
        </JobDescriptionText>
      );
    });
  };

  const displayJobDescription = () => {
    const { paragraphs } = object.jobDescription;
    return Object.values(paragraphs).map((e, k) => (
      <>
        <div key={k}>{e}</div> <br />
      </>
    ));
  };

  const displayJobResponsibilities = () => {
    const { responsibilities } = object.jobResponsibilities;
    return <div>{responsibilities}</div>;
  };

  const displayResponsibilitiesBullet = () => {
    const { bulletPoints } = object.jobResponsibilities;

    return Object.values(bulletPoints).map((e, k) => (
      <Fragment key={k}>
        <SectionBullet>{e}</SectionBullet>
      </Fragment>
    ));
  };

  const displayRequirementsBullet = () => {
    const { bulletPoints } = object.jobRequirements;

    return Object.values(bulletPoints).map((e, k) => (
      <Fragment key={k}>
        <SectionBullet>{e}</SectionBullet>
      </Fragment>
    ));
  };

  const displayJobRequirements = () => {
    const { paragraphs } = object.jobRequirements;
    return Object.values(paragraphs).map((e, k) => (
      <>
        <div key={k}>{e}</div>
      </>
    ));
  };

  return (
    <>
      <JobTitle>
        {object.jobRole.role} - {object.jobRole.extra}
      </JobTitle>
      <JobDescriptionHeader>{displayHeaderJobInfo()}</JobDescriptionHeader>

      <SectionTitle>Job Description</SectionTitle>
      <SectionParagraph>{displayJobDescription()}</SectionParagraph>

      <SectionTitle>Responsibilities</SectionTitle>
      <SectionParagraph>{displayJobResponsibilities()}</SectionParagraph>
      <ul>{displayResponsibilitiesBullet()}</ul>

      <SectionTitle>Job Requirements</SectionTitle>
      <SectionParagraph>{displayJobRequirements()}</SectionParagraph>
      <ul>{displayRequirementsBullet()}</ul>

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

{
  /* <JobDescriptionText>
          Icon Level <br />
          {jobInfo.level}
        </JobDescriptionText>
        <div>
          Icon Location <br />
          {jobInfo.location}
        </div>
        
        <div>
          Icon Salary <br />
          {jobInfo.salary}
        </div>
      </JobDescriptionHeader> */
}
