import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 520px;
  height: 620x;
  left: 0px;
  top: 0px;
  background: #29274B;
  border-radius: 12px;  
  border: none;
  margin: auto;

`;

export const Imagem = styled.div`
    width: 520px;
    height: 488px;
    border-radius: 12px;
    
    background-image: url("/images/create-order.png");
    background-repeat: no-repeat;
`;


export const InfoContainer = styled.div`
  width: 100%;
  height: 108px;
  left: 8px;
  margin-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
    
  background: #29274B;
  display: flex;
  flex-direction: column;
  place-content: space-between;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
  border-radius: 12px;  

`;
export const InfoContainerUp = styled.div`
    display: flex;
    flex-direction: row;
     place-content: space-between;
     padding-top: 8px;
`;

export const InfoContainerTitle = styled.div`
    display: block;    
`;

export const InfoTitle = styled.div`
    justifyContent: column;
    position: static;
    height: 20px;
    left: 0px;
    top: 0px;
    
    font-family: Bebas Neue Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    
    display: flex;
    align-items: center;
    
    color: #FFFFFF;
    
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
`;

export const InfoSubtitle = styled.div`
    position: static;
    height: 20px;
    margin-top: 10px;
    left: 0px;
    top: 20px;
    
    font-family: Bebas Neue Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    
    display: flex;
    align-items: center;
        
    color: #848484;
        
`;

export const InfoBadgeImage = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 5px;

`;

export const InfoBadgeValue = styled.div`
    font-family: Bebas Neue Pro;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 20px;
    
    display: flex;
    align-items: center;
    text-align: right;
    
    
    color: #FFFFFF;

`;
export const InfoContainerValue = styled.div`
    display: flex;
    place-content: space-between;
    margin-bottom: 10px;
`;

export const InfoValue = styled.div`
    width: 101px;
    height: 28px;
    left: 8px;
    bottom: 8px;
    
    font-family: Bebas Neue Pro;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 28px;
    background: -webkit-linear-gradient(#EE0CA1, #D742B6);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     
     
    display: flex;
    align-items: center;

`;

export const InfoDollar = styled.div`
    height: 28px;
    
    font-family: Bebas Neue Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    
    display: flex;
    align-items: center;
    text-align: right;
    
    
    color: #FFFFFF;

`;
