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
    width: 600px;

  
  }
`;

export const Content = styled.section`
  width: 100%;
  margin: auto;
  display: inline-block;
  
     @media only screen and (max-width: 600px) {
      margin: unset;
       align-items: center;
     text-align: center;
   }
`;

export const Body = styled.div`
  border-radius: 24px;
  align-items: center;
  text-align: center;
  height: auto;
  margin: auto;
  width: 100%;
  margin-top: 40px;
  background-color: none;
  padding-left: 20px;
  padding-right: 20px;
  
  @media only screen and (min-width: 700px) {
      display: flex;
       width: 1200px;
       background-color: #131524;
       flex-direction: column;
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