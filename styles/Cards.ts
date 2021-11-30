import styled from 'styled-components';

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

export const CardsBody = styled.div`
  font-family: 'SF Pro Display';
  font-weight: 400px;
  font-size: 18px;
  margin-bottom: 40px;
`;

export const CardsTitle = styled.div`
  font-family: 'Bebas Neue Pro';
  font-weight: 700px;
  font-size: 28px;
`;

export const ColorHighlight = styled.div`
  background: -webkit-linear-gradient(#ee0ca1, #d742b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const AlignItemsLeft = styled.div`
  text-align: left;
`;

export const AlignItemsRight = styled.div`
  text-align: right;
`;

export const AlignItemsCenter = styled.div`
  text-align: center;
`;
