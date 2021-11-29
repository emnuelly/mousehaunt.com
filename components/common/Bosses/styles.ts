import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media only screen and (max-width: 600px) {
    margin-top: 80px;
  }
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
  }
`;

export const Mice = styled.div`
  align-self: center;

  width: 334.28px;
  height: 239.62px;

  transform: rotate(-3.03deg);
`;

export const Phone = styled.div`
  width: 851px;
  height: 416px;

  filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.5));
  background-image: url("/images/phone-frames/iphone.png");
  background-repeat: no-repeat;

  @media only screen and (max-width: 600px) {
    background-image: url("/images/phone-frames/iphone-320.png");
    width: 320px;
    height: 156px;
  }
`;

export const Video = styled.div`
  width: 851px;
  height: 416px;
  align-self: center;

  overflow: hidden;
  display: block;
  border-radius: 80px;

  video {
    background-position: center center;
    background-repeat: no-repeat;

    margin-top: -416px;
    width: 851px;
    height: auto;
  }

  @media only screen and (max-width: 600px) {
    width: 320px;
    height: 156px;
    border-radius: unset;

    video {
      width: 314px;
      margin-top: -166px;
      border-radius: 45px;

      margin-left: unset;
    }
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
