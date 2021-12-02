import type { NextPage } from 'next';

import {
  Container,
  Title,
  Members,
  MemberButtons,
  Member,
  Photo,
  Social,
} from './styles';
import Image from 'next/image';
import { members, advisors } from './utils/team';
import { svg } from '../../../utils/svg';
import ButtonTeamPrevious from '../../../assets/svg/ButtonTeamPrevious.svg';

export const Team: NextPage = () => {
  const scroll = (id: string, increment: number) => {
    const container = document.getElementById(id)!;
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    const width = 200;
    const gap = (vw - width) / 2;
    container.scrollBy({
      top: 0,
      left: increment * (vw - gap),
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Container id="Team">
        <Title>
          Core <b>Team</b>
        </Title>
        <Members id="members">
          {members
            .filter(m => m.src)
            .map(member => (
              <Member key={member.name}>
                <Photo>
                  <Image
                    src={member.src}
                    width="180px"
                    height="180px"
                    alt={member.name}
                    placeholder="blur"
                  />
                </Photo>
                <h1>{member.name}</h1>
                <h3>{member.role}</h3>
                <h4>{member.team}</h4>
                <Social>
                  {Object.keys(member.social).map(network => (
                    <a
                      key={network}
                      href={(member.social as any)[network]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {svg(network)}
                    </a>
                  ))}
                </Social>
                <span>{member.description}</span>
              </Member>
            ))}
        </Members>
        <MemberButtons>
          <button onClick={() => scroll('members', -1)}>
            <ButtonTeamPrevious />
          </button>
          <button onClick={() => scroll('members', 1)}>
            <ButtonTeamPrevious className="next" />
          </button>
        </MemberButtons>
        <Title>Advisors</Title>
        <Members
          id="advisors"
          className="advisors"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {advisors
            .filter(a => a.src)
            .map(advisor => (
              <Member key={advisor.name}>
                <Photo>
                  <Image
                    src={advisor.src}
                    width="180px"
                    height="180px"
                    alt={advisor.name}
                    placeholder="blur"
                  />
                </Photo>
                <h1>{advisor.name}</h1>
                <h3>{advisor.team}</h3>
                <Social>
                  {Object.keys(advisor.social).map(network => (
                    <a
                      key={network}
                      href={(advisor.social as any)[network]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {svg(network)}
                    </a>
                  ))}
                </Social>
                <span>{advisor.description}</span>
              </Member>
            ))}
        </Members>
        <MemberButtons>
          <button onClick={() => scroll('advisors', -1)}>
            <ButtonTeamPrevious />
          </button>
          <button onClick={() => scroll('advisors', 1)}>
            <ButtonTeamPrevious className="next" />
          </button>
        </MemberButtons>
      </Container>
    </>
  );
};

export default Team;
