import { ethers } from "ethers";

export const isTransactionMined = async (
  provider: ethers.providers.Web3Provider, 
  transactionHash: string) => {
  const txReceipt = await provider.getTransactionReceipt(transactionHash);
  if (txReceipt && txReceipt.blockNumber) {
    return true;
  }
  else return false;
}
