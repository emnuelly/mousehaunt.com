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
import React, { useContext, useEffect, useState } from "react";
import config from "../../utils/config";
import { StoreContext } from "../../contexts/StoreContext";
import { ethers } from "ethers";

const BOOSTER_OWNER = "0x2124b4912532f6cD235081fEA2223EB3C0Af301d";

const Cards: NextPage = () => {
  const { network, contracts, account, userInfoDetailed } =
    useContext(StoreContext);
  const MHT_TO_BUSD = Number(
    config[network].WhitelistSale.PrivateSale2.MHTtoBUSD
  );

  const minBusdAmount =
    Number(config[network].WhitelistSale.PrivateSale2.minMhtAmount) *
    Number(config[network].WhitelistSale.PrivateSale2.MHTtoBUSD);
  const maxBusdAmount =
    Number(config[network].WhitelistSale.PrivateSale2.maxMhtAmount) *
    Number(config[network].WhitelistSale.PrivateSale2.MHTtoBUSD);
  const idoUnlock =
    config[network].WhitelistSale.PrivateSale2.unlockAtIGOPercent;
  const vesting =
    config[network].WhitelistSale.PrivateSale2.vestingPeriodMonths;

  const [legendaryAllowance, setLegendaryAllowance] = useState("");
  const [epicAllowance, setEpicAllowance] = useState("");

  const [legendaryLimit, setLegendaryLimit] = useState("");

  useEffect(() => {
    if (contracts?.boosterSale2.address && account) {
      (async () => {
        try {
          const legendary = await contracts?.boosterSale2.whitelist(
            account,
            config[network].BMHTL.address
          );
          const epic = await contracts?.boosterSale2.whitelist(
            account,
            config[network].BMHTE.address
          );
          if (legendary) {
            setLegendaryAllowance(legendary.toString());
          }
          if (epic) {
            setEpicAllowance(epic.toString());
          }
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [account, contracts, network]);

  useEffect(() => {
    if (contracts?.bmhtl.address && account) {
      (async () => {
        try {
          const legendary = await contracts?.bmhtl.allowance(
            BOOSTER_OWNER,
            config[network].BoosterSale.PrivateSale2.address
          );
          if (legendary) {
            setLegendaryLimit(
              ethers.utils.formatEther(legendary).replace(/\..*/, "")
            );
          }
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [account, contracts, network]);

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
      ],
    },

    {
      image: epic,
      title: "EPIC",
      sub: "BOOSTER",
      subtitles: [
        "Probabilities: 99% Epic Mouse Hero NFT",
        "Probabilities: 1% Legendary Mouse Hero NFT ",
        `Price: $${config[network].BoosterSale.PrivateSale2.BMHTE.busdPrice}`,
        "",
        ``,
        `Allowance: ${epicAllowance}`,
      ],
    },

    {
      image: legendary,
      title: "LEGENDARY",
      sub: "BOOSTER",
      subtitles: [
        "Probabilities: 100% Legendary Mouse Hero NFT ",
        "",
        `Price: $${config[network].BoosterSale.PrivateSale2.BMHTL.busdPrice}`,
        "",
        `Remaining boosters: ${legendaryLimit}`,
        `Allowance: ${legendaryAllowance}`,
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
