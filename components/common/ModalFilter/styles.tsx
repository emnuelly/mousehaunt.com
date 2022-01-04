import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #0f0e23;
  padding-top: 20px;
  margin-top: -380px;
  display: none;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: auto;
  background: #0f0e23;
  box-sizing: border-box;
  margin: auto;
  align-items: center;
  
`;

export const Filter = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  display: inline-grid;
  margin: auto;

`;

export const HeaderTitle = styled.div`
   flex-direction: row;
   display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  width: 100%;

`;

export const FilterText = styled.div`
    font-family: Bebas Neue Pro;
    font-style: bold;
    font-weight: 800;
    font-size: 32px;
    line-height: 36px;
    text-transform: uppercase;
    
    
    color: #FFFFFF;

`;

export const ClearText = styled.div`
    font-family: Bebas Neue Pro;
    font-style: bold;
    font-weight: 800;
    font-size: 20px;
    line-height: 36px;
    
    display: flex;
    align-items: center;
    text-align: right;
    text-transform: uppercase;
    background: -webkit-linear-gradient(#EE0CA1, #D742B6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

`;

export const CheckBox = styled.input.attrs({type: 'checkbox'})`
   width: 23px;
   height: 23px;
   margin: -1px;
   background: linear-gradient(96.82deg, #EE0CA1 0%, #D742B6 100%);
border-radius: 6px;
   padding: 0;
`;

export const FormFilter = styled.form`
   margin: auto;
   margin-bottom: 20px;
   overflow: scroll;
`;

export const SizeButton = styled.div`
    width: 106px;
    display: inline-grid;
    padding-top: 42px;
    align-items: center;
    text-align: center;
`;

export const Close = styled.a`
    width: 106px;
    display: inline-grid;
    align-items: center;
    padding-left: 20px;
    padding-bottom: 60px;
    text-align: left;
    font-family: Bebas Neue Pro;
    font-style: bold;
    font-weight: 800;
    font-size: 55px;
    line-height: 36px;
`;

export const InputSearch = styled.input`
    background: url("/images/lupa.png") no-repeat 7px 7px;
    background-position: 16px;
    text-indent: 20px;
    min-width: 282px;
    height: 48px;
    padding-left: 30px;
    display: inline-block;
    margin-top:16px;
 
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #fff;
    
    background-color: #29274B;
    
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    border: none;
    
    @media only screen and (max-width: 600px) {
       width: 100%;
       display: inline-block;
    }
`;