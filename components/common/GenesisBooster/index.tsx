import type { NextPage } from "next";
import genesisEvent from "../../../public/images/other/genesis-event.png";
import Image from "next/image";
import { Container, GenesisContainer, Overlay } from "./styles";
import { CardSubtitle, IconStyle } from "../Cards/styles";
import { BiRightArrowAlt } from "react-icons/bi";
import CardAmount from "../Cards/CardAmount";
import Footer from "../Footer";

const GenesisBooster: NextPage = () => {
  const messages = [
    "Legendary drop rate: 1.25%",
    "Epic drop rate: 10.25%",
    "Rare drop rate: 31.25%",
    "Common drop rate: 57.5%",
    "",
    "Price: 30 $MHT",
  ];
  return (
    <>
      <Container>
        <GenesisContainer>
          <Image src={genesisEvent} alt="Genesis Event" placeholder="blur" />
          <Overlay>
            <h1>
              GENESIS
              <br />
              BOOSTER
            </h1>

            <CardSubtitle>
              <ul>
                {messages.map((text) =>
                  text ? (
                    <li key={text}>
                      <IconStyle>
                        <BiRightArrowAlt />
                      </IconStyle>
                      {text}
                    </li>
                  ) : (
                    <br />
                  )
                )}
              </ul>
            </CardSubtitle>
            <CardAmount />
          </Overlay>
        </GenesisContainer>
      </Container>
      <Footer />
    </>
  );
};

export default GenesisBooster;
