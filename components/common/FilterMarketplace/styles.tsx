import styled from 'styled-components';

export const FilterMarket = styled.button`
  display: none;
 color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  height: 48px;
  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  border: none;
  border-radius: 10px;

  font-family: "Bebas Neue Pro Bold";
  font-size: 20px;
  line-height: 24px;

  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 12px 32px;

  cursor: pointer;

  z-index: 1;

  @media only screen and (max-width: 600px) {
    min-width: 121px;
    min-height: 48px;
    margin: 0px 10px;
    padding: unset;
  }

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

export const Filter = styled.div`
  height: 100%;
  // width: 25%;
  // padding: 20px;

    @media only screen and (max-width: 600px) {
        display: none;
        width: 100%;
    }
`;

export const HeaderTitle = styled.div`
      flex-direction: row;
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;


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
   width: 100%;
`;

export const InputSearch = styled.input`
    background: url("/images/lupa.png") no-repeat 7px 7px;
    background-position: left;
  
    width: 282px;
    height: 48px;
    padding-left: 30px;

 
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
`;

export const FilterResponsive = styled.div`
  height: 100%;
  padding: 20px;

    @media only screen and (max-width: 600px) {
        display: block;
        width: 100%;
    }
`;