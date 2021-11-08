import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config, { Network } from "../../src/config";

async function main() {
  const network: Network = process.env.NETWORK as Network;

  const MouseHauntToken = await ethers.getContractFactory("MouseHauntToken");
  const mht = MouseHauntToken.attach(config[network].MouseHauntToken.address);

  const WhitelistSale = await ethers.getContractFactory("WhitelistSale");
  const whitelistSale = WhitelistSale.attach(
    config[network].WhitelistSale.PrivateSale.address
  );

  console.log(`WhitelistSale approve`);

  const wei = (x: string): string => ethers.utils.parseEther(x).toString();

  await mht.approve(
    whitelistSale.address,
    wei(config[network].WhitelistSale.PrivateSale.available)
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
