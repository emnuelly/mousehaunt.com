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

export const StoreContainer = styled.div`
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

export const StoreSuccessContainer = styled.div`
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }

  header {
    button {
      margin-left: 32px;
    }
  }

  h1,
  h2 {
    font-family: 'Bebas Neue Pro';
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;

    flex: none;
    flex-grow: 0;
    order: 0;

    b {
      order: 1;
      background-image: linear-gradient(96.82deg, #0882f2 0%, #1fc6ec 100%);

      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }
  }

  h2 {
    font-size: 32px;
    line-height: 32px;
    margin-top: 0px;
  }
`;

export const StoreInventoryContainer = styled.div`
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }

  header {
    button {
      margin-left: 32px;
    }
  }

  h1,
  h2 {
    font-family: 'Bebas Neue Pro';
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;

    flex: none;
    flex-grow: 0;
    order: 0;

    b {
      order: 1;
    background-image: linear-gradient(96.82deg, #cb61e4 0%, #be42d7 100%);

      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }
  }

  h2 {
    font-size: 32px;
    line-height: 32px;
    margin-top: 0px;
  }
`;

export const StoreSuccessBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 128px);
  width: 100%;
`;

export const StoreInventoryBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SuccessCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 20px;

  width: 420px;

  background: #0f0e23;
  /* Primary/Blue 1 */

  border: 1px solid #29274b;
  box-sizing: border-box;

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  border-radius: 12px;

  button {
    width: 180px;
    align-self: center;
  }
`;

export const SuccessCardImage = styled.div`
  align-self: center;
  justify-content: center;
  align-items: center;
  display: flex;

  height: 336px;
  width: 300px;
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

export const StoreInventory = styled.div`
  font-family: 'Bebas Neue Pro';
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
  padding-top: 50px;
  background: linear-gradient(#ee0ca1, #d742b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

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
export const StoreSuccessDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:20px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span:first-of-type {
      color: #848484;
    }
  }
`

export const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  ul {
    padding-left: 0px;
  }
  li {
    display: inline-block;
    font-size: 1em;
    list-style-type: none;
    padding: 0.5em;
    text-transform: uppercase;
  }
  li span {
    display: block;
    font-size: 48px;
    text-align: center;
  }

`