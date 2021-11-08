import { ethers } from "ethers";
import { useEffect, useState } from "react";
import config from "../utils/config";
import { WhitelistSale } from "../typechain/WhitelistSale";
import WhitelistSaleJson from "../contracts/WhitelistSale.sol/WhitelistSale.json";
import { BoosterSale } from "../typechain/BoosterSale";
import BoosterSaleJson from "../contracts/booster/BoosterSale.sol/BoosterSale.json";
import BUSDJson from "../contracts/MouseHauntToken.sol/MouseHauntToken.json";
import { MouseHauntToken as BUSD } from "../typechain/MouseHauntToken";

export interface Contracts {
  provider: ethers.providers.Web3Provider;
  whitelistSale: WhitelistSale;
  boosterSale: BoosterSale;
  busd: BUSD
}

export function useContracts() {
  const [contracts, setContracts] = useState<Contracts|null>(null);

  useEffect(() => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum as any);
      const signer = provider.getSigner(0);
      const whitelistSale = new ethers.Contract(
        config.bscTestnet.WhitelistSale.PrivateSale.address,
        WhitelistSaleJson.abi,
        signer
      ) as WhitelistSale;
      const boosterSale = new ethers.Contract(
        config.bscTestnet.BoosterSale.address,
        BoosterSaleJson.abi,
        signer
      ) as BoosterSale;
      const busd = new ethers.Contract(
        config.bscTestnet.BUSD.address,
        BUSDJson.abi,
        signer
      ) as BUSD;

      setContracts({
        provider,
        whitelistSale,
        boosterSale,
        busd
      });

      return () => {
        // TODO
      }
    }
  }, []);

  return contracts;
}
