import { Fragment } from 'react'

import { SectionBullet } from './styles/jobDescriptionStyles'

interface Props {
  paragraphs?: string[]
  needBreakLine?: boolean
  bulletPoints?: string[]
}
const DisplayJobDescription: React.FC<Props> = ({
  paragraphs,
  needBreakLine,
  bulletPoints
}: Props) => {
  const displayJobParagraphs = () => {
    const breakLine = needBreakLine && <br />
    if (paragraphs) {
      return paragraphs.map((e, k) => (
        <>
          {/* eslint-disable-next-line react/no-array-index-key */}
          <div key={k}>{e}</div> {breakLine}
        </>
      ))
    }
    return null
  }

  const displayBulletPoints = () => {
    if (bulletPoints) {
      return bulletPoints.map((e, k) => (
        // eslint-disable-next-line react/no-array-index-key
        <Fragment key={k}>
          <SectionBullet>{e}</SectionBullet>
        </Fragment>
      ))
    }
    return null
  }

  return (
    <>
      {displayJobParagraphs()}
      {displayBulletPoints()}
    </>
  )
}

export default DisplayJobDescription
