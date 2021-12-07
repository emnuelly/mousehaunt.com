import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  top: -70px;
`;

export const StyleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1,
  h2,
  h3 {
    font-family: Bebas Neue Pro;
  }
  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 36px;
    text-transform: uppercase;
    color: #ffffff;
  }

  h3 {
    font-family: Bebas Neue Pro;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 36px;

    display: flex;
    align-items: center;
    text-align: right;
    text-transform: uppercase;
  }
  h3:hover {
    cursor: pointer;
  }
`;

export const InputStyles = styled.div`
  #filter_input {
    width: 100%;
    height: 100%;
    height: 48px;
    border: 0;
    border-radius: 15px;
    color: white;
    background-color: #29274b;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
    padding-left: 45px;
    font-size: 16px;
  }
  #filter_input:focus {
    outline-color: #ee0ca1;
  }
  #filter_input::-webkit-input-placeholder {
    font-family: SF Pro Display;
    padding-top: 20px;
    position: relative;
    top: 2px;
    left: 3px;
    font-size: 18px;
  }
  #input-container {
    width: 100%;
  }
  #input-container svg {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 25px;
    height: 25px;
    color: grey;
  }
`;

export const FilterContainer = styled.div`
  justify-items: space-around;
  position: relative;
  align-items: center;
  top: -30px;
  margin: 8px 0px;
  background-color: #29274b;
  border-radius: 15px;

  z-index: 10;
`;

export const FilterTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  #title,
  svg {
    width: 51px;
    height: 20px;
    margin: 18px 15px;

    display: flex;
    align-items: center;

    /* Primary/White */

    color: #ffffff;
  }
  #title {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height, or 125% */
  }

  svg{
    height: 25px;
    width: 25px;
  }
  svg:hover{
    cursor: pointer;
    color: #ee0ca1;
  }
`;
