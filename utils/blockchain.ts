import Web3 from "web3";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { provider } from "web3-core";
import config, { Network } from "./config";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const isTransactionMined = async (
  provider: ethers.providers.Web3Provider,
  transactionHash: string
): Promise<string> => {
  const txReceipt = await provider.getTransactionReceipt(transactionHash);
  if (txReceipt && txReceipt.blockNumber) {
    return txReceipt.transactionHash;
  } else return "";
};

export const addToWallet = async (network: Network) => {
  const tokenDecimals = 18;

  const { ethereum } = window;
  const contracts = [config[network].MouseHauntToken, config[network].BMHTL, config[network].BMHTE];
  for (const contract of contracts) {
    await ethereum?.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: contract.address,
          symbol: contract.symbol,
          image: contract.image,
          decimals: tokenDecimals,
        },
      },
    });
  }
};

export const changeNetwork = async (network: Network) => {
  window.ethereum?.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: network === "bscTestnet" ? "0x61" : "0x38" }],
  });
};

export function truncate(str: string, maxDecimalDigits = 3) {
  if (str.includes(".")) {
    const parts = str.split(".");
    return parts[0] + "." + parts[1].slice(0, maxDecimalDigits);
  }
  return str;
}

class BlockchainProvider {
  account: string;
  provider?: provider;
  web3?: Web3;

  constructor(account: string, provider?: provider, web3?: Web3) {
    this.account = account;
    this.provider = provider;
    this.web3 = web3;
  }
}

export const getBlockchainProvider = async (): Promise<BlockchainProvider> => {
  try {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            56: "https://bsc-dataseed.binance.org/",
            97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
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
    return new BlockchainProvider(account, provider, web3);
  } catch (err) {
    console.error(err, "Error trying to create blockchain provider");
    return {} as BlockchainProvider;
  }
};
