import styled from "styled-components";

export const GenesisContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: start;
  position: absolute;
  margin-left: 500px;

  h1 {
    font-size: 120px;
    line-height: 1em;
    margin: 0px auto;
  }
`;
