import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: -400px;

  @media only screen and (max-width: 600px) {
    margin-top: 80px;
  }

    
    background-color: rgba(0, 0, 0, 0);
    background-position-x: 0%, 0%;
    background-position-y: 100%, 100%;
    background-repeat: repeat, repeat;
    background-attachment: scroll, scroll;
    background-image: radial-gradient(55% 55%, rgba(19, 21, 36, 0.3) 10%, rgb(19, 21, 36) 90%), url("/images/awards_bg.jpg");
    background-size: auto, auto;
    background-origin: padding-box, padding-box;
    background-clip: border-box, border-box
`;

export const Title = styled.div`
  margin-top: -45px;
  z-index: 1;

  font-family: "Bebas Neue Pro";
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;

  flex: none;
  flex-grow: 0;
  order: 0;

  b {
    order: 1;
    background-image: linear-gradient(96.82deg, #cb61e4 0%, #be42d7 100%);

    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;

export const Subtitle = styled.div`
  padding-top: 16px;
  padding-bottom: 85px;

  width: 784px;
  align-self: center;

  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  text-align: center;

  @media only screen and (max-width: 600px) {
    width: 360px;
    margin-bottom: -100px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;

  width: 486px;
  padding: 40px;

  @media only screen and (max-width: 600px) {
    width: 343px;
    padding: 10px;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;

  width: 486px;
  padding: 40px;

  @media only screen and (max-width: 600px) {
    width: 343px;
    padding: 10px;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media only screen and (max-width: 600px) {
    margin-top: 80px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;

  @media only screen and (max-width: 600px) {
    margin-top: 80px;
  }
`;

export const Ellipse1 = styled.div`
  position: relative;
  width: 375.04px;
  height: 37.33px;
  top: -40px;

  background: #0f0e23;
  filter: blur(15px);

  opacity: 30%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Ellipse2 = styled.div`
  position: relative;

  width: 468.85px;
  height: 468.85px;

  left: calc(468.86px * 1.25);
  top: calc(-468.86px * 0.5);

  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  mix-blend-mode: overlay;
  filter: blur(187px);
  transform: rotate(-124.29deg);

  opacity: 30%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
