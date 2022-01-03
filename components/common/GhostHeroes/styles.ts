import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 478px;

  @media only screen and (max-width: 600px) {
    width: 343px;
  }
`

export const Right = styled.div``

export const Phone = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: auto;

    svg {
      width: 100vw;
      height: auto;
    }
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
  width: 483px;
  height: 483px;
  left: 48px;
  top: 2500px;

  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  mix-blend-mode: overlay;
  filter: blur(187px);

  opacity: 30%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`
