import { ethers } from "ethers";
import Web3 from "web3";
import { provider } from "web3-core";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import config from "../utils/config";
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
import { useRouter } from "next/router";
import { getNetwork } from "../utils/blockchain";

import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

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

export interface Contracts {
  whitelistSale: WhitelistSale;
  boosterSale: BoosterSale;
  busd: BUSD;
  bmhtl: BMHTL;
  bmhte: BMHTE;
}

export type Sale = "SeedSale" | "PrivateSale";

interface StoreContextData {
  userInfo?: UserInfoDetailed;
  account: string;
  provider?: provider;
  web3?: Web3;
  refresh: boolean;
  setAccount: React.Dispatch<string>;
  getAccount: () => Promise<string>;
  setRefresh: React.Dispatch<boolean>;
  sale: Sale;
  contracts?: Contracts;
}

export const StoreContext = createContext<StoreContextData>({
  sale: "PrivateSale",
} as StoreContextData);

export const StoreProvider: React.FC<Props> = ({ children }: Props) => {
  const [web3, setWeb3] = useState<Web3 | undefined>();
  const [contracts, setContracts] = useState<Contracts | undefined>();
  const [provider, setProvider] = useState<provider | undefined>();
  const [account, setAccount] = useState<string>("");
  const [userInfo, setUserInfo] = useState<UserInfoDetailed | undefined>();
  const [refresh, setRefresh] = useState(false);
  const router = useRouter();
  const network = getNetwork(router);
  const sale = "PrivateSale";

  const updateUserInfo = () => {
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
  };

  useEffect(() => {
    updateUserInfo();
  }, [account, contracts, refresh]);

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
    const p = await web3Modal.connect();
    setProvider(p);
    const w = new Web3(p);
    setWeb3(w);

    const accounts = await w.eth.getAccounts();
    const account = accounts[0];
    return account;
  };

  useEffect(() => {
    if (provider && account) {
      const ethersProvider = new ethers.providers.Web3Provider(provider as any);
      const signer = ethersProvider.getSigner(0);
      const whitelistSale = new ethers.Contract(
        config[network].WhitelistSale[sale].address,
        WhitelistSaleJson.abi,
        signer
      ) as WhitelistSale;
      const boosterSale = new ethers.Contract(
        config[network].BoosterSale.address,
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
      const busd = new ethers.Contract(
        config[network].BUSD.address,
        BUSDJson.abi,
        signer
      ) as BUSD;

      setContracts({
        whitelistSale,
        boosterSale,
        bmhtl,
        bmhte,
        busd,
      });
    }
  }, [network, sale, provider, account]);

  return (
    <StoreContext.Provider
      value={{
        account,
        userInfo,
        refresh,
        getAccount,
        setAccount,
        setRefresh,
        provider,
        web3,
        sale,
        contracts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
