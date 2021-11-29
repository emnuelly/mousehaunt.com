import type { NextPage } from "next";

import {
  Container,
  Title,
  Members,
  MemberButtons,
  Member,
  Photo,
  Social,
} from "./styles";
import Image from "next/image";

import { svg } from "../../../utils/svg";
import ButtonTeamPrevious from "../../../assets/svg/ButtonTeamPrevious.svg";

import pedro from "../../../public/images/people/pedro.jpeg";
import matheus from "../../../public/images/people/matheus.jpeg";
import lan from "../../../public/images/people/lan.png";
import petri from "../../../public/images/people/petri.png";
import luis from "../../../public/images/people/luis.png";
import sinan from "../../../public/images/people/sinan.png";
import hiring from "../../../public/images/other/hiring.png";
import andres from "../../../public/images/people/andres.jpeg";
import daniel from "../../../public/images/people/daniel.png";
import caio from "../../../public/images/people/caio.jpeg";
import antonio from "../../../public/images/people/antonio.jpeg";
import breno from "../../../public/images/people/breno.jpeg";

const Team: NextPage = () => {
  const members = [
    {
      name: "Pedro Camacho",
      role: "Co-Founder & CEO",
      description:
        "Pedro started his career at Bandai Namco, working on titles like Tekken and moved on to AAA gaming. Worked as a designer on titles such as Halo Infinite and Gears of Wars 5",
      src: pedro,
      social: {
        linkedin: "https://www.linkedin.com/in/pedrocamachodandrea/",
      },
    },
    {
      name: "Matheus Vilano",
      role: "Lead Software Engineer",
      description:
        "Matheus started as a musician and audio experience designer. But his project management skills and deep understanding of game development allowed him to become a Game Dev Instructor and Mentor",
      src: matheus,
      social: {
        linkedin: "https://www.linkedin.com/in/matheusvilano/",
      },
    },
    {
      name: "Lan Tong",
      role: "2D Artist",
      description:
        "Lan Tong is a UI/2D artist working in the industry since 2014. He moved to Vancouver and is also an original creator of Mouse Haunt",
      src: lan,
      social: {
        artstation: "https://www.artstation.com/lantong",
      },
    },
    {
      name: "Petri Kauritsalo",
      role: "Level Designer",
      description:
        "Senior Level Designer also working in AAA gaming industry. An original creator of Mouse Haunt",
      src: petri,
      social: {
        linkedin: "https://www.linkedin.com/in/petri-kauritsalo/",
      },
    },
    {
      name: "Luis Matamoros",
      role: "3D Artist",
      description:
        "Luis Matamoros is a 3D artist and texturer that worked in Far Cry 6. An original creator of Mouse Haunt.",
      src: luis,
      social: {
        linkedin: "https://www.linkedin.com/in/luis-matamoros-1a854715a/",
      },
    },
    {
      name: "Sinan Ozer",
      role: "Project Manager",
      description:
        "Sinan Ozer has a track record of working as Project Management and as Graphic Designer. Has also worked at EA games. An original creator of Mouse Haunt",
      src: sinan,
      social: {
        linkedin: "https://www.linkedin.com/in/sinanozer7/",
      },
    },
    {
      name: "You!",
      role: "Chief Rat Officer",
      description:
        "Mouse Haunt is contantly explanding its team with talented people! Send us a message and join our team!",
      src: hiring,
      social: {},
    },
  ];
  const advisors = [
    {
      name: "Andres Bilbao",
      description:
        "Co-founder of Rappi\nAfter creating one of the first Unicorns in LATAM, Andres is full time dedicated to crypto",
      src: andres,
      social: {
        linkedin: "https://www.linkedin.com/in/ahbilbao/",
      },
    },
    {
      name: "Daniel Portugal",
      description:
        "Daniel is a Senior Solidity Engineer, doing Ethereum, solidity and multi-blockchain contracts since 2017. Teaching Facilitator at MIT for the Blockchain: Disruptive Technology course",
      src: daniel,
      social: {
        linkedin: "https://www.linkedin.com/in/danielportugal/",
      },
    },
    {
      name: "Caio Jahara",
      description: "Augmented reality pioneer\nFounder & CEO of R2U.io",
      src: caio,
      social: {
        linkedin: "https://www.linkedin.com/in/caio-jahara-1b471680/",
      },
    },
    {
      name: "Antonio Viggiano",
      description:
        "Bitcoin enthusiast since 2013\nCofounded and coded 2 crypto exchanges himself",
      src: antonio,
      social: {
        linkedin: "https://www.linkedin.com/in/aviggiano/",
        twitter: "https://twitter.com/agfviggiano",
      },
    },
    {
      name: "Gustavo",
      description:
        "+8 years experience in accounting and finance, also a crypto enthusiast that work as advisor in other P2E projects ",
      src: "",
      social: {
        linkedin:
          "https://www.linkedin.com/in/gustavo-sabino-975145114/ https://twitter.com/GuhS_NFT",
      },
    },
    {
      name: "Breno Mazza",
      description:
        "Community Manager, specialist in SEO, copywriting and advertising writing. Columnist for Blockchain Games",
      src: breno,
      social: {
        linkedin: "https://www.linkedin.com/in/breno-mazza-966823111/",
      },
    },
  ];

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
      behavior: "smooth",
    });
  };

  return (
    <>
      <Container id="Team">
        <Title>
          Created <b>by</b>
        </Title>
        <Members id="members">
          {members
            .filter((m) => m.src)
            .map((member) => (
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
                <Social>
                  {Object.keys(member.social).map((network) => (
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
          <button onClick={() => scroll("members", -1)}>
            <ButtonTeamPrevious />
          </button>
          <button onClick={() => scroll("members", 1)}>
            <ButtonTeamPrevious className="next" />
          </button>
        </MemberButtons>
        <Title>Advisors</Title>
        <Members
          id="advisors"
          className="advisors"
          style={{ gridTemplateColumns: "repeat(5, 1fr)" }}
        >
          {advisors
            .filter((a) => a.src)
            .map((advisor) => (
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
                <Social>
                  {Object.keys(advisor.social).map((network) => (
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
          <button onClick={() => scroll("advisors", -1)}>
            <ButtonTeamPrevious />
          </button>
          <button onClick={() => scroll("advisors", 1)}>
            <ButtonTeamPrevious className="next" />
          </button>
        </MemberButtons>
      </Container>
    </>
  );
};

export default Team;
