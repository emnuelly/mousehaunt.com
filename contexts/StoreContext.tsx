import { ethers } from "ethers";
import Web3 from "web3";
import { provider } from "web3-core";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import config, { Network } from "../utils/config";
import { WhitelistSale } from "../typechain/WhitelistSale";
import WhitelistSaleJson from "../contracts/WhitelistSale.sol/WhitelistSale.json";
import { BoosterSaleGenesis } from "../typechain/BoosterSaleGenesis";
import BoosterSaleGenesisJson from "../contracts/booster/BoosterSaleGenesis.sol/BoosterSaleGenesis.json";
import { BMHTL } from "../typechain/BMHTL";
import BMHTLJson from "../contracts/booster/BMHTL.sol/BMHTL.json";
import { BMHTE } from "../typechain/BMHTE";
import BMHTEJson from "../contracts/booster/BMHTE.sol/BMHTE.json";
import { BMHTR } from "../typechain/BMHTR";
import BMHTRJson from "../contracts/booster/BMHTR.sol/BMHTR.json";
import { BMHTG } from "../typechain/BMHTG";
import BMHTGJson from "../contracts/booster/BMHTG.sol/BMHTG.json";
import MHTJson from "../contracts/MouseHauntToken.sol/MouseHauntToken.json";
import { MouseHauntToken } from "../typechain/MouseHauntToken";

import React, { createContext, ReactNode, useEffect, useState } from "react";
import { changeNetwork } from "../utils/blockchain";

interface Props {
  children: ReactNode;
}

interface UserInfo {
  totalTokens: string;
  remainingTokens: string;
  claimedTokens: string;
  lastClaimMonthIndex: number;

  igoAmount: string;
  monthlyAmount: string;
  claimsPerMonth: number;

  hasBoughtWhitelistButNotClaimed: boolean;
}

export interface UserInfoDetailed extends UserInfo {
  mhtOnWallet: string;
  boosters: {
    epic: string;
    legendary: string;
    rare: string;
    genesis: string;
  };
  allowance: {
    genesis: string;
  };
}

interface WhitelistSaleDetailed {
  sale: WhitelistSale;
  details:
    | typeof config.bsc.WhitelistSale.PreSales[0]
    | typeof config.bsc.WhitelistSale.PrivateSale1;
}

export interface Contracts {
  whitelistSales: WhitelistSale[];

  participatingSales: WhitelistSaleDetailed[];
  boosterSaleGenesis: BoosterSaleGenesis;

  mht: MouseHauntToken;
  bmhtl: BMHTL;
  bmhte: BMHTE;
  bmhtr: BMHTR;
  bmhtg: BMHTG;
}

interface StoreContextData {
  userInfoDetailed?: UserInfoDetailed;
  account: string;
  provider?: provider;
  web3Modal?: Web3Modal;
  refresh: boolean;
  setAccount: React.Dispatch<string>;
  getAccount: () => Promise<string>;
  setRefresh: React.Dispatch<boolean>;
  network: Network;
  setNetwork: React.Dispatch<Network>;
  contracts?: Contracts;
}

export const StoreContext = createContext<StoreContextData>(
  {} as StoreContextData
);

function isEmptyUserInfo(userInfo: {
  totalTokens: ethers.BigNumber;
  remainingTokens: ethers.BigNumber;
  lastClaimMonthIndex: ethers.BigNumber;
}) {
  return (
    userInfo.totalTokens.isZero() &&
    userInfo.remainingTokens.isZero() &&
    userInfo.lastClaimMonthIndex.isZero()
  );
}

function checkHasBoughtWhitelistButNotClaimed(userInfo: {
  totalTokens: ethers.BigNumber;
  remainingTokens: ethers.BigNumber;
  lastClaimMonthIndex: ethers.BigNumber;
}): boolean {
  return (
    !userInfo?.remainingTokens.isZero() &&
    userInfo.remainingTokens.eq(userInfo.totalTokens)
  );
}

