import styled from 'styled-components';

export const Container = `styled.section
position: relative;
top: -120px;
`

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
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
`;

export const FilterContainer = styled.div`
  height: 48px;
  display: flex;
  position: relative;
  align-items: center;
  margin: 8px 0px;

  z-index: 10;

  #filter_input {
    width: 100%;
    height: 100%;
    border: 0;
    background-color: #29274b;
    border-radius: 15px;
    color: white;
    background-color: #29274b;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
    padding-left: 10px;
  }
  #filter_input:focus {
    outline-color: #ee0ca1;
  }
`;
