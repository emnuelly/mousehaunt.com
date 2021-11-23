import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config, { Network } from "../../src/config";

async function main() {
  const network: Network = process.env.NETWORK as Network;

  const MouseHero = await ethers.getContractFactory("MouseHero");
  const nft = await MouseHero.deploy(config[network].MouseHero.owner);

  console.log("MouseHero deployed to:", nft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
