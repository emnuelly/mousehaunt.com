import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import mht from "../../public/images/MHT.png";
import legendary from "../../public/images/legendary.png";
import epic from "../../public/images/epic.png";

import { Styles, StatusBadge } from "./styles";
import { StoreContext } from "../../contexts/StoreContext";
import { ethers } from "ethers";
import { useContracts } from "../../hooks/useContracts";

function truncate(str: string, maxDecimalDigits = 3) {
  if (str.includes(".")) {
    const parts = str.split(".");
    return parts[0] + "." + parts[1].slice(0, maxDecimalDigits);
  }
  return str;
}

const Table: React.FC = () => {
  const { userInfo } = useContext(StoreContext);
  const contracts = useContracts();
  const [igoAmount, setIgoAmount] = useState("");
  const [monthlyAmount, setMonthlyAmount] = useState("");

  const mhts = Array.from(Array(12).keys()).map((i) => ({
    item: "$MHT",
    itemSub: "Mouse Haunt Token",
    type: monthlyAmount,
    typeSub: `Claimable ${i + 1} month${!i ? "" : "s"} after IGO`,
    image: mht,
    status: "LOCKED",
  }));

  useEffect(() => {
    (async () => {
      const unlockAtIGOPercent =
        await contracts?.whitelistSale.unlockAtIGOPercent();
      const vestingPeriodMonths =
        await contracts?.whitelistSale.vestingPeriodMonths();
      const igo = unlockAtIGOPercent
        ? ethers.utils.formatEther(
            ethers.utils
              .parseEther(userInfo?.totalTokens ?? "")
              .mul(unlockAtIGOPercent)
              .div(100)
              .toString()
          )
        : "";
      const amount = unlockAtIGOPercent
        ? ethers.utils.formatEther(
            ethers.utils
              .parseEther(userInfo?.totalTokens ?? "")
              .mul(100 - Number(unlockAtIGOPercent))
              .div(100)
              .div(vestingPeriodMonths ?? "")
              .toString()
          )
        : "";
      setIgoAmount(truncate(igo));
      setMonthlyAmount(truncate(amount));
    })();
  }, [contracts, userInfo]);

  const data = [
    {
      item: "BMHTL",
      itemSub: "Mouse Haunt Booster LEGENDARY",
      type: userInfo?.boosters.legendary,
      typeSub: "Available on wallet",
      image: legendary,
      status: "AVAILABLE",
    },
    {
      item: "BMHTE",
      itemSub: "Mouse Haunt Booster EPIC",
      type: userInfo?.boosters.epic,
      typeSub: "Available on wallet",
      image: epic,
      status: "AVAILABLE",
    },
    {
      item: "$MHT",
      itemSub: "Mouse Haunt Token",
      type: igoAmount,
      typeSub: "Claimable on IGO",
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
        {data.map((e) => (
          <tr key={e.item}>
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
