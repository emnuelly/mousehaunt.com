import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config from "../../src/config";

async function main() {
  const WhitelistSale = await ethers.getContractFactory("WhitelistSale");

  const whitelistSale = WhitelistSale.attach(
    config.mainnet.WhitelistSale.address
  );

  await whitelistSale.idoUnlock();

  console.log(`WhitelistSale withdraw unlocked at IDO`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
