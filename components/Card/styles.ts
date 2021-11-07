import styled from 'styled-components';

export const CardBody = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 100px;
  overflow: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

export const CardSection = styled.section`
  margin: 20px;
  background: linear-gradient(180deg, rgba(15, 14, 35, 0) 0%, #0f0e23 0.71%);
  border-radius: 10px;
  width: 80%;
  overflow: hidden;
  height: 500px;
`;

export const CardTitle = styled.section`
  position: relative;
  top: -30%;
  left: 5%;
  font-family: 'Bebas Neue Pro Bold';
  color: white;
  font-size: 30px;
  font-weight: 800;
`;

export const IconStyle = styled.section`
  color: #cb61e4;
  display: inline;
  padding: 5px;
`;

export const CardSubtitle = styled.section`
  position: relative;
  top: -30%;
  left: -5%;
  font-family: 'SF Pro Display'
  font-size: 14px;

  ul li {
    list-style-type: none;
  }
`;
export const CardImage = styled.section``;
