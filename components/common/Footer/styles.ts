import styled from "styled-components";

export const Container = styled.section`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  img {
    width: 808px;
  }
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

export const Ellipse1 = styled.div`
  position: absolute;
  width: 445px;
  height: 445px;
  left: 0px;

  background: linear-gradient(96.82deg, #0882f2 0%, #1fc6ec 100%);
  opacity: 0.15;
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
  background: linear-gradient(96.82deg, #cb61e4 0%, #be42d7 100%);
  opacity: 0.15;
  filter: blur(235px);

  @media only screen and (max-width: 1280px) {
    transform: scale(0.5);
  }
`;
