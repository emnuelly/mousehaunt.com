import { BsBarChart } from 'react-icons/bs'
import { FiBriefcase, FiDollarSign } from 'react-icons/fi'
import { RiMapPinLine } from 'react-icons/ri'

import {
  JobDescriptionText,
  IconStyle,
  IconPadding,
  IconTextSub
} from './styles/jobDescriptionStyles'

interface Props {
  jobListingHeader: {
    jobInfo: {
      type: string
      level: string
      location: string
      salary: string
    }
  }
}
const HeaderJobInfo: React.FC<Props> = ({ jobListingHeader }: Props) => {
  const displayInlineHeader = () => {
    const { jobInfo } = jobListingHeader
    const keys = 'icon'
    const icons = [
      <FiBriefcase key={keys} />,
      <BsBarChart key={keys} />,
      <RiMapPinLine key={keys} />,
      <FiDollarSign key={keys} />
    ]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Object.entries(jobInfo).map((e: any, k: number) => (
      <>
        {/* eslint-disable-next-line react/no-array-index-key */}
        <JobDescriptionText key={k}>
          <IconStyle>
            {icons[k]}
            <IconPadding>{e[0]}</IconPadding>
          </IconStyle>
          <br />
          <IconTextSub>{e[1]}</IconTextSub>
        </JobDescriptionText>
      </>
    ))
  }

  return <>{displayInlineHeader()}</>
}

export default HeaderJobInfo
