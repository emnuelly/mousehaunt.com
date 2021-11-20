import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config, { Network } from "../../src/config";

async function main() {
  const network: Network = process.env.NETWORK as Network;

  const BMHTL = await ethers.getContractFactory("BMHTL");
  const bmhtl = BMHTL.attach(config[network].BMHTL.address);

  const BMHTE = await ethers.getContractFactory("BMHTE");
  const bmhte = BMHTE.attach(config[network].BMHTE.address);

  const wei = ethers.utils.parseEther;

  const BoosterSale2 = await ethers.getContractFactory("BoosterSale2");
  const boosterSale2 = await BoosterSale2.deploy(
    config[network].BoosterSale2.owner,
    config[network].BUSD.address,
    bmhtl.address,
    bmhte.address,
    wei(config[network].BMHTL.busdPrice),
    wei(config[network].BMHTE.busdPrice)
  );

  await boosterSale2.deployed();

  console.log("BoosterSale2 deployed to:", boosterSale2.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
