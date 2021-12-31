import type { NextPage } from "next";

import { Container, Title, Social, Logo, Ellipse1, Ellipse2, Copy, ContainerBorder, ImageBackground} from "./styles";
import Image from "next/image";
import { svg } from "../../../utils/svg";
import logo from "../../../public/images/other/logo.png";

const Footer: NextPage = () => {
  const social = {
    instagram: "https://discord.gg/UABfTV3AFn",
    discord: "https://discord.gg/UABfTV3AFn",
    telegram: "https://t.me/joinchat/QJNjRk7T06NjYjEx",
    artstation: "https://mousehaunt.medium.com",
  };
  return (
    <Container>
      <ContainerBorder></ContainerBorder>
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
      <Copy>TERMS & CONDITIONS / PRIVACY / POLICY / DISCLAIMER</Copy>
        <Ellipse1/>
        <Ellipse2/>
    </Container>
  );
};

export default Footer;
