import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config, { Network } from "../../src/config";

async function main() {
  const network: Network = process.env.NETWORK as Network;
  const LegendaryEpicBoosterUnpack = await ethers.getContractFactory(
    "LegendaryEpicBoosterUnpack"
  );
  const boosterUnpack = await LegendaryEpicBoosterUnpack.deploy(
    config[network].LegendaryEpicBoosterUnpack.owner,
    config[network].MouseHero.address,
    config[network].BMHTL.address,
    config[network].BMHTE.address
  );
  await boosterUnpack.deployed();

  console.log("LegendaryEpicBoosterUnpack deployed to:", boosterUnpack.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
