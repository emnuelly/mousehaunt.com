import styled from "styled-components";

export const ContainerHeader = styled.section`
  top: 0px;
  left: 0px;
  right: 0px;
  width: 90%;
  
  margin: auto;

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`;

export const Header = styled.header`
  padding-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 20px;
  line-height: 23px;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 60px;
    background: #0f0e23;
    padding: 16px;
  }

  a,
  button {
    margin-left: auto;
    display: flex;
  }
`;

export default Header;
