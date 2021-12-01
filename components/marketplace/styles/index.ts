import styled from 'styled-components';

export const MiceContainerImage = styled.div<{ style: any }>`
  width: 95%;
  margin: 0 auto;
  margin-top: 8px;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    height: 410px;
  }
`;

export const MiceTitle = styled.div`
  font-family: Bebas Neue Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  margin: 3%;
  margin-left: 5%;
`;

export const BackgroundEffect = styled.div`
  position: relative;
  overflow: none;
  @media only screen and (max-width: 600px) {
    bottom: 80px;
  }
`;

export const ImageStack = styled.div`
  position: relative;
  top: 0px;
  left: 0;
`;

export const Mice = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  transform: scaleX(-1);

  @media only screen and (max-width: 600px) {
    top: -14px;
  }
`;

export const MiceSubTitle = styled.div`
  margin-left: 3%;
  margin-top: -3%;
  margin-left: 5%;

  font-family: Bebas Neue Pro;
  font-size: 16px;
  line-height: 20px;

  color: #848484;
`;

export const MiceLikeButton = styled.div`
  position: relative;
  left: 80%;
  top: 15px;
  background-color: #29274b;
  border-radius: 8px;
  height: 50px;
  width: 50px;
  z-index: 2;

  display: flex;
  align-items: center;

  div {
    font-size: 32px;
    margin: 0 auto;
    color: #ff005c;
    svg {
      margin-top: 6px;
    }
  }
`;

export const ButtonGroup = styled.div`
  font-family: Bebas Neue Pro;
  display: flex;
  justify-content: space-between;
  margin-right: 15%;
  margin-left: 3%;
  margin-top: 5%;
  margin-bottom: -5%;
`;

export const FormatMHT = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
`;

export const FormatUSD = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;

  /* Primary/White */

  color: #ffffff;
`;

export const IconStyle = styled.div`
  display: flex;
  color: #ee0ca1;
  align-items: center;
`;
