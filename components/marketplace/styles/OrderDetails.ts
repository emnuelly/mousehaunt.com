import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3%;
  margin-left: 10px;
`;

export const TitleFont = styled.span`
  font-family: Bebas Neue Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;

  color: #ffffff;
  margin-bottom: -10px;
`;

export const UnorderedList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: flex-start;
  padding:0px;

  li{
    display: flex;
    align-items: center;
    svg{
      margin-top: 5px;
    }
  }

  li > span {
    padding: 3px;
  }
`;

export const StyleValues = styled.span`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;

  color: #848484;
`;

export const MakeOfferContainer = styled.div`
  background: #29274b;
  border: 1px solid #29274b;
  box-sizing: border-box;
  border-radius: 12px;
  width: 80%;
  padding: 20px;

  span {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;

    color: #ffffff;
  }
  .price-container span {
    font-family: Bebas Neue Pro;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 48px;
  }
  .price-usd {
    margin-left: 14px;
    font-weight: 400 !important;
    font-size: 20px !important;
  }
`;
