import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import mht from "../../../public/images/other/MHT.png";
import legendary from "../../../public/images/other/legendary.png";
import epic from "../../../public/images/other/epic.png";
import rare from "../../../public/images/other/rare.png";

import { Styles, StatusBadge } from "./styles";
import { StoreContext } from "../../../contexts/StoreContext";
import { ethers } from "ethers";
import config from "../../../utils/config";
import { truncate } from "../../../utils/blockchain";
import { format, add } from "date-fns";

const Table: React.FC = () => {
  const { userInfoDetailed, contracts, network } = useContext(StoreContext);
  const [igoAmount, setIgoAmount] = useState("");
  const [monthlyAmount, setMonthlyAmount] = useState("");

  const date = (i: number) =>
    format(add(new Date("2021-12-21"), { months: i }), "MMM ");

  const mhts = Array.from(Array(12).keys()).map((i) => ({
    item: "$MHT",
    itemSub: "Mouse Haunt Token",
    type: monthlyAmount,
    typeSub: `Claimable ${i + 1} month${!i ? "" : "s"} after IGO (${date(
      i + 1
    )})`,
    image: mht,
    status: "LOCKED",
  }));

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
    },
    {
      item: "BMHTE",
      itemSub: "Mouse Haunt Booster EPIC",
      type: userInfoDetailed?.boosters.epic,
      typeSub: "Available on wallet",
      image: epic,
      status: "AVAILABLE",
    },
    {
      item: "BMHTR",
      itemSub: "Mouse Haunt Booster RARE",
      type: userInfoDetailed?.boosters.rare,
      typeSub: "Available on wallet",
      image: rare,
      status: "AVAILABLE",
    },
    {
      item: "$MHT",
      itemSub: "Mouse Haunt Token",
      type: igoAmount,
      typeSub: "Claimable on IGO (December 21th 2021)",
      image: mht,
      status: "LOCKED",
    },
    ...mhts,
  ];

  return (
    <Styles>
      <table>
        <tr>
          <th>Item</th>
          <th></th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        {data.map((e, index) => (
          <tr key={index}>
            <td>
              <Image alt="MHT" width="100" height="100" src={e.image} />
            </td>
            <td>
              <div>{e.item}</div>
              <div>
                <b>{e.itemSub}</b>
              </div>
            </td>
            <td>
              <div>{e.type}</div>
              <div>
                <b> {e.typeSub}</b>
              </div>
            </td>
            <td>
              <StatusBadge status={e.status}>
                <div>{e.status}</div>
              </StatusBadge>
            </td>
          </tr>
        ))}
      </table>
    </Styles>
  );
};

export default Table;
