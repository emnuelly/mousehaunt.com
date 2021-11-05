import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import config from "../../src/config";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const MouseHauntToken = await ethers.getContractFactory("MouseHauntToken");
  const mht = await MouseHauntToken.deploy(
    config.mainnet.MouseHauntToken.owner
  );

  await mht.deployed();

  console.log("Mouse Haunt Token deployed to:", mht.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
