import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const Title = styled.div`
  padding-top: 72px;

  font-family: 'Bebas Neue Pro';
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;

  flex: none;
  flex-grow: 0;
  order: 0;

  b {
    order: 1;
    background-image: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }

  @media only screen and (max-width: 600px) {
    width: 250px;
    align-self: center;
  }
`

export const Subtitle = styled.div`
  padding-top: 16px;
  padding-bottom: 85px;

  width: 784px;
  align-self: center;

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  text-align: center;

  @media only screen and (max-width: 600px) {
    width: 343px;
  }
`

export const Video = styled.div`
  width: 816px;
  height: 438px;
  align-self: center;

  padding-right: 13px;

  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  box-shadow: 0px 0px 38.9803px rgba(0, 0, 0, 0.5);
  border-radius: 13px;

  @media only screen and (max-width: 600px) {
    width: 330px;
    height: 187.86px;
    iframe {
      width: 345.71px;
      height: 183.57px;
    }
  }
`

export const Logo = styled.div`
  position: absolute;
  width: 137.34px;
  height: 137.34px;
  left: calc(50% + 816px / 2 - 137.34px / 2);
  top: calc(100vh + 72px + 16px + 85px + 137.34px / 2);

  filter: drop-shadow(0px 0px 32.9551px #1fc6ec);
  transform: rotate(15deg);

  @media only screen and (max-width: 600px) {
    width: 60.12px;
    height: 60.12px;
    position: relative;
    margin-top: calc(0px - 187.86px - 60.12px / 2);
    margin-left: calc((100vw - 375px) / 2);
    left: unset;
    top: unset;

    transform: rotate(-15deg);
  }
`

export const Ellipse1 = styled.div`
  position: absolute;
  width: 385px;
  height: 385px;
  left: calc(50% + 816px / 2 - 385px / 2);
  top: calc(100vh + 72px + 16px + 85px);

  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  mix-blend-mode: overlay;
  filter: blur(187px);

  opacity: 30%;

  @media only screen and (max-width: 600px) {
    width: 123px;
    height: 123px;
    left: calc(50% + 350px / 2 - 350px / 2);
    top: calc(100vh + 72px + 16px + 85px);
  }
`

export const Ellipse2 = styled.div`
  position: absolute;
  width: 558.55px;
  height: 558.55px;
  left: 0px;
  top: calc(100vh + 72px + 16px + 85px + 558.55px);

  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  mix-blend-mode: overlay;
  filter: blur(187px);
  transform: rotate(105deg);

  opacity: 30%;

  @media only screen and (max-width: 600px) {
    width: 123px;
    height: 123px;
    top: calc(100vh + 72px + 16px + 85px + 123px);
  }
`
