import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  padding-top: 160px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 2;
  margin: auto;
  
  @media only screen and (max-width: 600px) {
      z-index: 0;
      width: 100%;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  
    
  @media only screen and (max-width: 600px) {
      padding-left: 20px;
      padding-right: 10px;
  }
`;

export const Title = styled.div`
  font-family: "Bebas Neue Pro";
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;

  flex: none;
  flex-grow: 0;
  order: 0;


  @media only screen and (max-width: 600px) {
    width: 250px;
    align-self: center;
  }
`;


export const ContainerBody = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  margin-top: 24px;
  
  @media only screen and (max-width: 600px) {
    overflow: scroll;
  }
  
`;

export const FlexEnd = styled.div`
  @media only screen and (max-width: 600px) {
    align-self: flex-end;
  }
`;

export const CardSpace = styled.div`
    margin-left: 10px;
    margin-bottom: 10px;
    
    @media only screen and (max-width: 600px) {
        width: 554px;
        padding-right: 20px;  
    }

`;