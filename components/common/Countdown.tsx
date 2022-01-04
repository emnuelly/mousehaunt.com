import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import styled from 'styled-components'

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  ul {
    padding-left: 0px;
  }
  li {
    display: inline-block;
    font-size: 1em;
    list-style-type: none;
    padding: 0.5em;
    text-transform: uppercase;
  }
  li span {
    display: block;
    font-size: 48px;
    text-align: center;
  }
`

interface Props {
  startText: string
  endText: string
  date: Date
  setHasEnded?: Dispatch<SetStateAction<boolean>>
}

const Countdown: React.FC<Props> = ({ startText, endText, date, setHasEnded }: Props) => {
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24
  const [distance, setDistance] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      const countDown = new Date(date).getTime()
      const now = new Date().getTime()
      const d = countDown - now
      if (d < 0 && setHasEnded) {
        setHasEnded(true)
      }
      setDistance(d)
    }, 1000)
    return () => clearInterval(interval)
  }, [date, setHasEnded])

  return (
    <CountdownContainer>
      <span id='ends'>{distance < 0 ? endText : startText}</span>
      {distance < 0 ? null : (
        <ul id='ended-ul'>
          <li>
            <span id='days'>{Math.floor(distance / day)}</span>DAYS
          </li>
          <li>
            <span id='hours'>{Math.floor((distance % day) / hour)}</span>HOURS
          </li>
          <li>
            <span id='minutes'>{Math.floor((distance % hour) / minute)}</span>
            MINUTES
          </li>
          <li>
            <span id='seconds'>{Math.floor((distance % minute) / second)}</span>
            SECONDS
          </li>
        </ul>
      )}
    </CountdownContainer>
  )
}

export default Countdown
