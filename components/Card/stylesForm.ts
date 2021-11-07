import styled from 'styled-components';

export const ContentForm = styled.section`
  position: relative;
  top: -25%;

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

export const FormIncremental = styled.section`
  margin: 0 auto;
  margin-top: -15px;
  label {
    font-family: 'SF Pro Display';
    font-size: 13px;
    color: #848484;
  }

  input {
    width: 30%;
    height: 25px;
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
`;
