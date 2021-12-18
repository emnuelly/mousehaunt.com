import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import mht from "../../../public/images/other/MHT.png";
import legendary from "../../../public/images/other/legendary.png";
import epic from "../../../public/images/other/epic.png";
import rare from "../../../public/images/other/rare.png";

import { Styles, Status } from "./styles";
import { StoreContext } from "../../../contexts/StoreContext";
import { ethers } from "ethers";
import config from "../../../utils/config";
import { addToWallet, truncate } from "../../../utils/blockchain";
import { format, add } from "date-fns";
import Countdown from "../Countdown";

const Table: React.FC = () => {
  const { userInfoDetailed, contracts, network } = useContext(StoreContext);
  const [igoAmount, setIgoAmount] = useState("");
  const [monthlyAmount, setMonthlyAmount] = useState("");
  const igoDate = new Date(
    Number(config[network].WhitelistSale.igoTimestamp) * 1000
  );

  const countdown = {
    date: igoDate,
    endText: "$MHT AVAILABLE FOR CLAIMING!",
    startText: "$MHT AVAILABLE FOR CLAIMING IN",
  };

  const date = (months: number) =>
    format(add(igoDate, { days: 30 * months }), "PPP HH:mm") + " UTC";

  const mhts = Array
    .from(Array(13).keys())
    .map((months) => {
      const status = add(new Date(), {days:30*months}).getTime() < igoDate.getTime() ? "LOCKED" : "CLAIM"
      return {
        item: "$MHT",
        itemSub: "Mouse Haunt Token",
        type: !months ? igoAmount : monthlyAmount,
        typeSub: `Claimable on ${date(months)})`,
        image: mht,
        status,
        title: status === 'CLAIM' ? 'Claim $MHT' : 'Locked',
      }
    })

  useEffect(() => {
    (async () => {
      const unlockAtIGOPercent =
        config[network].WhitelistSale.PrivateSale2.unlockAtIGOPercent;
      const vestingPeriodMonths =
        config[network].WhitelistSale.PrivateSale2.vestingPeriodMonths;
      const igo =
        unlockAtIGOPercent && userInfoDetailed?.totalTokens
          ? ethers.utils.formatEther(
              ethers.utils
                .parseEther(userInfoDetailed.totalTokens)
                .mul(unlockAtIGOPercent)
                .div(100)
                .toString()
            )
          : "";
      const amount =
        unlockAtIGOPercent &&
        userInfoDetailed?.totalTokens &&
        vestingPeriodMonths
          ? ethers.utils.formatEther(
              ethers.utils
                .parseEther(userInfoDetailed.totalTokens)
                .mul(100 - Number(unlockAtIGOPercent))
                .div(100)
                .div(vestingPeriodMonths)
                .toString()
            )
          : "";
      setIgoAmount(truncate(igo));
      setMonthlyAmount(truncate(amount));
    })();
  }, [contracts, userInfoDetailed, network]);

  const data = [
    {
      item: "BMHTL",
      itemSub: "Mouse Haunt Booster LEGENDARY",
      type: userInfoDetailed?.boosters.legendary,
      typeSub: "Available on wallet",
      image: legendary,
      status: "AVAILABLE",
      title: 'Add to wallet',
    },
    {
      item: "BMHTE",
      itemSub: "Mouse Haunt Booster EPIC",
      type: userInfoDetailed?.boosters.epic,
      typeSub: "Available on wallet",
      image: epic,
      status: "AVAILABLE",
      title: 'Add to wallet',
    },
    {
      item: "BMHTR",
      itemSub: "Mouse Haunt Booster RARE",
      type: userInfoDetailed?.boosters.rare,
      typeSub: "Available on wallet",
      image: rare,
      status: "AVAILABLE",
      title: 'Add to wallet',
    },
    ...mhts,
  ];

  const onClick = (row: { item: string }) => {
    switch(row.item) {
      case 'LOCKED': {
        return;
      }
      case 'AVAILABLE': {
        addToWallet(network)
        return;
      }
      case 'CLAIM': {
        contracts?.preSale?.claim()
      }
    }
  };

  return (
    <Styles>
      <Countdown {...countdown} />
      <table>
        <tr>
          <th>Item</th>
          <th></th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        {data.map((row, index) => (
          <tr key={index}>
            <td>
              <Image alt="MHT" width="100" height="100" src={row.image} />
            </td>
            <td>
              <div>{row.item}</div>
              <div>
                <b>{row.itemSub}</b>
              </div>
            </td>
            <td>
              <div>{row.type}</div>
              <div>
                <b> {row.typeSub}</b>
              </div>
            </td>
            <td>
              <Status title={row.title} status={row.status} onClick={() => onClick(row)}>
                {row.status}
              </Status>
            </td>
          </tr>
        ))}
      </table>
    </Styles>
  );
};

export default Table;
