import { ethers } from "ethers";
import config, { Network } from "./config";

export const isTransactionMined = async (
  provider: ethers.providers.Web3Provider, 
  transactionHash: string): Promise<string> => {
  const txReceipt = await provider.getTransactionReceipt(transactionHash);
  if (txReceipt && txReceipt.blockNumber) {
    return txReceipt.transactionHash;
  }
  else return "";
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

export const changeNetwork = async (network: Network) => {
  window.ethereum?.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: network === 'bscTestnet' ? '0x61': "0x38" }],
  });
}

export function truncate(str: string, maxDecimalDigits = 3) {
  if (str.includes(".")) {
    const parts = str.split(".");
    return parts[0] + "." + parts[1].slice(0, maxDecimalDigits);
  }
  return str;
}
