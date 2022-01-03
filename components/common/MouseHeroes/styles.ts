import styled from 'styled-components'

export const Container = styled.section`
  padding-top: 160px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`

export const Left = styled.div`
  @media only screen and (max-width: 600px) {
    order: 1;
  }
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 478px;

  a {
    align-self: start;

    @media only screen and (max-width: 600px) {
      margin-top: 0px;
      align-self: center;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 343px;
    margin-top: 80px;
  }
`

export const Hero = styled.div`
  @media only screen and (max-width: 600px) {
    padding-left: 0px;
    padding-top: 40px;
  }
`

export const Title = styled.div`
  font-family: 'Bebas Neue Pro';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;

  flex: none;
  flex-grow: 0;
`

export const Subtitle = styled.div`
  padding-top: 16px;
  padding-bottom: 40px;

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  flex: none;
  flex-grow: 0;
  margin: 16px 0px;
`

export const Ellipse = styled.div`
  position: absolute;
  width: 569px;
  height: 569px;
  left: 672px;
  top: calc(100vh + 72px + 16px + 85px + 160px + 16px + 40px + 180px + 569px / 2);

  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  mix-blend-mode: overlay;
  filter: blur(187px);

  opacity: 30%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`
