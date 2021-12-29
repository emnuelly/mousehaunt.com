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
  height: 1805px;
  margin: auto;
  width: 1200px;
  position: relative;
  z-index: 2;
  margin-top: 40px;
  background-color: #0F0E23;
  border-radius: 24px;
  flex-direction: column;
  display: block;

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
    
    display: block;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    
    color: #FFFFFF;
`;

export const FirstContent = styled.div`
  height: 33%;
  width: 100%;
`;

export const SecondContent = styled.div`
  height: 33%;
  width: 100%;
`;

export const ContainerOrderActivity = styled.div`
  width: 1119px;
  height: 556px;
  flex-direction: column;
  background: #29274B;
  border-radius: 12px;
  margin: auto;

`;

export const LabelAndIcon = styled.div`
    display: flex;
    flex-direction: row;
     place-content: space-between;

`;

export const TitleSecond = styled.div`
    flex-direction: row;
    display: flex;
    padding: 10px;
`;
export const IconArrow = styled.div`
    width: 25px;
    height: 20px;
    margin-left: 10px;
    margin-right: 10px;
    background-image: url("/images/setas.png");
    background-repeat: no-repeat;
    background-position: center;
    
`;

export const IconDown = styled.div`
    width: 25px;
    height: 20px;
    margin-right: 10px;
    margin-top: 10px;
    background-image: url("/images/icon-down.png");
    background-repeat: no-repeat;
    background-position: center;
    
`;

export const LabelSecond = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    
    display: flex;
    align-items: center;
        
    color: #FFFFFF;

`;

export const ContainerContent = styled.div`
  
`;

export const ThirdContent = styled.div`
    height: 33%;
    width: 100%;
    align-items: center;
    text-align: center;
    flex-direction: column;
    display: flex;
    place-content: space-between;
    padding: 40px;
`;

export const CardThirdContent = styled.div`
    align-items: center;
    text-align: center;
    flex-direction: row;
    display: flex;
    place-content: space-between;
    padding: 40px;
`;

export const TitleThirdContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
`;

export const Label3 = styled.div`
    font-family: Bebas Neue Pro;
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;
    /* identical to box height, or 117% */
    
    display: flex;
    align-items: center;
    
    /* Primary/White */
    
    color: #FFFFFF;
`;

export const Left = styled.div`
  height: 100%;
  width: 50%;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;

export const Right = styled.div`
  height: 100%;
  width: 50%;
  padding-top: 40px;
`;

