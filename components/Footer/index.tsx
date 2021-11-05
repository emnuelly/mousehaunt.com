import type { NextPage } from "next";

import { Container, Title, Social, Logo, Ellipse1, Ellipse2 } from "./styles";
import Image from "next/image";
import { svg } from "../../utils/svg";
import logo from "../../public/images/logo.png";

const Footer: NextPage = () => {
  const social = {
    discord: "https://discord.gg/UABfTV3AFn",
    twitter: "https://twitter.com/mousehaunt",
    telegram: "https://t.me/joinchat/QJNjRk7T06NjYjEx",
    medium: "https://mousehaunt.medium.com",
  };
  return (
    <Container>
      <Logo>
        <Image
          src={logo}
          width="144px"
          height="144px"
          alt="Logo"
          placeholder="blur"
        />
      </Logo>
      <Title>JOIN OUR COMMUNITY</Title>
      <Social>
        {Object.keys(social).map((network) => (
          <a
            key={network}
            href={(social as any)[network]}
            target="_blank"
            rel="noreferrer"
          >
            {svg(network)}
          </a>
        ))}
      </Social>
      <Ellipse1 />
      <Ellipse2 />
    </Container>
  );
};

export default Footer;
