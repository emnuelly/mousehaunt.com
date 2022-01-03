
import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const CheckBox = styled.label`
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
        

  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 12px 32px;

  cursor: pointer;

   input {
      position: absolute;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    
    /* Create a custom checkbox */
    span {
      position: absolute;
      border: 2px solid #29274B;
      height: 100px;
      width: 124px;
      border-radius: 6px;
    }
    
    :hover input ~ span {
      background-color: none;
    }
    
   
    input:checked ~ span {
      background: linear-gradient(96.82deg, #EE0CA1 0%, #D742B6 100%);
      color: #fff;
    }
    
    span:after {
      content: "";
      position: absolute;
    }
    
     input:checked ~ span:after {
      display: block;
     
    }
    
    span:after {
     margin-left: 5px;
      text-align: center;
      width: 5px;
      height: 10px;
    }

`;

ButtonNFT.propTypes = {
    option: PropTypes.string,
};

function ButtonNFT(props: any) {
    const {option} = props;

    return (
        <CheckBox>
            {option}
            <input type="checkbox"/>
            <span/>
        </CheckBox>
    );
};


export default ButtonNFT;
