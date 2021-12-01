import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  padding-left: 120px;
  padding-right: 120px;

  @media only screen and (max-width: 1280px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media only screen and (max-width: 600px) {
    padding-left: unset;
    padding-right: unset;
  }
`;

export const GradientColor = styled.div`
  background: -webkit-linear-gradient(#ee0ca1, #d742b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Content = styled.section`
  width: 1200px;
  margin: auto;
  @media only screen and (max-width: 600px) {
    width: unset;
    margin: unset;
  }
`;

export const HeaderContainer = styled.div`
  top: 0px;
  left: 0px;
  height: 70vh;
  width: 100%;
  margin-bottom: 5%;
  padding-top: 120px;
  @media only screen and (max-width: 600px) {
    width: 100vw;
  }

  header {
    button {
      margin-left: 32px;
    }
  }
`;

export const HeaderContainerTitle = styled.div`
  font-family: 'Bebas Neue Pro';
  font-weight: 800;
  font-size: 144px;
  line-height: 120px;
  padding-top: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;

  @media only screen and (max-width: 600px) {
    justify-content: center;

    font-family: Bebas Neue Pro;
    font-style: normal;
    font-size: 80px;
    line-height: 72px;
  }
`;

export const HeaderContainerSub = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
  background-color: #0f0e23;

  width: 100%
  font-family: 'SF Pro Display';
  font-size: 18px;
  line-height: 29px;
  height: 50%;
  overflow: auto;
  border: 1px solid #29274B;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    width: 95%;
    height: auto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const HeaderPageSubText = styled.p`
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;

  width: 522px;
  font-family: 'SF Pro Display';
  font-size: 18px;
  line-height: 29px;

  @media only screen and (max-width: 600px) {
    width: 343px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }
  a {
    width: 180px;
    margin: auto;
  }
`;

export const Ellipse = styled.div`
  position: absolute;
  width: 558.55px;
  height: 558.55px;
  left: 710.08px;
  top: 207.56px;
  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  mix-blend-mode: overlay;
  filter: blur(187px);

  transform: rotate(105deg);

  opacity: 80%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Ellipse2 = styled.div`
  position: relative;

  width: 518.86px;
  height: 518.86px;

  left: calc(100px + 518px);
  top: calc(100px - 518px);

  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  mix-blend-mode: overlay;
  filter: blur(187px);

  opacity: 30%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
