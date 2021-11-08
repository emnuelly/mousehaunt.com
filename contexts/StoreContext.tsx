import { ethers } from "ethers";
import React, { createContext, ReactNode, useEffect, useState } from "react";
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
}

interface StoreContextData {
  userInfo?: UserInfoDetailed;
  account: string;
  bought: string;
  setUserInfo: React.Dispatch<UserInfoDetailed>;
  setBought: React.Dispatch<string>;
  setAccount: React.Dispatch<string>;
  getAccount: () => Promise<string>;
}

export const StoreContext = createContext<StoreContextData>(
  {} as StoreContextData
);

export const StoreProvider: React.FC<Props> = ({ children }: Props) => {
  const [account, setAccount] = useState<string>("");
  const [userInfo, setUserInfo] = useState<UserInfoDetailed | undefined>();
  const [bought, setBought] = useState("");
  const contracts = useContracts();

  useEffect(() => {
    if (account && contracts) {
      (async () => {
        console.log({ account, contracts });
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
  }, [account, contracts]);

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
        bought,
        setUserInfo,
        setBought,
        getAccount,
        setAccount,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
