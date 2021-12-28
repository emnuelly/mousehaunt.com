import styled from "styled-components";

export const Container = styled.section`
  top: 0px;
  left: 0px;
  height: 100vh;

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 90px - 32px);
  justify-content: center;

  @media only screen and (max-width: 600px) {
    height: calc(100vh - 60px);
    text-align: center;
    align-items: center;
  }
`;

export const BodyContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  small {
    font-size: 110%;
  }
`;

export const Title = styled.div`
  font-family: "Bebas Neue Pro";
  font-weight: 800;
  font-size: 56px;
  line-height: 64px;
  font-style: normal;


  width: 408px;
  display: inline-block;
  align-items: center;
  text-transform: uppercase;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 16px 0px;
  
  text {
     background: -webkit-linear-gradient(#EE0CA1, #D742B6);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
  }

  @media only screen and (max-width: 600px) {
    justify-content: center;

    font-family: Bebas Neue Pro;
    font-style: normal;
    font-size: 20px;
    line-height: 20px;
  }
`;

export const Subtitle = styled.div`
  margin-top: 16px;
  margin-bottom: 40px;

  width: 408px;
  font-family: "SF Pro Display";
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

// export const Stores = styled.div`
//   display: flex;
//   flex-direction: column;
//
//   span {
//     margin-right: 8px;
//   }
//
//   @media only screen and (max-width: 600px) {
//     div {
//       flex-direction: row;
//     }
//   }
//
//   a {
//     width: 148px;
//     margin-bottom: 40px;
//
//     @media only screen and (max-width: 600px) {
//       align-self: center;
//     }
//   }
// `;

export const Left = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Right = styled.div`
  filter: drop-shadow(5px 21px 46px rgba(0, 0, 0, 0.7));
`;

// export const ButtonRightAbsolute = styled.div`
//   position: absolute;
//   left: 85%;
//   &:hover {
//     cursor: pointer;
//   }
//   @media only screen and (max-width: 800px) {
//     left: 80%;
//   }
// `;
//
// export const Phone = styled.div`
//   width: 600px;
//   height: 293px;
//
//   filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.5));
//   background-image: url("/images/phone-frames/iphone-600.png");
//   background-repeat: no-repeat;
//
//   @media only screen and (max-width: 600px) {
//     background-image: url("/images/phone-frames/iphone-320.png");
//     width: 320px;
//     height: 156px;
//   }
// `;
//
// export const Video = styled.div`
//   margin-top: 40px;
//
//   width: 600px;
//   height: 293px;
//   align-self: center;
//
//   overflow: hidden;
//   display: block;
//
//   video {
//     background-position: center center;
//     background-repeat: no-repeat;
//
//     width: 590px;
//     height: auto;
//
//     margin-top: -310px;
//     border-radius: 90px;
//
//     margin-left: 5px;
//   }
//
//   @media only screen and (max-width: 600px) {
//     width: 320px;
//     height: 156px;
//
//     video {
//       width: 314px;
//       margin-top: -166px;
//       border-radius: 45px;
//
//       margin-left: unset;
//     }
//   }
// `;
//
// export const DiscordButton = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: inherit;
//   align-items: center;
//
//   margin-bottom: 24px;
//
//   a {
//     text-align: center;
//     display: flex;
//     flex-direction: column;
//     margin-top: auto;
//     margin-right: 40px;
//     width: inherit;
//   }
// }
// `;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: inherit;
  align-items: center;
`


export const ButtonDark = styled.a`
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 16px;

  height: 48px;
  background: #29274B;
  border: none;
  border-radius: 10px;

  font-family: "Bebas Neue Pro Bold";
  font-size: 20px;
  line-height: 24px;

  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 12px 32px;

  cursor: pointer;

  z-index: 1;

  @media only screen and (max-width: 600px) {
    min-width: 121px;
    min-height: 48px;
    margin: 0px 10px;
    padding: unset;
  }
`;

