import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config from "../../src/config";

async function main() {
  const SeedSale = await ethers.getContractFactory("SeedSale");
  const seedSale = await SeedSale.deploy(
    config.mainnet.MouseHauntToken.owner,
    config.mainnet.MouseHauntToken.address,
    config.mainnet.BUSD.address,
    ethers.utils
      .parseEther(config.mainnet.SeedSale.MHTtoBUSD.toString())
      .toString()
  );

  await seedSale.deployed();

  console.log("Seed Sale deployed to:", seedSale.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
