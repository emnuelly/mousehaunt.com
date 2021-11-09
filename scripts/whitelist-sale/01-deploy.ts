import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config, { Network } from "../../src/config";

async function main() {
  const network: Network = process.env.NETWORK as Network;
  const sale = "PrivateSale";

  const MHT = await ethers.getContractFactory("MouseHauntToken");
  const mht = MHT.attach(config[network].MouseHauntToken.address);

  const wei = (x: string): string => ethers.utils.parseEther(x).toString();

  const WhitelistSale = await ethers.getContractFactory("WhitelistSale");
  const whitelistSale = await WhitelistSale.deploy(
    config[network].WhitelistSale[sale].owner,
    mht.address,
    config[network].BUSD.address,
    wei(config[network].WhitelistSale[sale].available),
    wei(config[network].WhitelistSale[sale].MHTtoBUSD),
    wei(config[network].WhitelistSale[sale].minMhtAmount),
    wei(config[network].WhitelistSale[sale].maxMhtAmount),
    config[network].WhitelistSale[sale].unlockAtIGOPercent,
    config[network].WhitelistSale[sale].cliffMonths,
    config[network].WhitelistSale[sale].vestingPeriodMonths
  );

  await whitelistSale.deployed();

  console.log("WhitelistSale deployed to:", whitelistSale.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
