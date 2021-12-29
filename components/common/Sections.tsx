import React from "react";
import styled from "styled-components";

import { Link as LinkButton } from "./Link";
import Link from "next/link";
import sections, { storeSections } from "../../utils/sections";
import { useRouter } from "next/router";

interface Props {
  mobile?: boolean;
}

interface ContainerProps {
  mobile?: boolean;
  width: string;
}

const MenuContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  justify-content: ${(props) => (props.mobile ? "space-around" : "")};
`; 


const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  justify-content: ${(props) => (props.mobile ? "space-around" : "")};
  height: ${(props) => (props.mobile ? "100%" : "")};
  align-items: center !important;
  width: ${(props) => props.width};

  a {
    margin-left: inherit;
    margin-right: ${(props) => (props.mobile ? "" : "32px")};
    z-index: 1;
  }
  a:after {
    display: block;
    content: "";
    border-bottom: solid 3px #be42d7;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }

  a:hover:after {
    transform: scaleX(1);
  }

  @media only screen and (max-width: 600px) {
    ${(props) => (props.mobile ? "" : "display: none")};
  }

  .right {
    margin-left: auto;
    margin-right: 0px;
  }
`;

const Sections: React.FC<Props> = ({ mobile }: Props) => {
  const router = useRouter();
  const isStorePath = router.pathname.includes("/store");
  const routes = isStorePath ? storeSections : sections;

  return (
    <Container width={isStorePath ? "" : "100%"} mobile={mobile}>
      <MenuContainer>
      {routes.map((section) => (
        <Link key={section.to} href={section.to}>
          <a target={section.title === "White Paper" ? "_blank" : ""}>
            {section.title}
          </a>
        </Link>
      ))}
      </MenuContainer>
      {isStorePath ? null : (
        <LinkButton className="right" href="/store">
          MARKETPLACE
        </LinkButton>
      )}
    </Container>
  );
};

export default Sections;
