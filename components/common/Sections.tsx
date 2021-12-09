import React from "react";
import styled from "styled-components";

import { Link as LinkButton } from "./Link";
import Link from "next/link";
import sections from "../../utils/sections";

interface Props {
  mobile?: boolean;
}

const Container = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  justify-content: ${(props) => (props.mobile ? "space-around" : "")};
  height: ${(props) => (props.mobile ? "100%" : "")};
  align-items: center !important;
  width: 100%;

  a {
    margin-left: ${(props) => (props.mobile ? "inherit" : "")};
    margin-right: ${(props) => (props.mobile ? "" : "32px")};
    z-index: 1;
  }

  @media only screen and (max-width: 600px) {
    ${(props) => (props.mobile ? "" : "display: none")};
  }

  .right {
    margin-right: 0px;
  }
`;

const Sections: React.FC<Props> = ({ mobile }: Props) => (
  <Container mobile={mobile}>
    {sections.map((section) => (
      <Link key={section.to} href={section.to}>
        <a target={section.title === "White Paper" ? "_blank" : ""}>
          {section.title}
        </a>
      </Link>
    ))}
    <LinkButton className="right" href="/store">
      PRIVATE SALE (#3)
    </LinkButton>
  </Container>
);

export default Sections;
