import { useEffect } from "react";
import styled from "styled-components";

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
`;

interface Props {
  startText: string;
  endText: string;
  date: Date;
}

function countdown({ date, endText }: Props) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const countDown = new Date(date).getTime();

  const now = new Date().getTime();
  const distance = countDown - now;

  if (distance < 0) {
    document.getElementById("ends")!.innerText = endText;
    document.getElementById("ended-ul")!.style.display = "none";
    return;
  }

  document.getElementById("days")!.innerText = Math.floor(
    distance / day
  ).toString();
  document.getElementById("hours")!.innerText = Math.floor(
    (distance % day) / hour
  ).toString();
  document.getElementById("minutes")!.innerText = Math.floor(
    (distance % hour) / minute
  ).toString();
  document.getElementById("seconds")!.innerText = Math.floor(
    (distance % minute) / second
  ).toString();
}

const Countdown: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    const interval = setInterval(() => {
      countdown(props);
    }, 1000);
    return () => clearInterval(interval);
  }, [props]);

  return (
    <CountdownContainer>
      <span id="ends">{props.startText}</span>
      <ul id="ended-ul">
        <li>
          <span id="days"></span>DAYS
        </li>
        <li>
          <span id="hours"></span>HOURS
        </li>
        <li>
          <span id="minutes"></span>MINUTES
        </li>
        <li>
          <span id="seconds"></span>SECONDS
        </li>
      </ul>
    </CountdownContainer>
  );
};

export default Countdown;