async function getUserInfo(
  contracts: Contracts,
  account: string
): Promise<UserInfo> {
  const userInfos = await Promise.all(
    contracts.whitelistSales.map((sale) => sale.addressToUserInfo(account))
  );
  const hasBoughtWhitelistButNotClaimed = userInfos
    .map(checkHasBoughtWhitelistButNotClaimed)
    .reduce((a, b) => a || b, false);
  const amounts = contracts.whitelistSales
    .map((sale, index) => {
      const details = contracts.participatingSales.find(
        (s) => s.details.address === sale.address
      )?.details;
      if (!details)
        return {
          igoAmount: ethers.utils.parseEther("0"),
          monthlyAmount: ethers.utils.parseEther("0"),
          claimsPerMonth: 0,
        };

      const userInfo = userInfos[index];
      const claimsPerMonth = userInfo.remainingTokens.isZero() ? 0 : 1;

      const unlockAtIGOPercent = details.unlockAtIGOPercent;
      const vestingPeriodMonths = details.vestingPeriodMonths;
      const igoAmount =
        unlockAtIGOPercent && userInfo && userInfo.totalTokens
          ? userInfo.totalTokens.mul(unlockAtIGOPercent).div(100)
          : ethers.utils.parseEther("0");
      const monthlyAmount =
        unlockAtIGOPercent &&
        userInfo &&
        userInfo.totalTokens &&
        vestingPeriodMonths
          ? userInfo.totalTokens
              .mul(100 - Number(unlockAtIGOPercent))
              .div(100)
              .div(vestingPeriodMonths)
          : ethers.utils.parseEther("0");
      return { igoAmount, monthlyAmount, claimsPerMonth };
    })
    .reduce(
      (a, b) => ({
        igoAmount: a.igoAmount.add(b.igoAmount),
        monthlyAmount: a.monthlyAmount.add(b.monthlyAmount),
        claimsPerMonth: a.claimsPerMonth + b.claimsPerMonth,
      }),
      {
        igoAmount: ethers.utils.parseEther("0"),
        monthlyAmount: ethers.utils.parseEther("0"),
        claimsPerMonth: 0,
      }
    );

  const igoAmount = amounts
    ? ethers.utils.formatEther(amounts.igoAmount.toString())
    : "";
  const monthlyAmount = amounts
    ? ethers.utils.formatEther(amounts.monthlyAmount.toString())
    : "";
  const claimsPerMonth = amounts ? amounts.claimsPerMonth : 0;

  const totalTokens = userInfos
    .map((userInfo) => userInfo.totalTokens)
    .reduce((a, b) => a.add(b));

  const remainingTokens = userInfos
    .map((userInfo) => userInfo.remainingTokens)
    .reduce((a, b) => a.add(b));

  const claimedTokens =
    totalTokens && remainingTokens ? totalTokens.sub(remainingTokens) : "";
  const lastClaimMonthIndex = userInfos
    .map((userInfo) =>
      !isEmptyUserInfo(userInfo)
        ? userInfo.lastClaimMonthIndex.toString()
        : "-1"
    )
    .sort()
    .slice(-1)
    .pop();

  return {
    totalTokens: ethers.utils.formatEther(totalTokens),
    remainingTokens: ethers.utils.formatEther(remainingTokens),
    claimedTokens: ethers.utils.formatEther(claimedTokens),
    lastClaimMonthIndex:
      typeof lastClaimMonthIndex === "string"
        ? Number(lastClaimMonthIndex)
        : -1,
    igoAmount,
    monthlyAmount,
    claimsPerMonth,
    hasBoughtWhitelistButNotClaimed,
  };
}

