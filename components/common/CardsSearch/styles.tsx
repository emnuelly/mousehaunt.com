import styled from "styled-components";

export const CardSearch = styled.div`
    width: 282px;
    height: auto;
    left: 0px;
    top: 100px;
    
    margin-top: 20px;
    background: #29274B;
    
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    
    @media only screen and (max-width: 600px) {
       width: 100%;
       display: inline-block;
    }

`;

export const HeaderSearch = styled.div`
    display: flex;
    flex-direction: row;
     place-content: space-between;
     padding: 20px;
`;


export const TitleSearch = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
`;

export const IconDown = styled.div`
    width: 25px;
    height: 20px;
    margin-right: 10px;
    background-image: url("/images/icon-down.png");
    background-repeat: no-repeat;
    background-position: center;
   
`;

export const TextWithoutResults = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    padding-bottom: 20px;
`;

export const BodySearch = styled.div`
    width: 100%;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    padding: 0px 20px 20px 20px;
  
`;

export const TextCheckbox = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    padding-left: 28px;
  
`;

export const CheckboxContainer = styled.div`
      flex-direction: row;
`;