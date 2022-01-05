import React from "react";

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
  width: 1200px;
 
  min-height: 800px;
  margin-top: 40px;
  flex-direction: column;
  display:-webkit-box;
  
  @media only screen and (max-width: 600px) {
          width: 100%;
            margin: auto;

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
    margin-top: 160px;
    
    display: block;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    
    
    color: #FFFFFF;
    
         @media only screen and (max-width: 600px) {
        display: none;
    }

`;

export const TitleResponsive = styled.div`
    font-family: Bebas Neue Pro;
    font-style: normal;
    font-weight: 800;
    font-size: 56px;
    line-height: 64px; 
     margin-top: 160px;
    display: block;
    align-items: center;
    text-align: left;
    text-transform: uppercase;
    width: 207px;

    
    color: #FFFFFF;
    


`;
export const Subtitle = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
   
    color: #FFFFFF;
    
    display: block;
    align-items: center;
    text-align: center;
    
    @media only screen and (max-width: 600px) {
        display: none;
    }
    
`;

export const ContentResponsive = styled.div`
  display: none;
  flex-direction: row;
  width: 100%;
  align-items: center;
  text-align: center;
    margin: auto;
    padding: 25px;
    position: relative;

  @media only screen and (max-width: 600px) {
        display: block;
    }

`;

export const SizeButton = styled.div`
  display: none;
  width: 93px;

  @media only screen and (max-width: 600px) {
        display: block;
    }

`;

export const Cards = styled.div`
  height: 100%;
  width: 75%;
  margin: auto;
  align-items: center;
  text-align: center;
`;

export const AlignCards = styled.div`
    display: flex;
    flex-wrap: wrap;
     margin: 0 auto;
`;

export const CardSpace = styled.div`
    margin-left: 10px;
    margin-bottom: 10px;

`;

export const ButtonMore = styled.div`
    display: inline-grid;
    padding-top: 42px;
    width: 180px;
    align-items: center;
    text-align: center;
`;



export const CheckBox = styled.input.attrs({type: 'checkbox'})`
   width: 23px;
   height: 23px;
   margin: -1px;
   background: linear-gradient(96.82deg, #EE0CA1 0%, #D742B6 100%);
border-radius: 6px;
   padding: 0;
`;


