import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 600px) {
    overflow: hidden;
    padding-top: 80px;
    flex-direction: column;
    text-align: center;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 478px;

  @media only screen and (max-width: 600px) {
    width: 360px;
    button {
      align-self: center;
    }
  }
`;

export const Right = styled.div`
  margin-top: -313px;
`;

export const Hero = styled.div`
  z-index: 1;

  position: relative;
  left: calc(-211px / 2);
  bottom: -313px;

  filter: drop-shadow(-9px -4px 7px rgba(0, 0, 0, 0.25));

  @media only screen and (max-width: 600px) {
    transform: matrix(-1, 0, 0, 1, 0, 0);
    left: unset;
    margin-top: -201.82px;
    bottom: -243px;
    left: -40px;
    width: 173px;
  }
`;

export const Phone = styled.div`
  position: relative;
  height: 313px;

  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  border-radius: 10px;

  filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.5));

  img {
    width: 544px;
    height: 305px;

    margin-right: 8px !important;
    margin-bottom: 8px !important;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 40px;
    height: 201.82px;
    img {
      width: 345.71px;
      height: 193.82px;
    }
  }
`;

export const Title = styled.div`
  font-family: "Bebas Neue Pro";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;

  flex: none;
  flex-grow: 0;
`;

export const Subtitle = styled.div`
  padding-top: 16px;
  padding-bottom: 40px;

  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  flex: none;
  flex-grow: 0;
  margin: 16px 0px;
`;

export const Ellipse = styled.div`
  width: 486.59px;
  height: 486.59px;

  margin-top: calc(-486.59px / 2 - 313px / 2);

  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  mix-blend-mode: overlay;
  filter: blur(187px);
  transform: rotate(105deg);

  opacity: 30%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
