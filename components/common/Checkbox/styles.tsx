import styled, { keyframes } from "styled-components";



export const Container = styled.div`
   width: 100%;
   height: auto;
   place-content: space-between;

   display: flex;
   align-items: center;
  flex-direction: column;
`;

export const CheckboxContainer = styled.div`
   width: 100%;
   height: 35px;
   border-radius: 5px;
   place-content: space-between;
   margin-bottom: 25px;

   display: flex;
   align-items: center;
`;

export const ColumnContainer = styled.div`
  flex-direction: column;
   display: flex;
   align-items: flex-start;
`;

export const HidCheckbox = styled.input.attrs({type: 'checkbox'})`
   width: 23px;
   height: 23px;
   margin: -1px;
   background: linear-gradient(96.82deg, #EE0CA1 0%, #D742B6 100%);
    border-radius: 6px;
   padding: 0;
`;


export const Text = styled.label`
   font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 120% */
    
    display: flex;
    align-items: center;
    
    /* Primary/White */
    
    color: #FFFFFF;
`;

export const Subtitle = styled.div`
   font-family: SF Pro Display;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
/* identical to box height, or 125% */

display: flex;
align-items: center;

/* Secondary/1 */

color: #848484;
`;
