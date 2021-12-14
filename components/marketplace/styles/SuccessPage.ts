import styled from 'styled-components';

export const Card = styled.div`
  margin-top: -30%;
  width: 80%;

  background: #0f0e23;
  border: 1px solid #29274b;
  box-sizing: border-box;

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  border-radius: 24px;
`;

export const Body = styled.div`
  display: flex;

  div {
    max-height: auto;
    margin-bottom: 15px;
  }
`;

export const FlexWidth = styled.div`
  width: 60% !important;
  margin-left: 15px;
  margin-top: 7px !important;

  a {
    margin-top: 35px;
    width: 50% !important;
    text-transform: uppercase;
  }
`;

export const TextSection = styled.div`
  padding-top: 22%;
  display: flex;
  padding-left: 5px;

  font-family: Bebas Neue Pro;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 32px;
`;

export const InfoText = styled.div`
  display: flex;
  padding-left: 5px;
  justify-content: space-between;
  margin-right: 45px;

  div {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    text-align: right;

    color: #ffffff;
  }
  div:nth-child(odd) {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;

    color: #848484;
  }

 
`;
