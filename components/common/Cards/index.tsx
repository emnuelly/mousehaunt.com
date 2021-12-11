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
import epic from "../../../public/images/other/epic.png";
import rare from "../../../public/images/other/rare.png";
import mht from "../../../public/images/other/MHT.png";
import CardAmount from "./CardAmount";

import Footer from "../Footer";
import { Ruler } from "../Ruler";
import React, { useContext, useEffect, useState } from "react";
import config from "../../../utils/config";
import { StoreContext } from "../../../contexts/StoreContext";
import { ethers } from "ethers";

const Cards: NextPage = () => {
  const { network, contracts, account, userInfoDetailed } =
    useContext(StoreContext);
  const MHT_TO_BUSD = Number(
    config[network].WhitelistSale.PrivateSale3.MHTtoBUSD
  );

  const maxBusdAmount =
    Number(config[network].WhitelistSale.PrivateSale3.maxMhtAmount) *
    Number(config[network].WhitelistSale.PrivateSale3.MHTtoBUSD);
  const idoUnlock =
    config[network].WhitelistSale.PrivateSale3.unlockAtIGOPercent;
  const vesting =
    config[network].WhitelistSale.PrivateSale3.vestingPeriodMonths;

  const [epicLimit, setEpicLimit] = useState("");
  const [rareLimit, setRareLimit] = useState("");

  const BOOSTER_OWNER = config[network].BMHTL.owner;

  useEffect(() => {
    if (
      contracts?.privateSale3.address &&
      contracts?.bmhtr.address &&
      contracts?.bmhte.address &&
      account
    ) {
      (async () => {
        try {
          const epic = await contracts?.bmhte.allowance(
            BOOSTER_OWNER,
            config[network].BoosterSale.PrivateSale3.address
          );
          if (epic) {
            setEpicLimit(ethers.utils.formatEther(epic).replace(/\..*/, ""));
          }
          const rare = await contracts?.bmhtr.allowance(
            BOOSTER_OWNER,
            config[network].BoosterSale.PrivateSale3.address
          );
          if (rare) {
            setRareLimit(rare.toString());
          }
        } catch (err) {
          console.log(
            BOOSTER_OWNER,
            config[network].BoosterSale.PrivateSale3.address
          );
          console.log(err);
        }
      })();
    }
  }, [account, contracts, network, BOOSTER_OWNER]);

  const ITEMS = [
    {
      image: mht,
      title: "BUY",
      sub: "$MHT",
      buyMht: true,
      subtitles: [
        `Price: 1 $MHT = ${MHT_TO_BUSD} $BUSD`,
        `Maximum purchase: ${maxBusdAmount} $BUSD`,
        `IDO unlock: ${idoUnlock}%`,
        `Vesting: ${vesting} months`,
        "",
        `Allowance: ${userInfoDetailed?.allowance.mht || ""}`,
      ],
    },

    {
      image: epic,
      title: "EPIC",
      sub: "BOOSTER",
      subtitles: [
        "Probabilities: 99% Epic Mouse Hero NFT",
        "Probabilities: 1% Legendary Mouse Hero NFT ",
        `Price: $${config[network].BoosterSale.PrivateSale3.BMHTE.busdPrice}`,
        "",
        `Remaining boosters: ${epicLimit}`,
        `Allowance: ${userInfoDetailed?.allowance.epic || ""}`,
      ],
    },

    {
      image: rare,
      title: "RARE",
      sub: "BOOSTER",
      subtitles: [
        "Probabilities: 96% Rare Mouse Hero NFT",
        "Probabilities: 3.7% Epic Mouse Hero NFT",
        "Probabilities: 0.3% Legendary Mouse Hero NFT ",
        `Price: $${config[network].BoosterSale.PrivateSale3.BMHTR.busdPrice}`,
        "",
        `Remaining boosters: ${rareLimit}`,
        `Allowance: ${userInfoDetailed?.allowance.rare || ""}`,
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
                width={index === 0 ? "280.5px" : "250px"}
                height={index === 0 ? "320" : "300px"}
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
                      <IconStyle>
                        <BiRightArrowAlt />
                      </IconStyle>
                      {text}
                    </li>
                  ) : (
                    <br key={v} />
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
