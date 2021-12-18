import { ethers } from "ethers";
import Web3 from "web3";
import { provider } from "web3-core";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import config, { Network } from "../utils/config";
import { WhitelistSale } from "../typechain/WhitelistSale";
import WhitelistSaleJson from "../contracts/WhitelistSale.sol/WhitelistSale.json";
import { BoosterSale3 } from "../typechain/BoosterSale3";
import BoosterSale3Json from "../contracts/booster/BoosterSale3.sol/BoosterSale3.json";
import { BMHTL } from "../typechain/BMHTL";
import BMHTLJson from "../contracts/booster/BMHTL.sol/BMHTL.json";
import { BMHTE } from "../typechain/BMHTE";
import BMHTEJson from "../contracts/booster/BMHTE.sol/BMHTE.json";
import { BMHTR } from "../typechain/BMHTR";
import BMHTRJson from "../contracts/booster/BMHTR.sol/BMHTR.json";
import BUSDJson from "../contracts/MouseHauntToken.sol/MouseHauntToken.json";
import { MouseHauntToken as BUSD } from "../typechain/MouseHauntToken";
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
}

export interface UserInfoDetailed extends UserInfo {
  whitelisted: boolean;
  mhtOnWallet: string;
  busdOnWallet: string;
  boosters: {
    epic: string;
    legendary: string;
    rare: string;
  };
  allowance: {
    mht: string;
    epic: string;
    rare: string;
  };
}

export interface Contracts {
  whitelistSales: WhitelistSale[];

  preSale?: WhitelistSale;
  boosterSale3: BoosterSale3;

  busd: BUSD;
  mht: MouseHauntToken;
  bmhtl: BMHTL;
  bmhte: BMHTE;
  bmhtr: BMHTR;
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

async function getUserInfo(
  contracts: Contracts,
  account: string
): Promise<UserInfo> {
  const userInfos = await Promise.all(
    contracts.whitelistSales.map((sale) => sale.addressToUserInfo(account))
  );
  const totalTokens = userInfos
    .map((userInfo) => userInfo[0])
    .reduce((a, b) => a.add(b));

  const remainingTokens = userInfos
    .map((userInfo) => userInfo[1])
    .reduce((a, b) => a.add(b));

  const firstUserInfo = userInfos[0];

  const claimedTokens =
    totalTokens && remainingTokens ? totalTokens.sub(remainingTokens) : "";
  const lastClaimMonthIndex = firstUserInfo ? Number(firstUserInfo[2]) : -1;

  return {
    totalTokens: ethers.utils.formatEther(totalTokens),
    remainingTokens: ethers.utils.formatEther(remainingTokens),
    claimedTokens: ethers.utils.formatEther(claimedTokens),
    lastClaimMonthIndex,
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

  const sale = config[network].WhitelistSale.PreSales.find(
    (sale) => sale.whitelisted === account
  );

  useEffect(() => {
    if (window) {
      const n =
        window.location.hostname.includes("vercel.app") ||
        window.location.hostname.includes("localhost")
          ? "bscTestnet"
          : "bsc";
      setNetwork(n);
    }
  }, [setNetwork]);

  useEffect(() => {
    if (provider && account) {
      const ethersProvider = new ethers.providers.Web3Provider(provider as any);
      const signer = ethersProvider.getSigner(0);

      const whitelistSales = [
        config[network].WhitelistSale.PrivateSale1.address,
        config[network].WhitelistSale.PrivateSale2.address,
        config[network].WhitelistSale.PrivateSale3.address,
        ...config[network].WhitelistSale.PreSales.map((sale) => sale.address),
      ].map(
        (address) =>
          new ethers.Contract(
            address,
            WhitelistSaleJson.abi,
            signer
          ) as WhitelistSale
      );

      const preSale = sale
        ? (new ethers.Contract(
            sale.address,
            WhitelistSaleJson.abi,
            signer
          ) as WhitelistSale)
        : undefined;

      const boosterSale3 = new ethers.Contract(
        config[network].BoosterSale.PrivateSale3.address,
        BoosterSale3Json.abi,
        signer
      ) as BoosterSale3;

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
      const mht = new ethers.Contract(
        config[network].MouseHauntToken.address,
        MHTJson.abi,
        signer
      ) as BUSD;
      const busd = new ethers.Contract(
        config[network].BUSD.address,
        BUSDJson.abi,
        signer
      ) as BUSD;

      setContracts({
        whitelistSales,
        preSale,
        boosterSale3,
        bmhtl,
        bmhte,
        bmhtr,
        mht,
        busd,
      });
    }
  }, [network, provider, account, sale]);

  useEffect(() => {
    if (account && contracts) {
      (async () => {
        try {
          const isWhitelisted = await contracts?.preSale?.isWhitelisted(
            account
          );

          const whitelisted = Boolean(isWhitelisted);
          const userInfo = await getUserInfo(contracts, account);
          const legendary = await contracts?.bmhtl.balanceOf(account);
          const epic = await contracts?.bmhte.balanceOf(account);
          const rare = (await contracts?.bmhtr.balanceOf(account)).toString();
          const boosters = {
            legendary: ethers.utils
              .formatEther(legendary ?? "")
              .replace(".0", ""),
            epic: ethers.utils.formatEther(epic ?? "").replace(".0", ""),
            rare: rare,
          };
          const mhtOnWallet = ethers.utils.formatEther(
            await contracts?.mht.balanceOf(account)
          );
          const busdOnWallet = ethers.utils.formatEther(
            await contracts?.busd.balanceOf(account)
          );

          const userInfoPreSale = await contracts?.preSale?.addressToUserInfo(
            account
          );
          const mhtAllowance =
            sale && userInfoPreSale
              ? ethers.utils
                  .formatEther(
                    ethers.utils
                      .parseEther(sale?.amount)
                      .sub(userInfoPreSale[0])
                  )
                  .replace(/\..*/, "")
              : "";
          const epicAllowance = (
            await contracts?.boosterSale3.whitelist(
              account,
              config[network].BMHTE.address
            )
          ).toString();
          const rareAllowance = (
            await contracts?.boosterSale3.whitelist(
              account,
              config[network].BMHTR.address
            )
          ).toString();
          const allowance = {
            mht: mhtAllowance,
            epic: epicAllowance,
            rare: rareAllowance,
          };

          setUserInfoDetailed({
            ...userInfo,
            mhtOnWallet,
            busdOnWallet,
            whitelisted,
            boosters,
            allowance,
          });
        } catch (err) {
          console.error(err, "Error trying to updateUserInfo");
        }
      })();
    }
  }, [account, contracts, network, refresh, sale]);

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
