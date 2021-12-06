import styled from 'styled-components';

export const Content = styled.section`
  width: 1200px;
  margin: auto;
  @media only screen and (max-width: 600px) {
    width: unset;
    margin: unset;
  }
`;

export const CareerContainer = styled.div`
  top: 0px;
  left: 0px;
  height: 70vh;
  width: 100%;
  margin-bottom: 5%;
  padding-top: 120px;
  @media only screen and (max-width: 600px) {
    width: 100vw;
  }

  header {
    button {
      margin-left: 32px;
    }
  }
`;

export const CareerPageSub = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
  background-color: #0f0e23;

  width: 100%
  font-family: 'SF Pro Display';
  font-size: 18px;
  line-height: 29px;
  height: auto;
  border: 1px solid #29274B;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    width: 95%;
    height: auto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const CareerPageSubText = styled.p`
  display: flex;
  width: 70%;
  margin: 0 auto;
  padding-top: 50px;
  justify-content: center;

  margin-bottom: 50px;
  text-align: left;
  font-family: 'SF Pro Display';
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  color: #ffff;
`;

export const CareerTitle = styled.div`
  font-family: 'Bebas Neue Pro';
  font-weight: 800;
  font-size: 144px;
  line-height: 120px;
  padding-top: 30px;
  letter-spacing: 10px;

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

export const CardsColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    display: block;
    margin-bottom: 20px;
    margin-top: 50%;
  }
`;

export const Cards = styled.div`
  background-color: #0f0e23;
  border: 1px solid #29274b;
  border-radius: 10px;
  flex: 0 0 30%;
  margin: 0 15px 40px;
  margin-bottom: 25%;

  @media screen and (max-width: 600px) {
    flex: 0 0 100%;
  }
`;

export const CardsTitle = styled.h2`
  margin-top: 5%;
  margin-left: 10%;
  font-family: 'Bebas Neue Pro';
  font-weight: 700px;
  font-size: 28px;
`;
export const CardsBody = styled.div`
  margin-left: 10%;
  font-family: 'SF Pro Display';
  font-weight: 400px;
  font-size: 18px;
  margin-bottom: 40px;
  margin-top: 10px;
`;
export const CardsItems = styled.div`
  text-align: left;
`;
export const CardsButton = styled.div`
  font-size: 20px;
  background: -webkit-linear-gradient(#ee0ca1, #d742b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 30px;
  margin-right: 10%;
  letter-spacing: 1px;
  :hover {
    cursor: pointer;
  }
`;

export const IconStyle = styled.div`
  display: flex;
  color: #ee0ca1;
  align-items: center;
`;

export const IconButton = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #ee0ca1;
  align-items: center;
`;
