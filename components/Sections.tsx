import React from "react";
import styled from "styled-components";

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
  sections: string[];
}

const Sections: React.FC<Props> = (props: Props) => (
  <Container>
    {props.sections.map((section) => (
      <a key={section} href={`#${section}`}>
        {section}
      </a>
    ))}
  </Container>
);

export default Sections;
