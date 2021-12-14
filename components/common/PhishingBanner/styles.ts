import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100px;
  overflow: hidden;
  background: #ff005c;
  display: flex;
  align-items: center;
  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 600px) {
    overflow: hidden;
    padding-top: 80px;
    flex-direction: column;
    text-align: center;
    display: none;
  }
`;

export const ImageStack = styled.div``;

export const FirstImage = styled.span`
  position: relative;
  z-index: 2;
`;
export const SecondImage = styled.span`
  position: relative;
  right: 50px;
  z-index: 1;
  top: 8px;
  img {
    transform: scaleX(-1);
  }
`;
export const ThirdImage = styled.span`
  position: relative;
  right: 105px;
  top: -2px;
  img {
    transform: scaleX(-1);
  }
`;

export const SecondContainer = styled.div`
  border-radius: 8px;
  div {
    display: flex;
    align-items: center;
    width: 720px;
    position: relative;
    left: -40px;
    div {
      padding-left: 20px;
      text-align: center;
      background-color: rgb(41, 39, 75, 0.17);
      height: 62px;
      border-radius: 8px;
    }

    svg {
      margin-right: 15px;
    }
  }
`;

export const ThirdContainer = styled.div`
  position: relative;
  left: 7%;

  svg:hover {
    background-color: rgb(41, 39, 75, 0.17);
    transform: scale(1.1);
    cursor: pointer;
    transition: all 0.1s ease-in;
  }
`;

export const PhishingTitle = styled.span`
  font-family: Bebas Neue Pro;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 40px;

  color: #ffffff;
`;

export const PhishingParagraph = styled.span`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 40px;
  margin-left: 12px;

  color: #ffffff;

  a {
    text-decoration: underline;
    font-weight: 800;
    font-size: 15px;
  }
`;
