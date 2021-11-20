import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config, { Network } from "../../src/config";
import whitelist from "../whitelist.json";

async function main() {
  const network: Network = process.env.NETWORK as Network;

  const BoosterSale2 = await ethers.getContractFactory("BoosterSale2");
  const boosterSale2 = BoosterSale2.attach(
    config[network].BoosterSale2.address
  );

  console.log(`BoosterSale2 setWhitelist`, whitelist);
  await boosterSale2.setWhitelist(
    whitelist.buyers,
    whitelist.legendaryAllowances,
    whitelist.epicAllowances
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
