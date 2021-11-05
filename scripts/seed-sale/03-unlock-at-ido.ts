import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config from "../../src/config";

async function main() {
  const SeedSale = await ethers.getContractFactory("SeedSale");

  const seedSale = SeedSale.attach(config.mainnet.SeedSale.address);

  await seedSale.idoUnlock();

  console.log(`SeedSale withdraw unlocked at IDO`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
