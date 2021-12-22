import { ethers } from "ethers";
import Web3 from "web3";
import { provider } from "web3-core";
import config, { Network } from "../utils/config";
import { WhitelistSale } from "../typechain/WhitelistSale";
import WhitelistSaleJson from "../contracts/WhitelistSale.sol/WhitelistSale.json";
import { BoosterSale } from "../typechain/BoosterSale";
import BoosterSaleJson from "../contracts/booster/BoosterSale.sol/BoosterSale.json";
import { BMHTL } from "../typechain/BMHTL";
import BMHTLJson from "../contracts/booster/BMHTL.sol/BMHTL.json";
import { BMHTE } from "../typechain/BMHTE";
import BMHTEJson from "../contracts/booster/BMHTE.sol/BMHTE.json";
import BUSDJson from "../contracts/MouseHauntToken.sol/MouseHauntToken.json";
import { MouseHauntToken as BUSD } from "../typechain/MouseHauntToken";

import React, { createContext, ReactNode, useEffect, useState } from "react";
import { changeNetwork, getBlockchainProvider } from "../utils/blockchain";

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
  busdOnWallet: string;
  boosters: {
    epic: string;
    legendary: string;
  };
}

export interface Contracts {
  privateSale2: WhitelistSale;
  privateSale1: WhitelistSale;
  boosterSale1: BoosterSale;
  boosterSale2: BoosterSale;
  busd: BUSD;
  bmhtl: BMHTL;
  bmhte: BMHTE;
}

export type Sale = "SeedSale" | "PrivateSale";

interface StoreContextData {
  userInfoDetailed?: UserInfoDetailed;
  account: string;
  provider?: provider;
  web3?: Web3;
  refresh: boolean;
  setAccount: React.Dispatch<string>;
  getAccount: () => Promise<string>;
  setRefresh: React.Dispatch<boolean>;
  network: Network;
  setNetwork: React.Dispatch<Network>;
  contracts?: Contracts;
}

const DEFAULT_NETWORK: Network = "bsc";

export const StoreContext = createContext<StoreContextData>({
  network: DEFAULT_NETWORK,
} as StoreContextData);

async function getUserInfo(contracts: Contracts, account: string): Promise<UserInfo> {
  const [userInfo1, userInfo2] = await Promise.all([
    contracts.privateSale1.addressToUserInfo(account),
    contracts.privateSale2.addressToUserInfo(account),
  ]);
  const totalTokens = userInfo1[0].add(userInfo2[0]);
  const remainingTokens = userInfo1[1].add(userInfo2[1]);
  const claimedTokens = totalTokens && remainingTokens ? totalTokens.sub(remainingTokens) : "";
  const lastClaimMonthIndex = userInfo1 ? Number(userInfo1[2]) : -1;

  return {
    totalTokens: ethers.utils.formatEther(totalTokens),
    remainingTokens: ethers.utils.formatEther(remainingTokens),
    claimedTokens: ethers.utils.formatEther(claimedTokens),
    lastClaimMonthIndex,
  };
}

export const StoreProvider: React.FC<Props> = ({ children }: Props) => {
  const [web3, setWeb3] = useState<Web3>();
  const [contracts, setContracts] = useState<Contracts>();
  const [provider, setProvider] = useState<provider>();
  const [account, setAccount] = useState<string>("");
  const [userInfoDetailed, setUserInfoDetailed] = useState<UserInfoDetailed>();
  const [refresh, setRefresh] = useState(false);
  const [network, setNetwork] = useState<Network>(DEFAULT_NETWORK);

  const updateUserInfo = () => {
    if (account && contracts) {
      (async () => {
        try {
          const isWhitelisted = await contracts?.privateSale2.isWhitelisted(account);

          const whitelisted = Boolean(isWhitelisted);
          const userInfo = await getUserInfo(contracts, account);
          const legendary = await contracts?.bmhtl.balanceOf(account);
          const epic = await contracts?.bmhte.balanceOf(account);
          const boosters = {
            legendary: ethers.utils.formatEther(legendary ?? "").replace(".0", ""),
            epic: ethers.utils.formatEther(epic ?? "").replace(".0", ""),
          };
          const busdOnWallet = ethers.utils.formatEther(await contracts?.busd.balanceOf(account));
          setUserInfoDetailed({
            ...userInfo,
            busdOnWallet,
            whitelisted,
            boosters,
          });
        } catch (err) {
          console.error(err, "Error trying to updateUserInfo");
        }
      })();
    }
  };

  useEffect(() => {
    if (provider && account) {
      const ethersProvider = new ethers.providers.Web3Provider(provider as any);
      const signer = ethersProvider.getSigner(0);

      const privateSale1 = new ethers.Contract(
        config[network].WhitelistSale.PrivateSale1.address,
        WhitelistSaleJson.abi,
        signer
      ) as WhitelistSale;
      const privateSale2 = new ethers.Contract(
        config[network].WhitelistSale.PrivateSale2.address,
        WhitelistSaleJson.abi,
        signer
      ) as WhitelistSale;

      const boosterSale1 = new ethers.Contract(
        config[network].BoosterSale.PrivateSale1.address,
        BoosterSaleJson.abi,
        signer
      ) as BoosterSale;
      const boosterSale2 = new ethers.Contract(
        config[network].BoosterSale.PrivateSale2.address,
        BoosterSaleJson.abi,
        signer
      ) as BoosterSale;

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

      const busd = new ethers.Contract(config[network].BUSD.address, BUSDJson.abi, signer) as BUSD;

      setContracts({
        privateSale1,
        privateSale2,
        boosterSale1,
        boosterSale2,
        bmhtl,
        bmhte,
        busd,
      });
    }
  }, [network, provider, account]);

  useEffect(() => {
    updateUserInfo();
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
    const blockchainProvider = await getBlockchainProvider();
    setProvider(blockchainProvider.provider);
    setWeb3(blockchainProvider.web3);
    return blockchainProvider.account;
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
        web3,
        network,
        setNetwork,
        contracts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
