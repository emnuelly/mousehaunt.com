import { ethers } from "ethers";
import { NextRouter } from "next/router";
import config, { Network } from "./config";

export const isTransactionMined = async (
  provider: ethers.providers.Web3Provider, 
  transactionHash: string) => {
  const txReceipt = await provider.getTransactionReceipt(transactionHash);
  if (txReceipt && txReceipt.blockNumber) {
    return true;
  }
  else return false;
}

export const getNetwork = (router: NextRouter): Network => {
    return typeof router.query.network === "string"
      ? (router.query.network as Network)
      : 'bsc';
}

export const addToWallet = async (network: Network) => {
  const tokenDecimals = 18;

  const { ethereum } = window;
  const contracts = [
    config[network].MouseHauntToken,
    config[network].BMHTL,
    config[network].BMHTE,
  ];
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
}