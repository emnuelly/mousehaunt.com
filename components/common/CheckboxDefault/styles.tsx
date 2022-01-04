import styled from "styled-components";

export const CheckBox = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 14px;


   input {
      position: absolute;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    
    /* Create a custom checkbox */
    span {
      position: absolute;
      border: 2px solid #EE0CA1;
      top: 0;
      left: 0;
      height: 24px;
      width: 24px;
      border-radius: 6px;
    }
    
    :hover input ~ span {
      background-color: #ccc;
    }
    
   
    input:checked ~ span {
      background: linear-gradient(96.82deg, #EE0CA1 0%, #D742B6 100%);
    }
    
    span:after {
      content: "";
      position: absolute;
      display: none;
    }
    
     input:checked ~ span:after {
      display: block;
     
    }
    
    span:after {
      margin-left: 5px;
      text-align: center;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

`;
