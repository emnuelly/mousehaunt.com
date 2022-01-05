import styled from "styled-components";

export const Link = styled.a`
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right:10px;

  height: 48px;
  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  border: none;
  border-radius: 10px;

  font-family: "Bebas Neue Pro Bold";
  font-size: 20px;
  line-height: 24px;

  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 26px 32px;

  cursor: pointer;

  z-index: 1;

  @media only screen and (max-width: 600px) {
    min-height: 48px;
    padding: 20px;
  }
`;

export default Link;
