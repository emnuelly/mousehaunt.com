import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 2;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
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
`;