import styled from 'styled-components';

export const ButtonBody = styled.section`
  padding: 15px 15px;

  div {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    display: flex;
    align-items: center;
    justify-content: space-between;

    /* Primary/White */

    color: #ffffff;

    svg {
      margin-right: 5px;
    }

    svg:hover {
      color: #ee0ca1;
      cursor: pointer;
    }
  }

  a {
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
  }
`;
