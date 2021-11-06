import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config from "../../src/config";
import whitelist from "./whitelist.json";

async function main() {
  const WhitelistSale = await ethers.getContractFactory("WhitelistSale");

  const whitelistSale = WhitelistSale.attach(
    config.mainnet.WhitelistSale.address
  );

  const mht100 = ethers.utils.parseEther("100");

  for (const address of whitelist) {
    console.log(`WhitelistSale whitelisting ${address}`);
    await whitelistSale.addToWhitelist(address, mht100);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
