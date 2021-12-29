import type { NextPage } from "next";
import genesisEvent from "../../../public/images/other/genesis-event.png";
import genesisEventMobile from "../../../public/images/other/genesis-event-mobile.png";
import Image from "next/image";
import { Container, GenesisContainer, Overlay, ImageContainer } from "./styles";
import { CardSubtitle, IconStyle } from "../Cards/styles";
import { BiRightArrowAlt } from "react-icons/bi";
import CardAmount from "../Cards/CardAmount";
import Footer from "../Footer";
import { useState } from "react";
import Countdown from "../Countdown";

const GenesisBooster: NextPage = () => {
  const [hasEnded, setHasEnded] = useState(false);

  const messages = [
    "Legendary drop rate: 1.25%",
    "Epic drop rate: 10%",
    "Rare drop rate: 31.25%",
    "Common drop rate: 57.5%",
  ];
  return (
    <>
      <Container>
        <Countdown
          startText={"GENESIS EVENT ENDS IN"}
          endText={"GENESIS EVENT ENDED"}
          date={new Date("2021-12-25T16:00:00.000Z")}
          setHasEnded={setHasEnded}
        />
        <GenesisContainer>
          <ImageContainer>
            <div className="desktop">
              <Image
                src={genesisEvent}
                alt="Genesis Event"
                placeholder="blur"
              />
            </div>
            <div className="mobile">
              <Image
                src={genesisEventMobile}
                alt="Genesis Event"
                placeholder="blur"
              />
            </div>
          </ImageContainer>
          <Overlay>
            <h1>
              GENESIS
              <br />
              BOOSTER
            </h1>

            <CardSubtitle>
              <ul>
                {messages.map((text, i) =>
                  text ? (
                    <li key={i}>
                      <IconStyle>
                        <BiRightArrowAlt />
                      </IconStyle>
                      {text}
                    </li>
                  ) : (
                    <br key={i} />
                  )
                )}
              </ul>
            </CardSubtitle>
            {hasEnded ? null : <CardAmount />}
          </Overlay>
        </GenesisContainer>
      </Container>
      <Footer />
    </>
  );
};

export default GenesisBooster;
