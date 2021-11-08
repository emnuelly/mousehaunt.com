import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config, { Network } from "../../src/config";
import whitelist from "../whitelist.json";

async function main() {
  const network: Network = process.env.NETWORK as Network;

  const BoosterSale = await ethers.getContractFactory("BoosterSale");
  const boosterSale = BoosterSale.attach(config[network].BoosterSale.address);

  console.log(`BoosterSale whitelist ${whitelist}`);
  await boosterSale.addToWhitelist(whitelist);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
