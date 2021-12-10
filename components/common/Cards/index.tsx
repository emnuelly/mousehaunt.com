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

const BOOSTER_OWNER = "0x2124b4912532f6cD235081fEA2223EB3C0Af301d";

const Cards: NextPage = () => {
  const { network, contracts, account } = useContext(StoreContext);
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

  const [epicAllowance, setEpicAllowance] = useState("");
  const [rareAllowance, setRareAllowance] = useState("");

  const [epicLimit, setEpicLimit] = useState("");
  const [rareLimit, setRareLimit] = useState("");

  useEffect(() => {
    if (contracts?.boosterSale3.address && account) {
      (async () => {
        try {
          const epic = await contracts?.boosterSale3.whitelist(
            account,
            config[network].BMHTE.address
          );
          const rare = await contracts?.boosterSale3.whitelist(
            account,
            config[network].BMHTR.address
          );
          if (epic) {
            setEpicAllowance(epic.toString());
          }
          if (rare) {
            setRareAllowance(rare.toString());
          }
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [account, contracts, network]);

  useEffect(() => {
    if (contracts?.bmhtr.address && contracts?.bmhte.address && account) {
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
        `Price: $${config[network].BoosterSale.PrivateSale3.BMHTE.busdPrice}`,
        "",
        `Remaining boosters: ${epicLimit}`,
        `Allowance: ${epicAllowance}`,
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
        `Allowance: ${rareAllowance}`,
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
