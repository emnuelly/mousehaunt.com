import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config from "../../src/config";

async function main() {
  const WhitelistSale = await ethers.getContractFactory("WhitelistSale");

  const whitelistSale = WhitelistSale.attach(
    config.mainnet.WhitelistSale.PrivateSale.address
  );

  const timestamp = 0;
  await whitelistSale.setIgoTimestamp(timestamp);

  console.log(`WhitelistSale set IGO timestamp to ${timestamp}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
