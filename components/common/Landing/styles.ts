import styled from "styled-components";

export const Container = styled.section`
  top: 0px;
  left: 0px;
  right: 0px;
  height: 100vh;
  width: 90%;
  margin: auto;
  
    @media only screen and (max-width: 600px) {
    height: calc(100vh - 60px);
    text-align: center;
    align-items: center;
  }
  
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 90px - 32px);
  justify-content: center;

  @media only screen and (max-width: 600px) {
    height: auto;
    width: 100%;
    margin-top: 100px;
    text-align: center;
    display: inline-block;
    position: relative;
  }
`;

export const BodyContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  small {
    font-size: 110%;
  }
`;

export const Title = styled.div`
  font-family: "Bebas Neue Pro";
  font-weight: 800;
  font-size: 56px;
  line-height: 64px;
  font-style: normal;


  width: 408px;
  display: inline-block;
  align-items: center;
  text-transform: uppercase;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 16px 0px;
  
  text {
     background: -webkit-linear-gradient(#EE0CA1, #D742B6);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
  }

  @media only screen and (max-width: 600px) {
    justify-content: center;

    font-family: Bebas Neue Pro;
    font-style: normal;
    font-size: 44px;
    line-height: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const Subtitle = styled.div`
  margin-top: 16px;
  margin-bottom: 40px;

  width: 408px;
  font-family: "SF Pro Display";
  font-size: 18px;
  line-height: 29px;

  @media only screen and (max-width: 600px) {
    width: 343px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
`;



export const Left = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
     width: 100vw;

  }
`;

export const Right = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    margin-left: 160px;
    
   @media only screen and (max-width: 1280px) {
        display: none;
   }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
       display: none;
  }
  
  @media only screen and (max-width: 600px) {
        display: none;
          width: 100%;

  }

`;

export const CardStyle = styled.div`
    margin-left: 16px;

`;


export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: inherit;
  align-items: center;
`


export const ButtonDark = styled.a`
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 16px;

  height: 48px;
  background: #29274B;
  border: none;
  border-radius: 10px;

  font-family: "Bebas Neue Pro Bold";
  font-size: 20px;
  line-height: 24px;

  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 12px 32px;

  cursor: pointer;

  z-index: 1;

  @media only screen and (max-width: 600px) {
    min-width: 121px;
    min-height: 48px;
    margin: 0px 10px;
    padding: unset;
  }
`;


export const Ellipse1 = styled.div`
  position: absolute;
  width: 445px;
  height: 445px;
  top: 0px;
  background: linear-gradient(96.82deg, #F2089F 0%, #1FC6EC 100%);
  opacity: 0.60;
  filter: blur(235px);

  @media only screen and (max-width: 1280px) {
    transform: scale(0.5);
  }
`;

export const EllipseCenter = styled.div`
  position: absolute;
  width: 577.9px;
  height: 577.9px;
  left: 439px;

  background: linear-gradient(96.82deg, #F2089F 0%, #1FC6EC 100%);
  opacity: 0.30;
  filter: blur(235px);

  @media only screen and (max-width: 1280px) {
    transform: scale(0.5);
  }
`;

