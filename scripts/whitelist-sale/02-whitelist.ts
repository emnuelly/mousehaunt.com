import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config, { Network } from "../../src/config";
import whitelist from "./whitelist.json";

async function main() {
  const network: Network = process.env.NETWORK as Network;

  const WhitelistSale = await ethers.getContractFactory("WhitelistSale");

  const whitelistSale = WhitelistSale.attach(
    config[network].WhitelistSale.PrivateSale.address
  );

  for (const address of whitelist) {
    console.log(`WhitelistSale whitelisting ${address}`);
    await whitelistSale.addToWhitelist(address);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
