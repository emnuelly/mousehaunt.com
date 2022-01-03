import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 764px;
  margin-bottom: 80px;

  @media only screen and (max-width: 600px) {
    margin-top: 80px;
  }
`

export const RoadmapImage = styled.div`
  .desktop {
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
  .mobile {
    @media only screen and (min-width: 600px) {
      display: none;
    }
  }
`

export const Title = styled.h1`
  display: inline;
  align-self: center;

  margin-bottom: 64px;
  z-index: 1;

  font-family: 'Bebas Neue Pro';
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
`

export const Subtitle = styled.h2`
  display: inline;

  margin-bottom: 64px;
  z-index: 1;

  font-family: 'Bebas Neue Pro';
  font-weight: 800;
  font-size: 36px;
  line-height: 40px;

  flex: none;
  flex-grow: 0;
  order: 0;

  order: 1;
  background-image: linear-gradient(96.82deg, #be42d7 0%, #6c61e4 100%);

  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`

export const Content = styled.div`
  align-self: center;
`

export const Upward = styled.div`
  display: flex;
  margin-bottom: 20px;

  .first {
    margin-left: 355px;

    @media only screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      justify-content: center;

      margin-left: 60px;
      margin-top: -750px;
    }
  }
  .first > h2 {
    margin-left: 60px;
    @media only screen and (max-width: 600px) {
      margin-bottom: -50px;
      order: -1;
    }
  }

  .second {
    margin-left: 365px;
    @media only screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      justify-content: center;

      position: absolute;
      margin-left: 60px;
      margin-top: -120px;
    }
  }

  .second > h2 {
    margin-left: 60px;
    background-image: linear-gradient(96.82deg, #0882f2 0%, #1fc6ec 100%);

    @media only screen and (max-width: 600px) {
      margin-bottom: -90px;
      order: -1;
    }
  }
`

export const Plan = styled.div``

export const Downward = styled.div`
  display: flex;
  margin-top: 20px;

  .third {
    margin-left: 80px;

    @media only screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      justify-content: center;

      position: absolute;
      margin-left: 60px;
      margin-top: -680px;
    }
  }

  .third > h2 {
    margin-left: 55px;
    background-image: linear-gradient(96.82deg, #cb61e4 0%, #be42d7 100%);

    @media only screen and (max-width: 600px) {
      margin-bottom: 0px;
      order: -1;
    }
  }

  .fourth {
    margin-left: 365px;

    @media only screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      justify-content: center;

      position: absolute;
      margin-left: 60px;
      margin-top: -320px;
    }
  }

  .fourth > h2 {
    margin-left: 60px;
    background-image: linear-gradient(96.82deg, #ac6cfe 0%, #926cfe 0.01%, #08acf2 100%);

    @media only screen and (max-width: 600px) {
      margin-bottom: 0px;
      order: -1;
    }
  }
`

export const Text = styled.div`
  text-align: center;
  width: 200px;

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
`
