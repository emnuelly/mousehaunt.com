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
import { addToWallet, isTransactionMined, NETWORK_TIMEOUT, truncate } from "../../../utils/blockchain";
import { format, add } from "date-fns";
import Countdown from "../Countdown";
import { useRouter } from "next/router";
import waitFor from "../../../utils/waitFor";
import Loading from "../../../assets/svg/loading.svg";

const Table: React.FC = () => {
  const { userInfoDetailed, contracts, network, provider } = useContext(StoreContext);
  const [igoAmount, setIgoAmount] = useState("");
  const [monthlyAmount, setMonthlyAmount] = useState("");
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

  const date = (months: number) => format(claimDate(months), "PPP HH:mm") + " UTC";
  const claimDate = (months: number) => add(igoDate, { days: 30 * months });

  const mhts = Array
    .from(Array(13).keys())
    .map((months) => {
      const status = claimDate(months).getTime() < (new Date()).getTime() ? "CLAIM" : "LOCKED"
      return {
        item: "$MHT",
        itemSub: "Mouse Haunt Token",
        type: !months ? igoAmount : monthlyAmount,
        typeSub: `Claimable on ${date(months)}`,
        image: mht,
        status,
        title: status === 'CLAIM' ? 'Claim $MHT' : 'Locked',
        amount: monthlyAmount
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

  const onClick = async (row: { status: string }, index: number) => {
    console.log(row)
    switch(row.status) {
      case 'LOCKED': {
        return;
      }
      case 'AVAILABLE': {
        await addToWallet(network)
        return;
      }
      case 'CLAIM': {
        try {
          if(!contracts?.preSale) return

          setLoadingIndex(index)
          const ethersProvider = new ethers.providers.Web3Provider(
            provider as any
          );
          const claim = await contracts?.preSale.claim()
            const tx = await waitFor(
              () => isTransactionMined(ethersProvider, claim?.hash),
              NETWORK_TIMEOUT
            );
          setLoadingIndex(-1)
          router.push({
            pathname: "/store/success",
            query: { type: "MHT", amount: monthlyAmount, tx, text: "CLAIM" },
          });
        } catch (err: any) {
          setLoadingIndex(-1)
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
              <Status disabled={loadingIndex === index} title={row.title} status={row.status} onClick={() => onClick(row, index)}>
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