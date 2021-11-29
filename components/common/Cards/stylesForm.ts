import styled from 'styled-components';

export const ContentForm = styled.div`
  position: relative;
  top: -27.5%;

  button,
  input[type='submit'] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

export const IconStyle = styled.section`
  position: relative;
  top: 22px;
`;

export const FormDisplay = styled.section`
  label {
    font-family: 'SF Pro Display';
    font-size: 13px;
    color: #848484;
  }
  input {
    width: 80%;
    height: 25px;
    border: 0;
    border-radius: 4px;
    background-color: #29274b;
  }
  input:focus {
    border-color: #f2089f;
    border-style: solid;
    border-width: 1px;
  }
  input,
  placehodler {
    text-align: center;
    color: white;
  }
  input::placeholder {
    text-align: center;
    color: white;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const FormIncremental = styled.section`
  margin: 0 auto;
  margin-top: -15px;
  label {
    font-family: 'SF Pro Display';
    font-size: 13px;
    color: #848484;
  }
  span:hover {
    cursor: pointer;
  }
  input {
    width: 30%;
    height: 30px;
    border: 0;
    border-radius: 4px;
    background-color: #29274b;
  }
  input,
  placehodler {
    text-align: center;
    color: white;
  }
  input::placeholder {
    text-align: center;
    color: white;
  }
`;

export const FormMainSection = styled.section`
  display: flex;
  text-align: center;
`;

export const ButtonFormat = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  button:hover {
    cursor: pointer;
  }
  button {
    width: 100px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const Warning = styled.div `
  color: red;
  text-align: center;
  margin-top: -19px;
  min-height: 40px;
`;