import styled from "styled-components";

export const ContainerHeader = styled.div`

`;



export const Header = styled.header`
  top: 0px;
  left: 0px;
  right: 0px;
  
  margin: auto;
  padding-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 20px;
  line-height: 23px;
  margin-left: 46px;
    margin-right: 60px;

  @media only screen and (max-width: 600px) {
    padding: 10px;
     background: #131524;
     width: 100%;
     position: fixed;
     z-index: 1;
     place-content: space-between
  }

  a,
  button {
    margin-left: auto;
    display: flex;
  }
`;

export const AlignLogo = styled.div`
    display: contents;
    flex-direction: row;
    
    @media only screen and (min-width: 600px) {
        margin-left: 30px;
  }
`;