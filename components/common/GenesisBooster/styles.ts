import styled from "styled-components";

export const GenesisContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  .desktop {
    @media only screen and (max-width: 600px) {
      display: none !important;
    }
  }
  .mobile {
    @media only screen and (min-width: 601px) {
      display: none !important;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

  @media only screen and (max-width: 600px) {
    margin-left: inherit;
    position: inherit;
  }

  h1 {
    font-size: 120px;
    line-height: 0.8em;
    margin: 0px auto;

    @media only screen and (max-width: 600px) {
      font-size: 56px;
    }
  }
`;
