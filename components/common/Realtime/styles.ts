import styled from 'styled-components'

export const Container = styled.section`
  padding-top: 160px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    overflow: hidden;
    padding-top: 80px;
    flex-direction: column;
    text-align: center;
  }
`

export const Left = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 600px) {
    display: unset;
    margin-bottom: 80px;
  }
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 478px;

  position: relative;
  left: -54px;

  a {
    width: 156px;
  }

  @media only screen and (max-width: 600px) {
    width: 360px;
    left: unset;
    a {
      align-self: center;
    }
  }
`

export const Hero = styled.div`
  position: relative;
  left: calc(-211px / 2);

  filter: drop-shadow(-9px -4px 7px rgba(0, 0, 0, 0.25));
  transform: matrix(-1, 0, 0, 1, 0, 0);

  @media only screen and (max-width: 600px) {
    left: unset;
    margin-top: -201.82px;
    left: 260px;
    width: 173px;
    transform: unset;
  }
`

export const Phone = styled.div`
  position: relative;
  height: 313px;

  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  border-radius: 10px;

  filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.5));

  img {
    width: 544px;
    height: 305px;

    margin-left: 8px !important;
    margin-bottom: 8px !important;
  }

  @media only screen and (max-width: 600px) {
    height: 201.82px;
    img {
      width: 345.71px;
      height: 193.82px;
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
  position: relative;
  width: 444.22px;
  height: 444.22px;

  margin-left: 50%;
  margin-top: -222.11px;

  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  mix-blend-mode: overlay;
  filter: blur(187px);
  transform: rotate(105deg);

  opacity: 30%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`
