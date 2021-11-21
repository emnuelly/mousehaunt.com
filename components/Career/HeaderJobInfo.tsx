import { FiBriefcase, FiDollarSign } from 'react-icons/fi';
import { BsBarChart } from 'react-icons/bs';
import { RiMapPinLine } from 'react-icons/ri';
import {
  JobDescriptionText,
  IconStyle,
  IconPadding,
  IconTextSub,
} from './jobDescriptionStyles';

interface Props {
  jobListingHeader: {
    jobInfo: {
      type: string;
      level: string;
      location: string;
      salary: string;
    };
  };
}
const HeaderJobInfo: React.FC<Props> = ({ jobListingHeader }: Props) => {
  const { jobInfo } = jobListingHeader;
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

export default HeaderJobInfo;
