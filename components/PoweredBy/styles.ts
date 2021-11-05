import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 604px;
`;

export const Background = styled.div`
  opacity: 5%;
  width: 1200px;
  position: absolute;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    align-self: center;
    img {
      height: 604px;
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: 70px;
  z-index: 1;

  font-family: "Bebas Neue Pro";
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;

  flex: none;
  flex-grow: 0;
  order: 0;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin-top: 80px;
  margin-bottom: 80px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Logos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: 350px;
    margin: auto;
  }
`;
