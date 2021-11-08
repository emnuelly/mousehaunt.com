import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config, { Network } from "../../src/config";

async function main() {
  const network: Network = process.env.NETWORK as Network;

  const BoosterSale = await ethers.getContractFactory("BoosterSale");
  const boosterSale = await BoosterSale.deploy(
    config[network].BoosterSale.owner,
    config[network].BUSD.address
  );

  await boosterSale.deployed();

  console.log("BoosterSale deployed to:", boosterSale.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
