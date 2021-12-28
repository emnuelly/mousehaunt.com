import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;

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

export const Content = styled.section`
  width: 100%;
  margin: auto;
  display: inline-block;
  
  @media only screen and (max-width: 600px) {
    width: unset;
    margin: unset;
  }
`;

export const Body = styled.div`
  height: auto;
  margin: auto;
  width: 420px;
  position: relative;
  z-index: 2;
  margin-top: 40px;

`;

export const EllipseBlue = styled.div`
  position: absolute;
  width: 855.05px;
  height: 855.05px;
  left: 0px;
  z-index: 2;
 

  background: linear-gradient(96.82deg, #F2089F 0%, #1FC6EC 100%);
    opacity: 0.35;
  filter: blur(235px);

  @media only screen and (max-width: 1280px) {
    transform: scale(0.5);
  }
`;

export const EllipsePink = styled.div`
  position: absolute;
  width: 1217.93px;
  height: 1217.93px;
  right: 0px;
  z-index: 1;


  background:  linear-gradient(96.82deg, #F2089F 0%, #1FC6EC 100%);
    opacity: 0.35;
    filter: blur(235px);

  @media only screen and (max-width: 1280px) {
    transform: scale(0.5);
  }
`;

export const ImageBackground = styled.div`
  height: 475px;
  width: 100%;
  position: relative;
  z-index: 1;
  background-image: url("/images/footer.png");
  background-repeat: no-repeat;
  background-position: bottom center;
  mix-blend-mode: multiply; 
  margin-top: -410px;
`;

export const Title = styled.div`
    font-family: Bebas Neue Pro;
    font-style: normal;
    font-weight: 800;
    font-size: 56px;
    line-height: 64px;
    margin-top: 112px;
    /* identical to box height, or 114% */
    
    display: block;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    
    /* Primary/White */
    
    color: #FFFFFF;
`;