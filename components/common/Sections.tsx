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
      {routes.map((section) => (
        <Link key={section.to} href={section.to}>
          <a target={section.title === "White Paper" ? "_blank" : ""}>
            {section.title}
          </a>
        </Link>
      ))}
      {isStorePath ? null : (
        <LinkButton className="right" href="/store">
          PRIVATE SALE (#3)
        </LinkButton>
      )}
    </Container>
  );
};

export default Sections;
