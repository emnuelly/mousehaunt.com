import { ethers } from "hardhat";

async function main() {
  const BUSD_CHR_PANCAKESWAP_PAIR_ADDRESS =
    "0x6045931E511EF7e53A4A817F971e0CA28c758809";

  const Oracle = await ethers.getContractFactory("Oracle");
  const oracle = await Oracle.deploy(BUSD_CHR_PANCAKESWAP_PAIR_ADDRESS);

  await oracle.deployed();

  console.log("Oracle deployed to:", oracle.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
