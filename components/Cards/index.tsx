import type { NextPage } from "next";
import {
  CardBody,
  CardTitle,
  CardSection,
  CardImage,
  CardSubtitle,
  IconStyle,
} from "./styles";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import legendary from "../../public/images/legendary.png";
import epic from "../../public/images/epic.png";
import mht from "../../public/images/MHT.png";
import CardAmount from "./CardAmount";

import Footer from "../Footer/index";
import { Ruler } from "../Ruler";
import React from "react";
import config from "../../utils/config";
import { useRouter } from "next/router";
import { getNetwork, getSale } from "../../utils/blockchain";

const Cards: NextPage = () => {
  const router = useRouter();
  const network = getNetwork(router);
  const sale = getSale(router);
  const MHT_TO_BUSD = Number(config[network].WhitelistSale[sale].MHTtoBUSD);

  const minBusdAmount =
    Number(config[network].WhitelistSale[sale].minMhtAmount) *
    Number(config[network].WhitelistSale[sale].MHTtoBUSD);
  const maxBusdAmount =
    Number(config[network].WhitelistSale[sale].maxMhtAmount) *
    Number(config[network].WhitelistSale[sale].MHTtoBUSD);
  const idoUnlock = config[network].WhitelistSale[sale].unlockAtIGOPercent;
  const vesting = config[network].WhitelistSale[sale].vestingPeriodMonths;
  const ITEMS = [
    {
      image: mht,
      title: "BUY",
      sub: "$MHT",
      buyMht: true,
      subtitles: [
        `Price: 1 $MHT = ${MHT_TO_BUSD} $BUSD`,
        `Minimum purchase: ${minBusdAmount} $BUSD`,
        `Maximum purchase: ${maxBusdAmount} $BUSD`,
        `IDO unlock: ${idoUnlock}%`,
        `Vesting: ${vesting} months`,
      ],
    },

    {
      image: epic,
      title: "EPIC",
      sub: "BOOSTER",
      subtitles: [
        "Price: 1 EPIC booster = 75 $BUSD",
        "Probabilities: 99% Epic Mouse Hero NFT",
        "Probabilities: 1% Legendary Mouse Hero NFT ",
        "Maximum purchase: 6 ",
        "",
      ],
    },

    {
      image: legendary,
      title: "LEGENDARY",
      sub: "BOOSTER",
      subtitles: [
        "Price: 1 LEGENDARY booster = 250 $BUSD",
        "Probabilities: 100% Legendary Mouse Hero NFT ",
        "Maximum purchase: 2 ",
        "",
        "",
      ],
    },
  ];

  const iterateThroughItems = () => {
    return ITEMS.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <CardSection index={index}>
            <CardImage>
              <Image
                src={item.image}
                width="250px"
                height="300px "
                alt="page-items"
              />
            </CardImage>
            <CardTitle>
              {item.title}
              <br />
              {item.sub}
            </CardTitle>
            <CardSubtitle>
              <ul key={index}>
                {item.subtitles.map((text, v) => {
                  return text ? (
                    <li key={v}>
                      <IconStyle>
                        <BiRightArrowAlt />
                      </IconStyle>
                      {text}
                    </li>
                  ) : (
                    <br />
                  );
                })}
              </ul>
            </CardSubtitle>
            <CardAmount index={index} />
          </CardSection>
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <CardBody>{iterateThroughItems()}</CardBody>
      <Ruler />
      <Footer />
    </>
  );
};

export default Cards;
