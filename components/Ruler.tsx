import styled from "styled-components";

export const Ruler = styled.hr`
  width: 100%;
  /* margin-left: -120px;
  margin-right: -120px; */

  border-top: 2px solid;
  border-bottom: 2px solid;
  border-image-source: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  border-image-slice: 1;

  /* @media only screen and (min-width: 1280px) {
    margin-left: calc((0px - 100vw + 1200px) / 2);
    margin-right: calc((0px - 100vw + 1200px) / 2);

    width: 100%;
    margin-left: unset;
    margin-right: unset;
  }
  @media only screen and (min-width: 1600px) {
    width: 100%;
    margin-left: unset;
    margin-right: unset;
  } */
`;
