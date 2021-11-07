import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  padding-left: 120px;
  padding-right: 120px;

  @media only screen and (max-width: 1280px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media only screen and (max-width: 600px) {
    padding-left: unset;
    padding-right: unset;
  }
`;

export const Content = styled.section`
  width: 1200px;
  margin: auto;
  @media only screen and (max-width: 600px) {
    width: unset;
    margin: unset;
  }
`;

export const StoreContainer = styled.header`
  top: 0px;
  left: 0px;
  height: 70vh;
  width: 100%;

  background: radial-gradient(
      100% 100% at 50% 100%,
      rgba(19, 21, 36, 0%) 100%,
      #131524 100%
    ),
    url('/images/coffins.png');
  background-size: cover;

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }

  header {
    button {
      margin-left: 32px;
    }
  }
`;

export const StorePageSub = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;

  width: 522px;
  font-family: 'SF Pro Display';
  font-size: 18px;
  line-height: 29px;

  @media only screen and (max-width: 600px) {
    width: 343px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }
`;
export const StoreTitle = styled.div`
  font-family: 'Bebas Neue Pro';
  font-weight: 800;
  font-size: 144px;
  line-height: 120px;
  padding-top: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;

  @media only screen and (max-width: 600px) {
    justify-content: center;

    font-family: Bebas Neue Pro;
    font-style: normal;
    font-size: 80px;
    line-height: 72px;
  }
`;