import { provider } from "web3-core";
import { BigNumber, Contract, ContractTransaction, ethers } from "ethers";
import config, { Network } from "../../utils/config";
import { Marketplace } from "../../typechain/Marketplace";
import { getBlockchainProvider } from "../../utils/blockchain";
import MKTJson from "../../contracts/marketplace/Marketplace.sol/Marketplace.json";
import React, { createContext, ReactNode, useEffect, useState, useContext } from "react";

interface Props {
  children: ReactNode;
}

interface Order {
  id: BigNumber;
  seller: string;
  nftAddress: string;
  tokenType: number;
  assetId: BigNumber;
  amount: BigNumber;
  price: BigNumber;
  expiresAt: BigNumber;
}

export interface MarketplaceContractContextData {
  getOrders: () => Promise<Order[]>;
  createOrder: (order: Order) => Promise<ContractTransaction>;
  cancelOrder: (orderId: number) => Promise<ContractTransaction>;
  executeOrder: (orderId: number) => Promise<ContractTransaction>;
  getAssetType: (address: string) => Promise<number>;
}

export const MarketplaceContractContext = createContext<MarketplaceContractContextData>(
  {} as MarketplaceContractContextData
);

export const MarketplaceContractProvider: React.FC<Props> = ({ children }: Props) => {
  const [account, setAccount] = useState<string>("");
  const [marketplace, setMarketplace] = useState<Marketplace>({} as Marketplace);
  const [provider, setProvider] = useState<provider>();

  const setContractData = async () => {
    try {
      const blockchainProvider = await getBlockchainProvider();
      setProvider(blockchainProvider.provider);
      setAccount(blockchainProvider.account);
      const ethersProvider = new ethers.providers.Web3Provider(blockchainProvider.provider as any);
      const signer = ethersProvider.getSigner(0);
      const marketplace = new ethers.Contract(
        config["bscTestnet"].Marketplace.address,
        MKTJson.abi,
        signer
      ) as Marketplace;
      setMarketplace(marketplace);
    } catch (err) {
      console.error(err, "Error trying to get provider");
    }
  };

  useEffect(() => {
    console.log("step-useEfect-start");
    setContractData();
    console.log("step-useEfect-end");
  }, [account, provider]);

  const getOrders = async (): Promise<Order[]> => {
    if (account && provider) {
      try {
        return await marketplace.getOrders();
      } catch (e) {
        console.error(e);
        return {} as Order[];
      }
    }
    return {} as Order[];
  };

  //   const getOrder = async (orderId: number): Promise<Order> => {
  //     if (account && provider) {
  //       try {
  //         const orders = await marketplace.getOrders();
  //         return orders[orderId];
  //       } catch (e) {
  //         console.error(e);
  //         return {} as Order;
  //       }
  //     }
  //     return {} as Order;
  //   };

  const createOrder = async (order: Order): Promise<ContractTransaction> => {
    if (account && provider) {
      try {
        const ctx = marketplace.createOrder(order);
        return ctx;
      } catch (e) {
        console.error(e);
        return {} as ContractTransaction;
      }
    }
    return {} as ContractTransaction;
  };

  const cancelOrder = async (orderId: number): Promise<ContractTransaction> => {
    if (account && provider) {
      try {
        const ctx = marketplace.cancelOrder(orderId);
        return ctx;
      } catch (e) {
        console.error(e);
        return {} as ContractTransaction;
      }
    }
    return {} as ContractTransaction;
  };

  const executeOrder = async (orderId: number): Promise<ContractTransaction> => {
    if (account && provider) {
      try {
        const ctx = marketplace.executeOrder(orderId);
        return ctx;
      } catch (e) {
        console.error(e);
        return {} as ContractTransaction;
      }
    }
    return {} as ContractTransaction;
  };

  const getAssetType = async (address: string): Promise<number> => {
    if (account && provider) {
      try {
        return await marketplace.getAssetType(address);
      } catch (e) {
        return -1;
      }
    }
    return -1;
  };

  return (
    <MarketplaceContractContext.Provider
      value={{
        getOrders,
        createOrder,
        cancelOrder,
        executeOrder,
        getAssetType,
      }}
    >
      {children}
    </MarketplaceContractContext.Provider>
  );
};
