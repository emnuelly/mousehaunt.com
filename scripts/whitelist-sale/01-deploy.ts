import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config from "../../src/config";

async function main() {
  const MHT = await ethers.getContractFactory("MouseHauntToken");

  const mht = MHT.attach(config.mainnet.MouseHauntToken.address);

  const WhitelistSale = await ethers.getContractFactory("WhitelistSale");
  const whitelistSale = await WhitelistSale.deploy(
    config.mainnet.WhitelistSale.PrivateSale.owner,
    mht.address,
    mht.address,
    config.mainnet.WhitelistSale.PrivateSale.MHTtoBUSD,
    config.mainnet.WhitelistSale.PrivateSale.minMhtAmount,
    config.mainnet.WhitelistSale.PrivateSale.maxMhtAmount,
    config.mainnet.WhitelistSale.PrivateSale.unlockAtIGOPercent,
    config.mainnet.WhitelistSale.PrivateSale.cliffMonths,
    config.mainnet.WhitelistSale.PrivateSale.vestingPeriodMonths
  );

  await whitelistSale.deployed();

  console.log("WhitelistSale deployed to:", whitelistSale.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
