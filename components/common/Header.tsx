import styled from "styled-components";

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
  }
`;

export default Header;
