import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config from "../../src/config";
import whitelist from "./whitelist.json";

async function main() {
  const SeedSale = await ethers.getContractFactory("SeedSale");

  const seedSale = SeedSale.attach(config.mainnet.SeedSale.address);

  for (const address of whitelist) {
    console.log(`SeedSale whitelisting ${address}`);
    await seedSale.addToWhitelist(address);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
