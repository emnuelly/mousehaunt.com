import styled from "styled-components";

export const ContainerButton = styled.button`
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;

  width: 270px;
  height: 48px;
  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  border: none;
  border-radius: 10px;

  font-family: Bebas Neue Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
    
  align-items: center;
        
  color: #FFFFFF;

  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 12px 32px;

  cursor: pointer;

  z-index: 1;
  
  :focus {
    background: linear-gradient(96.82deg, #EE0CA1 0%, #D742B6 100%);
  }
`;

export const Image = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background-image: url("/images/sale.png");
  background-repeat: no-repeat;
  background-position: center;
`;
