import styled from 'styled-components';

export const ListingTitle = styled.h2`
  margin-left: 25px;

  font-family: Bebas Neue Pro;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
`;

export const Label = styled.span`
  display: flex;
  margin-left: 25px;
  justify-content: space-between;
  margin-right: 45px;

  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;
`;

export const FlexHeight = styled.div`
  width: 30% !important;
  margin-top: 25px !important;
  margin-right: 25px;
  margin-bottom: 25px;
`;

export const CardBackground = styled.div`
  background: #29274b;
  height: 100px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const CardBackgroundText = styled.div`
  margin-left: 15px;
  position: relative;
  top: 5px;

  font-family: Bebas Neue Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 28px;

  .posted {
    position: relative;
    top: -30px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #848484;
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;

  .input-submit {
    color: white;
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 25px;
    height: 48px;
    background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
    border: none;
    border-radius: 10px;

    font-family: 'Bebas Neue Pro Bold';
    font-size: 20px;
    line-height: 24px;

    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 12px 32px;

    cursor: pointer;

    @media only screen and (max-width: 600px) {
      width: 121px;
      height: 40px;
      margin: 0px 10px;
      padding: unset;
    }
  }
`;

export const LabelCard = styled.span`
  color: white;
  display: flex;
  justify-content: space-between;
  margin-top: -30px;

  font-family: Bebas Neue Pro;
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 32px;
  margin-right: 30px;
  color: white !important;
`;

export const Choices = styled.div`
  font-family: Bebas Neue Pro;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  margin-right: 30px;
  color: white !important;
  margin-top: 10px;
  margin-bottom: 30px;

  .css-1okebmr-indicatorSeparator {
    display: none;
  }

  .css-qc6sy-singleValue {
    color: white;
    font-weight: 400;
  }

  
  .css-tlfecz-indicatorContainer:hover {
    color: white;
  }
  .css-tlfecz-indicatorContainer:hover {
    color: white;
  }

  .input-dollar {
    position: relative;
    height: 35px;
    border: 0;
    width: 70%;
    margin-left: 35px;
    border-radius: 8px;
    z-index: 2;
    background-color: #29274b;
    color: white;
    padding-left: 10px;
  }
  .input-dollar:focus {
    color: white;
    padding-left: 10px;
    outline-style: solid;
    box-shadow: 0 0 5px #d742b6;
    outline-color: #d742b6;
  }

  // remove arrows

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const DateExpiration = styled.div`
  margin-left: 25px;
  margin-right: 45px;

  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;

  input {
    height: 35px;
    margin-top: 15px;
    border: 0;
    width: 103%;
    border-radius: 8px;
    z-index: 0;
    background-color: #29274b;
    color: white;
    padding-left: 40px !important;
  }
  input:focus {
    color: white;
    padding-left: 10px;
    outline-style: solid;
    box-shadow: 0 0 5px #d742b6;
    outline-color: #d742b6;
  }

  .custom-input {
    display: flex;
    svg {
      position: absolute;
      z-index: 1;
      bottom: 7px;
      left: 10px;
    }
  }
`;