export const StoreProvider: React.FC<Props> = ({ children }: Props) => {
  const [web3Modal, setWeb3Modal] = useState<Web3Modal | undefined>();
  const [contracts, setContracts] = useState<Contracts | undefined>();
  const [provider, setProvider] = useState<provider | undefined>();
  const [account, setAccount] = useState<string>("");
  const [userInfoDetailed, setUserInfoDetailed] = useState<
    UserInfoDetailed | undefined
  >();
  const [refresh, setRefresh] = useState(false);
  const [network, setNetwork] = useState<Network>("bsc");

  useEffect(() => {
    console.log(window.location.hostname);
    if (window) {
      const n =
        window.location.hostname.includes("vercel.app") ||
        window.location.hostname.includes("testnet.mousehaunt.com") ||
        window.location.hostname.includes("localhost")
          ? "bscTestnet"
          : "bsc";
      setNetwork(n);
    }
  }, [setNetwork]);

  useEffect(() => {
    if (provider && account) {
      (async () => {
        try {
          const ethersProvider = new ethers.providers.Web3Provider(
            provider as any
          );
          const signer = ethersProvider.getSigner(0);

          const sales = [
            config[network].WhitelistSale.PrivateSale1,
            config[network].WhitelistSale.PrivateSale2,
            config[network].WhitelistSale.PrivateSale3,
            ...config[network].WhitelistSale.PreSales,
          ];
          const whitelistSales = sales
            .map((sale) => sale.address)
            .map(
              (address) =>
                new ethers.Contract(
                  address,
                  WhitelistSaleJson.abi,
                  signer
                ) as WhitelistSale
            );
          console.log("sales");
          console.log(sales);
          const participatingSales: WhitelistSaleDetailed[] = [];
          for await (const sale of whitelistSales) {
            const details = sales.find((s) => s.address === sale.address);
            const isPreSaleWhitelisted =
              details && (details as any).whitelisted === account;
            if (isPreSaleWhitelisted) {
              participatingSales.push({ sale, details });
            } else {
              const isWhitelisted = await sale.isWhitelisted(account);
              if (isWhitelisted && details) {
                participatingSales.push({ sale, details });
              }
            }
          }

          const boosterSaleGenesis = new ethers.Contract(
            config[network].BoosterSale.Genesis.address,
            BoosterSaleGenesisJson.abi,
            signer
          ) as BoosterSaleGenesis;

          const bmhtl = new ethers.Contract(
            config[network].BMHTL.address,
            BMHTLJson.abi,
            signer
          ) as BMHTL;
          const bmhte = new ethers.Contract(
            config[network].BMHTE.address,
            BMHTEJson.abi,
            signer
          ) as BMHTE;
          const bmhtr = new ethers.Contract(
            config[network].BMHTR.address,
            BMHTRJson.abi,
            signer
          ) as BMHTR;
          const bmhtg = new ethers.Contract(
            config[network].BMHTG.address,
            BMHTGJson.abi,
            signer
          ) as BMHTG;
          const mht = new ethers.Contract(
            config[network].MouseHauntToken.address,
            MHTJson.abi,
            signer
          ) as MouseHauntToken;

          setContracts({
            whitelistSales,
            participatingSales,
            boosterSaleGenesis,
            bmhtl,
            bmhte,
            bmhtr,
            bmhtg,
            mht,
          });
        } catch (err) {
          console.error(err, "Error trying to setContracts");
        }
      })();
    }
  }, [network, provider, account]);

  useEffect(() => {
    if (account && contracts) {
      (async () => {
        try {
          const userInfo = await getUserInfo(contracts, account);
          const legendary = await contracts.bmhtl.balanceOf(account);
          const epic = await contracts.bmhte.balanceOf(account);
          const rare = (await contracts.bmhtr.balanceOf(account)).toString();
          const genesis = (await contracts.bmhtg.balanceOf(account)).toString();
          const boosters = {
            legendary: ethers.utils
              .formatEther(legendary ?? "")
              .replace(".0", ""),
            epic: ethers.utils.formatEther(epic ?? "").replace(".0", ""),
            rare,
            genesis,
          };
          const mhtOnWallet = ethers.utils.formatEther(
            await contracts.mht.balanceOf(account)
          );

          const genesisAllowance = (
            await contracts.boosterSaleGenesis.whitelist(account)
          ).toString();
          const allowance = {
            genesis: genesisAllowance,
          };
          const hasBoughtWhitelistButNotClaimed =
            userInfo.hasBoughtWhitelistButNotClaimed;

          setUserInfoDetailed({
            ...userInfo,
            mhtOnWallet,
            boosters,
            allowance,
            hasBoughtWhitelistButNotClaimed,
          });
        } catch (err) {
          console.error(err, "Error trying to updateUserInfo");
        }
      })();
    }
  }, [account, contracts, network, refresh]);

  useEffect(() => {
    window.ethereum?.on("accountsChanged", function (accounts: string[]) {
      setAccount(accounts[0]);
    });
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await contracts?.provider.getSigner(0).getAddress().then(setAccount);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   })();
  // }, [contracts]);

  useEffect(() => {
    if (!["bsc", "bscTestnet"].includes(network)) {
      changeNetwork("bsc");
    }
  }, [network]);

  const getAccount = async () => {
    try {
      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            rpc: {
              56: "https://bsc-dataseed.binance.org/",
            },
            network: "binance",
          },
        },
      };
      const web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions,
      });
      const p = await web3Modal.connect();
      setProvider(p);
      const w = new Web3(p);
      setWeb3Modal(web3Modal);

      const accounts = await w.eth.getAccounts();
      const account = accounts[0];
      setAccount(account);
      return account;
    } catch (err) {
      console.error(err, "Error trying to updateUserInfo");
      return "";
    }
  };

  return (
    <StoreContext.Provider
      value={{
        account,
        userInfoDetailed,
        refresh,
        getAccount,
        setAccount,
        setRefresh,
        provider,
        web3Modal,
        network,
        setNetwork,
        contracts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
