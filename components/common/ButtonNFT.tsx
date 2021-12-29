import styled from "styled-components";

export const ButtonNFT = styled.button`
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 124px;
  height: 100px;
  background: #29274B;
  border: none;
  border-radius: 10px;

  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
    
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

export default ButtonNFT;
