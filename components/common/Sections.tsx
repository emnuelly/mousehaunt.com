import React from "react";
import styled from "styled-components";

import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: row;

  a {
    margin-right: 32px;
    z-index: 1;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

interface Props {
  sections: { title: string; to: string }[];
}

const Sections: React.FC<Props> = (props: Props) => (
  <Container>
    {props.sections.map((section) => (
      <Link key={section.to} href={section.to}>
        {section.title}
      </Link>
    ))}
  </Container>
);

export default Sections;
