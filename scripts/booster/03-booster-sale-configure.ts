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

  const boosters = [bmhtl.address, bmhte.address];
  const busdPricePerBoosterInWei = [
    wei(config[network].BMHTL.busdPrice),
    wei(config[network].BMHTE.busdPrice),
  ];
  const capPerBoosterInWei = [
    wei(config[network].BMHTL.cap),
    wei(config[network].BMHTE.cap),
  ];

  console.log(
    "BoosterSale.configure",
    boosters,
    busdPricePerBoosterInWei,
    capPerBoosterInWei
  );

  await boosterSale.configure(
    boosters,
    busdPricePerBoosterInWei,
    capPerBoosterInWei
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
