import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/images/other/logo.png";

export const Container = styled.div`
  margin-right: 42px;

  @media only screen and (max-width: 600px) {
    width: 42px;
    height: 42px;
  }
`;

const Logo = () => (
  <Container>
    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
    <a href="/">
      <Image
        src={logo}
        width="90px"
        height="90px"
        alt="logo"
        priority
        placeholder="blur"
      />
    </a>
  </Container>
);

export default Logo;
