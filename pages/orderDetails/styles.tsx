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
  // height: auto;
  // margin: auto;
  // width: 1200px;
  // position: relative;
  // z-index: 2;
  // margin-top: 40px;
  // background-color: #0F0E23;
  border-radius: 24px;
  // flex-direction: column;
  // display: block;
  align-items: center;
  text-align: center;
  height: auto;
  margin: auto;
  width: 100%;
  position: relative;
  z-index: 2;
  margin-top: 40px;
  background-color: none;
  
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
  flex-direction: row;
  place-content: space-between;
  display: flex;
  padding-top: 20px;
  
  @media only screen and (max-width: 600px) {
        flex-direction: column;
     
  }

`;

export const SecondContent = styled.div`
  height: 33%;
  width: 100%;
  padding: 40px;
  margin-top: 40px;
  
  @media only screen and (max-width: 600px) {
     margin: unset;
     width: 600px;
     align-items: center;
    text-align: center;
   }

`;

export const ContainerOrderActivity = styled.div`
  width: 1119px;
  height: auto;
  flex-direction: column;
  background: #29274B;
  border-radius: 12px;
  margin: auto;
  
    @media only screen and (max-width: 600px) {
       width: 100%;
       height: auto;
       margin: auto;

  }
  
`;

export const LabelAndIcon = styled.div`
    display: flex;
    flex-direction: row;
     place-content: space-between;
     padding-top: 20px;
     padding-bottom: 20px;

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
  width: 100%;
    align-items: center;
    text-align: center;
    flex-direction: column;
    display: flex;
`;

export const ThirdContent = styled.div`
    height: 33%;
    width: 100%;
    align-items: center;
    text-align: center;
    flex-direction: column;
    display: flex;
    padding: 0px;
    place-content: space-between;
   
    @media only screen and (max-width: 600px) {
      align-self: center;
      width: 600px;

    }
`;

export const CardThirdContent = styled.div`
    align-items: center;
    text-align: center;
    flex-direction: row;
    display: flex;
    place-content: space-between;
    padding: 40px;
    
      @media only screen and (max-width: 600px) {
    overflow: scroll;
  }
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
    
    display: flex;
    align-items: center;
   
    color: #FFFFFF;
`;

export const Left = styled.div`
  height: 100%;
  width: 50%;
  padding-top: 10px;
  padding-left: 30px;

`;

export const Right = styled.div`
  height: 100%;
  width: 50%;
    padding-left: 30px;

`;

export const ImageNFT = styled.div`
    width: 520px;
    height: 587px;
    margin: auto;

    background: rgba(224, 63, 227, 0.3);
    border-radius: 12px;
    background-image: url("/images/image-nft-mouse.png");
    background-repeat: no-repeat;
    background-position: center;
`;

export const Top = styled.div`
    height: 33%;
    width: 100%; 
    
     @media only screen and (max-width: 600px) {
            display: grid
     }
      
`;


export const Middle = styled.div`
    padding-top: 24px;
   
   height: 33%;
    width: 100%;
`;

export const ContentMiddle = styled.div`
    width: 559px;
    height: 190px;
    padding: 24px;

    background: #29274B;

    border: 1px solid #29274B;
    box-sizing: border-box;
    border-radius: 12px;
`;


export const Bottom = styled.div`
     height: 33%;
    width: 100%;
`;

export const Description = styled.div`
    width: 559px;
    height: 190px;
    padding: 24px;
    
    background: #29274B;
    
    border: 1px solid #29274B;
    box-sizing: border-box;
    border-radius: 12px;
    
    
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 24px 0px;
     overflow-x: hidden; 
     overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 10px;               
    }
    
    ::-webkit-scrollbar-track {
      background: #131524;        
    }
    
    ::-webkit-scrollbar-thumb {
      background:  linear-gradient(96.82deg, #EE0CA1 0%, #D742B6 100%);  
      border-radius: 20px;
    }
`;


export const TextDescription = styled.div`
    width: 100%;
    
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    
    color: #FFFFFF;
`;


export const CollecionText = styled.div`
    width: 100%;
    
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color:  #EE0CA1;  
    margin-bottom: 10px;

    display: flex;
    align-items: center;
    
      @media only screen and (max-width: 600px) {
           margin-top: 10px;
               font-size: 20px;

       }
`;


export const TitleName = styled.div`    
    font-family: Bebas Neue Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 40px;
    
    display: flex;
    align-items: center;
        
    color: #FFFFFF;
`;

export const ContentSubtitle = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 70%;
      align-items: self-end;
      margin-top: 20px;
      
      @media only screen and (max-width: 600px) {
            flex-direction: column;
            align-items: flex-start;
       }
      
`;


export const Subtext = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    
    color: #848484;
    
    b{
       color:  #EE0CA1;  

    }
`;

export const IconAndText = styled.div`
      display: flex;
      flex-direction: row;
`;
export const TextIcon = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    
    display: flex;
    align-items: center;
        
    color: #848484;
`;

export const IconHeart = styled.div`
    width: 25px;
    height: 25px;

    background-image: url("/images/heart.png");
    background-repeat: no-repeat;
    background-position: center;
    
 `;

export const IconView = styled.div`
    width: 25px;
    height: 25px;

    background-image: url("/images/view.png");
    background-repeat: no-repeat;
    background-position: center;

`;



export const LabelMiddle = styled.div`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  display: flex;
  align-items: center;
  color: #FFFFFF;

`;

export const ContentValue = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-bottom: 10px;
    margin-top: 10px;


`;

export const ValueNFT = styled.div`
  font-family: Bebas Neue Pro;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  color:  #EE0CA1;  

`;

export const ValueDollar = styled.div`
font-family: Bebas Neue Pro;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 28px;
color: #FFFFFF;
margin-top: 10px;
margin-left: 10px

`;

export const IconSale = styled.div`
    width: 25px;
    height: 25px;

    background-image: url("/images/sale.png");
    background-repeat: no-repeat;
    background-position: center;

`;

export const FlexEnd = styled.div`
  @media only screen and (max-width: 600px) {
    align-self: flex-end;
  }
`;