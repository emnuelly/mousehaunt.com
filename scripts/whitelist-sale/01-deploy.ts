import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config, { Network } from "../../src/config";

async function main() {
  const network: Network = process.env.NETWORK as Network;

  const MHT = await ethers.getContractFactory("MouseHauntToken");
  const mht = MHT.attach(config[network].MouseHauntToken.address);

  const wei = (x: string): string => ethers.utils.parseEther(x).toString();

  const WhitelistSale = await ethers.getContractFactory("WhitelistSale");
  const whitelistSale = await WhitelistSale.deploy(
    config[network].WhitelistSale.PrivateSale.owner,
    mht.address,
    config[network].BUSD.address,
    wei(config[network].WhitelistSale.PrivateSale.MHTtoBUSD),
    wei(config[network].WhitelistSale.PrivateSale.minMhtAmount),
    wei(config[network].WhitelistSale.PrivateSale.maxMhtAmount),
    config[network].WhitelistSale.PrivateSale.unlockAtIGOPercent,
    config[network].WhitelistSale.PrivateSale.cliffMonths,
    config[network].WhitelistSale.PrivateSale.vestingPeriodMonths
  );

  await whitelistSale.deployed();

  console.log("WhitelistSale deployed to:", whitelistSale.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
