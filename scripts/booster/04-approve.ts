import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config, { Network } from "../../src/config";

async function main() {
  const network: Network = process.env.NETWORK as Network;

  const BMHTL = await ethers.getContractFactory("BMHTL");
  const bmhtl = BMHTL.attach(config[network].BMHTL.address);

  const BMHTE = await ethers.getContractFactory("BMHTE");
  const bmhte = BMHTE.attach(config[network].BMHTE.address);

  const BoosterSale = await ethers.getContractFactory("BoosterSale");
  const boosterSale = BoosterSale.attach(config[network].BoosterSale.address);

  const wei = (x: string): string => ethers.utils.parseEther(x).toString();

  console.log(
    "BoosterSale approve",
    wei(config[network].BMHTL.available),
    wei(config[network].BMHTE.available)
  );

  await bmhtl.approve(
    boosterSale.address,
    wei(config[network].BMHTL.available)
  );
  await bmhte.approve(
    boosterSale.address,
    wei(config[network].BMHTE.available)
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
