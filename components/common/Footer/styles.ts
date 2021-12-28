import styled from "styled-components";

export const ContainerBorder = styled.div`
  justify-content: center;
  text-align: center;
  height: 4px;
  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);

`;

export const Container = styled.section`
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 475px;
  position: relative;
  z-index: 2;

  img {
    width: 808px;
  }
`;

export const ImageBackground = styled.div`
  height: 475px;
  margin-top: 90px;
  background-image: url("/images/footer.png");
  background-repeat: no-repeat;
  background-position: bottom center;
  mix-blend-mode: multiply; 
 
`;

export const Title = styled.div`
  padding-bottom: 36px;

  font-family: "Bebas Neue Pro";
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;

  flex: none;
  flex-grow: 0;
`;

export const Logo = styled.div`
  width: 144px;
  height: 144px;

  margin: 12px 0px;
  
  margin-top: 50px;

  align-self: center;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    padding: 10px;
  }

  svg {
    width: 36px;
    height: 36px;
  }
`;

export const Copy = styled.div`
  font-family: Bebas Neue Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    text-align: center;

    color: #FFFFFF;
    margin-top: 90px;
`;

export const Ellipse1 = styled.div`
  position: absolute;
  width: 445px;
  height: 445px;
  left: 0px;

  background: linear-gradient(96.82deg, #0882F2 0%, #1FC6EC 100%);
    opacity: 0.35;
    filter: blur(235px);

  @media only screen and (max-width: 1280px) {
    transform: scale(0.5);
  }
`;

export const Ellipse2 = styled.div`
  position: absolute;
  width: 445px;
  height: 445px;
  right: 0px;

  position: absolute;
  background: linear-gradient(96.82deg, #EE0CA1 0%, #D742B6 100%);
  opacity: 0.35;
  filter: blur(235px);

  @media only screen and (max-width: 1280px) {
    transform: scale(0.5);
  }
`;
