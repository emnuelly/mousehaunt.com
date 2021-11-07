import styled from "styled-components";

export const Button = styled.button`
  color: white;

  height: 48px;
  background: linear-gradient(96.82deg, #1fc6ec 0%, #f2089f 100%) !important;
  border: none;
  border-radius: 10px;

  font-family: "Bebas Neue Pro Bold";
  font-size: 20px;
  line-height: 24px;

  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 12px 32px;

  cursor: pointer;

  z-index: 1;

  @media only screen and (max-width: 600px) {
    width: 121px;
    height: 40px;
    margin: 0px 10px;
    padding: unset;
  }
`;
