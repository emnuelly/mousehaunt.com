import type { NextPage } from "next";
import genesisEvent from "../../../public/images/other/genesis-event.png";
import genesisEventMobile from "../../../public/images/other/genesis-event-mobile.png";
import Image from "next/image";
import { Container, GenesisContainer, Overlay, ImageContainer } from "./styles";
import { CardSubtitle, IconStyle } from "../Cards/styles";
import { BiRightArrowAlt } from "react-icons/bi";
import CardAmount from "../Cards/CardAmount";
import Footer from "../Footer";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../contexts/StoreContext";
import config from "../../../utils/config";

const GenesisBooster: NextPage = () => {
  const { userInfoDetailed, contracts, network } = useContext(StoreContext);
  const [remaining, setRemaining] = useState("");

  useEffect(() => {
    (async () => {
      const allowance = await contracts?.bmhtg.allowance(
        config[network].BMHTG.owner,
        config[network].BoosterSale.Genesis.address
      );
      if (allowance) {
        setRemaining(allowance.toString());
      }
    })();
  }, [contracts, network]);

  const messages = [
    "Legendary drop rate: 1.25%",
    "Epic drop rate: 10%",
    "Rare drop rate: 31.25%",
    "Common drop rate: 57.5%",
    "",
    `Remaining: ${remaining}`,
    `Price: ${config[network].BoosterSale.Genesis.mhtPrice} $MHT`,
    `Allowance: ${userInfoDetailed?.allowance.genesis ?? ""}`,
  ];
  return (
    <>
      <Container>
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
            <CardAmount />
          </Overlay>
        </GenesisContainer>
      </Container>
      <Footer />
    </>
  );
};

export default GenesisBooster;
