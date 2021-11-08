import { ethers } from "ethers";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Contracts, useContracts } from "../hooks/useContracts";

interface Props {
  children: ReactNode;
}

export interface UserInfoDetailed {
  whitelisted: boolean;
  totalTokens: string;
  remainingTokens: string;
  claimedTokens: string;
  lastClaimMonthIndex: number;
}

interface StoreContextData {
  userInfo?: UserInfoDetailed;
  account: string;
  refresh: boolean;
  setAccount: React.Dispatch<string>;
  getAccount: () => Promise<string>;
  setRefresh: React.Dispatch<boolean>;
}

export const StoreContext = createContext<StoreContextData>(
  {} as StoreContextData
);

export const StoreProvider: React.FC<Props> = ({ children }: Props) => {
  const [account, setAccount] = useState<string>("");
  const [userInfo, setUserInfo] = useState<UserInfoDetailed | undefined>();
  const [refresh, setRefresh] = useState(false);
  const contracts = useContracts();

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
        setUserInfo({
          whitelisted,
          totalTokens,
          remainingTokens,
          claimedTokens,
          lastClaimMonthIndex,
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
    window.ethereum?.on("accountsChanged", function (accounts) {
      setAccount((accounts as string[])[0]);
    });
  }, []);

  const getAccount = async () => {
    const accounts = await window.ethereum?.request({
      method: "eth_requestAccounts",
    });
    return accounts ? (accounts as string[])[0] : "";
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
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
