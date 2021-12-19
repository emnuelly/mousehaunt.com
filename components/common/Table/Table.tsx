import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import mht from "../../../public/images/other/MHT.png";
import legendary from "../../../public/images/other/legendary.png";
import epic from "../../../public/images/other/epic.png";
import rare from "../../../public/images/other/rare.png";

import { Styles, Status, LoadingContainer } from "./styles";
import { StoreContext } from "../../../contexts/StoreContext";
import { ethers } from "ethers";
import config from "../../../utils/config";
import {
  addToWallet,
  isTransactionMined,
  NETWORK_TIMEOUT,
  truncate,
} from "../../../utils/blockchain";
import { format, add } from "date-fns";
import Countdown from "../Countdown";
import { useRouter } from "next/router";
import waitFor from "../../../utils/waitFor";
import Loading from "../../../assets/svg/loading.svg";

const Table: React.FC = () => {
  const {
    userInfoDetailed,
    contracts,
    network,
    provider,
    account,
    refresh,
    setRefresh,
  } = useContext(StoreContext);
  const [loadingIndex, setLoadingIndex] = useState(-1);
  const igoDate = new Date(
    Number(config[network].WhitelistSale.igoTimestamp) * 1000
  );
  const router = useRouter();

  const countdown = {
    date: igoDate,
    endText: "$MHT AVAILABLE FOR CLAIMING!",
    startText: "$MHT AVAILABLE FOR CLAIMING IN",
  };

  const mhts = Array.from(Array(13).keys()).map((month) => {
    const claimDate = add(igoDate, { days: 30 * month });
    const date = format(claimDate, "PPP HH:mm") + " UTC";
    const times =
      contracts?.participatingSales.length &&
      contracts?.participatingSales.length > 1
        ? ` (${contracts?.participatingSales.length}x)`
        : "";
    const claimed =
      userInfoDetailed && userInfoDetailed.lastClaimMonthIndex >= month;
    const status = claimed
      ? "CLAIMED"
      : claimDate.getTime() < new Date().getTime()
      ? "CLAIM" + times
      : "LOCKED";
    const mhtAmount = !month
      ? userInfoDetailed?.igoAmount
      : userInfoDetailed?.monthlyAmount;
    const amount = mhtAmount ? truncate(mhtAmount) : "";
    return {
      item: "$MHT",
      itemSub: "Mouse Haunt Token",
      type: amount,
      typeSub: `Claimable on ${date}`,
      image: mht,
      status,
      title: status === "LOCKED" ? "Locked" : "Claim $MHT",
      amount: amount,
    };
  });

  const data = [
    {
      item: "BMHTL",
      itemSub: "Mouse Haunt Booster LEGENDARY",
      type: userInfoDetailed?.boosters.legendary,
      typeSub: "Available on wallet",
      image: legendary,
      status: "AVAILABLE",
      title: "Add to wallet",
    },
    {
      item: "BMHTE",
      itemSub: "Mouse Haunt Booster EPIC",
      type: userInfoDetailed?.boosters.epic,
      typeSub: "Available on wallet",
      image: epic,
      status: "AVAILABLE",
      title: "Add to wallet",
    },
    {
      item: "BMHTR",
      itemSub: "Mouse Haunt Booster RARE",
      type: userInfoDetailed?.boosters.rare,
      typeSub: "Available on wallet",
      image: rare,
      status: "AVAILABLE",
      title: "Add to wallet",
    },
    ...mhts,
  ];

  const onClick = async (
    row: { status: string; amount?: string },
    index: number
  ) => {
    switch (row.status) {
      case "LOCKED": {
        return;
      }
      case "AVAILABLE": {
        await addToWallet(network);
        return;
      }
      default: {
        try {
          if (!contracts?.participatingSales.length) return;

          setLoadingIndex(index);
          const ethersProvider = new ethers.providers.Web3Provider(
            provider as any
          );

          const txs = [];
          for await (const { sale } of contracts?.participatingSales) {
            const userInfo = await sale.addressToUserInfo(account);
            if (userInfo.remainingTokens.isZero()) continue;

            const claim = await sale.claim();
            const tx = await waitFor(
              () => isTransactionMined(ethersProvider, claim?.hash),
              NETWORK_TIMEOUT
            );
            txs.push(tx);
          }
          setRefresh(!refresh);
          router.push({
            pathname: "/store/success",
            query: {
              type: "MHT",
              amount: row.amount,
              // TODO forward all CLAIM transactions to success page
              tx: txs[txs.length - 1],
              text: "CLAIM",
            },
          });
          setLoadingIndex(-1);
        } catch (err: any) {
          setLoadingIndex(-1);
          const message = err.data ? err.data.message : err.message;
          alert(message);
        }
        return;
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
              <Status
                disabled={loadingIndex === index}
                title={row.title}
                status={row.status}
                onClick={() => onClick(row, index)}
              >
                {row.status}
              </Status>
              {loadingIndex === index && (
                <LoadingContainer>
                  <Loading />
                </LoadingContainer>
              )}
            </td>
          </tr>
        ))}
      </table>
    </Styles>
  );
};

export default Table;
