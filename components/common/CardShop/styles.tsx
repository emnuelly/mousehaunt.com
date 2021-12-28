import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;


  width: 282px;
  height: 398px;
  left: 0px;
  top: 0px;
  background: #29274B;
  border-radius: 12px;  
  border: none;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 16px;
`;

export const Image = styled.div`
    width: 383px;
    height: 373px;
    border-radius: 12px;
    
    background-image: url("/images/mouse.jpeg");
    background-repeat: no-repeat;
`;


export const InfoContainer = styled.div`
  width: 266px;
  height: 108px;
  left: 8px;
  top: 282px;
  
  background: #29274B;
  
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
  margin: 8px 0px;
`;
export const InfoContainerTitle = styled.div`
    display: flex;
    justifyContent: column;
    alignItems: space-between;
`;
export const InfoTitle = styled.div`
    justifyContent: column;
    position: static;
    width: 139px;
    height: 20px;
    left: 0px;
    top: 0px;
    
    font-family: Bebas Neue Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    
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
    width: 111px;
    height: 20px;
    left: 0px;
    top: 20px;
    
    font-family: Bebas Neue Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    
    display: flex;
    align-items: center;
        
    color: #848484;
        
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 0px;
`;
export const InfoBadgeValue = styled.div``;
export const InfoContainerValue = styled.div`
    display: flex;
    justifyContent: row;
    alignItems: space-between;
`;
export const InfoValue = styled.div`
    position: absolute;
    width: 101px;
    height: 28px;
    left: 8px;
    bottom: 8px;
    
    font-family: Bebas Neue Pro;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 28px;
    
    display: flex;
    align-items: center;

`;
export const InfoDollar = styled.div`
    position: absolute;
    width: 78px;
    height: 28px;
    right: 8px;
    bottom: 8px;
    
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
