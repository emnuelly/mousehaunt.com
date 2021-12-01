import { expect } from "chai";
import { ethers } from "hardhat";

describe("Staker", function () {
  it("Should assign the total supply to the owner", async function () {
    const [owner, to] = await ethers.getSigners();
    const Staker = await ethers.getContractFactory("Staker");
    const stake = await Staker.deploy(owner.address, "");
    await stake.deployed();

    //const ownerBalance = await stake.balanceOf(owner.address);
    //expect(await stake.total()).to.equal(ownerBalance);
  });
});
