import { ethers } from "ethers";
import config from "./config";

export const isTransactionMined = async (
  provider: ethers.providers.Web3Provider, 
  transactionHash: string) => {
  const txReceipt = await provider.getTransactionReceipt(transactionHash);
  if (txReceipt && txReceipt.blockNumber) {
    return true;
  }
  else return false;
}

export const addToWallet = async () => {
  const tokenDecimals = 18;

  const { ethereum } = window;
  const contracts = [
    config.bsc.MouseHauntToken,
    config.bsc.BMHTL,
    config.bsc.BMHTE,
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