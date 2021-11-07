import styled from 'styled-components';

export const CardBody = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 40px;
  overflow: none;
  filter: drop-shadow(0 0 0.75rem black);

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

interface Props {
  index: number
}

export const CardSection = styled.section<Props>`
  margin: 20px;
  background: linear-gradient(180deg, rgba(15, 14, 35, 0) 0%, #0f0e23 0.71%);
  border-radius: 10px;
  width: 80%;
  overflow: hidden;
  height: 580px;

  
  background: ${props => props.index === 0 ? (
'linear-gradient(180deg, #0F0E23 0%, rgba(15, 14, 35, 0) 100%), linear-gradient(96.82deg, rgba(97, 126, 228, 0.3) 0%, rgba(66, 90, 215, 0.3) 100%);'
  ) : props.index === 1 ? ('linear-gradient(180deg, #0F0E23 0%, rgba(15, 14, 35, 0) 100%), linear-gradient(96.82deg, rgba(186, 97, 228, 0.3) 0%, rgba(212, 66, 215, 0.3) 100%);') : ('linear-gradient(180deg, #0F0E23 0%, rgba(15, 14, 35, 0) 100%), linear-gradient(96.82deg, rgba(56, 164, 242, 0.3) 0%, rgba(32, 155, 224, 0.3) 100%)')} ;

`;

export const CardTitle = styled.section`
  position: relative;
  top: -30%;
  left: 5%;
  font-family: 'Bebas Neue Pro Bold';
  color: white;
  font-size: 30px;
  font-weight: 800;

  margin-top: 80px;
`;

export const IconStyle = styled.section`
  color: #cb61e4;
  display: inline;
  padding: 5px;
`;

export const CardSubtitle = styled.section`
  position: relative;
  top: -30%;
  font-family: 'SF Pro Display';
  font-size: 14px;

  ul li {
    list-style-type: none;
    white-space: pre-wrap;
  }

  ul {
    height: 100px;
    padding-left: 20px;
  }
`;

export const CardImage = styled.section`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;
