import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config from "../../src/config";

async function main() {
  const WhitelistSale = await ethers.getContractFactory("WhitelistSale");
  const whitelistSale = await WhitelistSale.deploy(
    config.mainnet.MouseHauntToken.owner,
    config.mainnet.MouseHauntToken.address,
    config.mainnet.BUSD.address,
    ethers.utils
      .parseEther(config.mainnet.WhitelistSale.MHTtoBUSD.toString())
      .toString()
  );

  await whitelistSale.deployed();

  console.log("WhitelistSale deployed to:", whitelistSale.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
