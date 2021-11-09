import { ethers } from "ethers";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const contracts = useContracts();

  const sale = router.query.seed !== undefined ? "SeedSale" : "PrivateSale";

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
    window.ethereum?.on("accountsChanged", function (accounts) {
      setAccount((accounts as string[])[0]);
    });
  }, []);

  useEffect(() => {
    contracts?.provider.getSigner(0).getAddress().then(setAccount);
  }, [contracts]);

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
        sale,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
