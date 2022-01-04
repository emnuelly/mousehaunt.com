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
  display: grid;

  @media only screen and (max-width: 600px) {
    width: unset;
    margin: unset;
    align-items: center;
  text-align: center;
  }
`;

export const Body = styled.div`
align-items: center;
  text-align: center;
  height: auto;
  margin: auto;
  width: auto;
  margin-top: 40px;
  background-color: none;
  
  @media only screen and (min-width: 700px) {
    display: flex;
      width: 1200px;
        background-color: #131524;
  }

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
    
    display: block;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    
    
    color: #FFFFFF;
`;

export const Left = styled.div`
  height: 100%;
  width: 50%;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  flex-wrap: wrap;

`;

export const Right = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 40px;
  display: inline-grid;
    align-items: center;
    text-align: center;
    margin: auto;
`;

export const Mobile = styled.div`
    display: none;

  @media only screen and (max-width: 1280px) {
     display: none;

  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
        display: none;

  }
 
  @media only screen and (max-width: 600px) {
        display: block;

  }
  
`;

export const Web = styled.div`
  display: flex;

  @media only screen and (max-width: 1280px) {
    display: flex;
  }
  
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    display: flex;
  }

  @media only screen and (max-width: 600px) {
        display: none;
  }
  
`;


export const TitleForm = styled.div`
    font-family: Bebas Neue Pro;
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;
    
    display: flex;
    align-items: center;

    color: #FFFFFF;

`;
export const FormContent = styled.form`
    padding: 10px 40px 40px 40px;
    width: 100%;
    display: grid;

`;

export const LabelFormContent = styled.div`
    align-content: space-between;
    justify-content: space-between;    
    flex-direction: row;
    display: flex;
    margin-top: 25px;

`;

export const ContainerButtons = styled.div`
    align-content: space-between;
    justify-content: space-between;    
    flex-direction: row;
    display: flex;
    width: 100%;
    margin-top: 25px;
    
    @media only screen and (max-width: 600px) {
        width: unset;
        margin: unset;
  }

`;

export const ButtonPlace = styled.div`
    justify-content: flex-start;    
    flex-direction: row;
    display: flex;
    width: 156px;
    margin-top: 30px;

`;

export const FormInputs = styled.div`
    align-content: space-between;
    justify-content: space-between;    
    flex-direction: row;
    display: flex;
    width: 100%;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 362px;
  height: 48px;
  color: #fff;
  border: none;
  border-radius: 10px;
  background-color: #29274B;
`;


export const LabelForm = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    
    display: flex;
    align-items: center;
        
    color: #FFFFFF;
    
`;

export const IconForm = styled.div`
    width: 20px;
    height: 20px;
    background-image: url("/images/info.png");
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover; 
    padding-right: 10px;
`;

export const CalendarIcon = styled.div`
    width: 20px;
    height: 20px;
    background-image: url("/images/calendar.png");
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover; 
    margin-right: 10px;
`;

export const Expiration = styled.div`
    width: 520px;
    height: 48px;
    background: #29274B;
    border-radius: 12px;
    margin-bottom: 30px;
    margin-top: 20px;
    justify-content: flex-start;    
    flex-direction: row;
    display: flex;
    padding: 13px;
`;

export const LabelDate = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height, or 125% */
    
    display: flex;
    align-items: center;
    
    /* Primary/White */
    
    color: #FFFFFF;
`;
