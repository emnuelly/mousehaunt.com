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
import coffin from "../../public/images/coffin-store.png";
import mht from "../../public/images/MHT.png";
import CardAmount from "./CardAmount";

import Footer from "../Footer/index";
import { Ruler } from "../Ruler";
import React from "react";

const ITEMS = [
  {
    image: mht,
    title: "BUY",
    sub: "$MHT",
    buyMht: true,
    subtitles: [
      "Price: 1 $MHT = 0.15 $BUSD",
      "Minimum purchase: 75 $BUSD",
      "Maximum purchase: 600 $BUSD",
      "IDO unlock: 8% ",
      "Vesting: 12 months",
    ],
    icon: <BiRightArrowAlt />,
  },

  {
    image: coffin,
    title: "EPIC",
    sub: "BOOSTER",
    subtitles: [
      "Price: 1 EPIC booster = 75 $BUSD",
      "Probabilities: 99% Epic Mouse Hero NFT",
      "Probabilities: 1% Legendary Mouse Hero NFT ",
      "Maximum purchase: 6 ",
      "",
    ],
    legendary: false,
    icon: <BiRightArrowAlt />,
  },

  {
    image: coffin,
    title: "LEGENDARY",
    sub: "BOOSTER",
    subtitles: [
      "Price: 1 LEGENDARY booster = 250 $BUSD",
      "Probabilities: 100% Legendary Mouse Hero NFT ",
      "",
      "Maximum purchase: 2 ",
      "",
    ],
    legendary: true,
    icon: <BiRightArrowAlt />,
  },
];

const Cards: NextPage = () => {
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
              <ul>
                {item.subtitles.map((text, v) => {
                  return text ? (
                    <li key={v}>
                      <IconStyle>{item.icon}</IconStyle>
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
