import { ethers } from "ethers";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Authereum from "authereum";

import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useContracts } from "../hooks/useContracts";

interface Props {
  children: ReactNode;
}

export interface UserInfoDetailed {
  whitelisted: boolean;
  totalTokens: string;
  remainingTokens: string;
  claimedTokens: string;
  lastClaimMonthIndex: number;
  boosters: {
    epic: string;
    legendary: string;
  };
}

export type Sale = "SeedSale" | "PrivateSale";

interface StoreContextData {
  userInfo?: UserInfoDetailed;
  account: string;
  refresh: boolean;
  setAccount: React.Dispatch<string>;
  getAccount: () => Promise<string>;
  setRefresh: React.Dispatch<boolean>;
  sale: Sale;
}

export const StoreContext = createContext<StoreContextData>({
  sale: "PrivateSale",
} as StoreContextData);

export const StoreProvider: React.FC<Props> = ({ children }: Props) => {
  const [account, setAccount] = useState<string>("");
  const [userInfo, setUserInfo] = useState<UserInfoDetailed | undefined>();
  const [refresh, setRefresh] = useState(false);
  const contracts = useContracts();

  const sale = "PrivateSale";

  const updateUserInfo = useCallback(() => {
    if (account && contracts) {
      (async () => {
        const isWhitelisted = await contracts?.whitelistSale.isWhitelisted(
          account
        );
        const whitelisted = Boolean(isWhitelisted);
        const userInfo = await contracts?.whitelistSale.addressToUserInfo(
          account
        );
        const totalTokens = ethers.utils.formatEther(
          userInfo ? userInfo[0] : ""
        );
        const remainingTokens = ethers.utils.formatEther(
          userInfo ? userInfo[1] : ""
        );
        const claimedTokens =
          totalTokens && remainingTokens
            ? ethers.utils.formatEther(
                ethers.utils
                  .parseEther(totalTokens)
                  .sub(ethers.utils.parseEther(remainingTokens))
              )
            : "";
        const lastClaimMonthIndex = userInfo ? Number(userInfo[2]) : -1;
        const legendary = await contracts?.bmhtl.balanceOf(account);
        const epic = await contracts?.bmhte.balanceOf(account);
        const boosters = {
          legendary: ethers.utils
            .formatEther(legendary ?? "")
            .replace(".0", ""),
          epic: ethers.utils.formatEther(epic ?? "").replace(".0", ""),
        };
        setUserInfo({
          whitelisted,
          totalTokens,
          remainingTokens,
          claimedTokens,
          lastClaimMonthIndex,
          boosters,
        });
      })();
    }
  }, [contracts, account]);

  useEffect(() => {
    if (account && contracts) {
      updateUserInfo();
    }
  }, [account, contracts, updateUserInfo]);

  useEffect(() => {
    updateUserInfo();
  }, [refresh, updateUserInfo]);

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
    window.ethereum?.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x38" }],
    });
  }, []);

  const getAccount = async () => {
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
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    return account;
  };

  return (
    <StoreContext.Provider
      value={{
        account,
        userInfo,
        refresh,
        getAccount,
        setAccount,
        setRefresh,
        sale,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
