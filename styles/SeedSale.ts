import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 0.3;

    @media only screen and (max-width: 600px) {
      top: 0;
    }
  }
`;

export const Hero = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  z-index: 1;

  @media only screen and (max-width: 600px) {
  }

  .top {
    font-family: "Bebas Neue Pro";
    font-size: 140px;
    font-weight: 700;
    line-height: 0.8;
    margin-top: 40px;
    color: white;

    @media only screen and (max-width: 600px) {
      font-size: 140px;
    }
  }

  .tokens {
    display: flex;
    flex-direction: row;
    justify-content: center;

    div {
      margin-left: 20px;
      margin-right: 20px;
    }
  }

  .bottom {
    align-self: center;

    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const Footer = styled.div`
  color: white;
  position: fixed;
  bottom: 0px;
  z-index: 1;
  font-size: 30px;

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
  }

  @media only screen and (max-width: 600px) {
    font-size: 75%;
  }
`;
