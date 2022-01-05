import styled from "styled-components";
import * as React from 'react'

interface ContainerProps {
    mobile?: boolean;
    width: string;
}

export const Navs = styled.div<ContainerProps>`
  display: flex;
  margin-left: 20px;
   @media only screen and (max-width: 600px) {
      display: block;
        margin-left: 0px;
        width: ${(props) => props.width};

  }
`;
export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  justify-content: ${(props) => (props.mobile ? "space-around" : "")};
  height: ${(props) => (props.mobile ? "100%" : "")};
  align-items: center !important;
  width: ${(props) => props.width};

  a {
    margin-left: inherit;
      align-items: flex-start !important;
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
    padding-left: 40px;
    margin-right: 0px;
  }
`;