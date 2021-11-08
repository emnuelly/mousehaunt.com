import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import config from "../utils/config";
import { WhitelistSale } from "../typechain/WhitelistSale";
import WhitelistSaleJson from "../contracts/WhitelistSale.sol/WhitelistSale.json";
import { BoosterSale } from "../typechain/BoosterSale";
import BoosterSaleJson from "../contracts/booster/BoosterSale.sol/BoosterSale.json";
import BUSDJson from "../contracts/MouseHauntToken.sol/MouseHauntToken.json";
import { MouseHauntToken as BUSD } from "../typechain/MouseHauntToken";
import { useRouter } from "next/router";
import { getNetwork } from "../utils/blockchain";
import { StoreContext } from "../contexts/StoreContext";

export interface Contracts {
  provider: ethers.providers.Web3Provider;
  whitelistSale: WhitelistSale;
  boosterSale: BoosterSale;
  busd: BUSD
}

export function useContracts() {
  const [contracts, setContracts] = useState<Contracts|null>(null);
  const router = useRouter();
  const network = getNetwork(router)
  const { account } = useContext(StoreContext);

  useEffect(() => {
    if (account && window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum as any);
      const signer = provider.getSigner(0);
      const whitelistSale = new ethers.Contract(
        config[network].WhitelistSale.PrivateSale.address,
        WhitelistSaleJson.abi,
        signer
      ) as WhitelistSale;
      const boosterSale = new ethers.Contract(
        config[network].BoosterSale.address,
        BoosterSaleJson.abi,
        signer
      ) as BoosterSale;
      const busd = new ethers.Contract(
        config[network].BUSD.address,
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
  }, [network, account]);

  return contracts;
}
