import { expect } from "chai";
import { ethers } from "hardhat";

describe("SeedSale", function () {
  const mhtToBusd = 0.1;

  it("Should have owner different than deployer", async function () {
    const [, mhtOwner, busdOwner] = await ethers.getSigners();

    const MHT = await ethers.getContractFactory("MouseHauntToken");
    const mht = await MHT.deploy(mhtOwner.address);
    const busd = await MHT.deploy(busdOwner.address);

    const SeedSale = await ethers.getContractFactory("SeedSale");
    const seedSale = await SeedSale.deploy(
      mhtOwner.address,
      mht.address,
      busd.address,
      ethers.utils.parseEther(mhtToBusd.toString()).toString()
    );

    await seedSale.deployed();

    expect(await seedSale.owner()).to.equal(mhtOwner.address);
  });
  it("Should be pausable", async function () {
    const [, mhtOwner, busdOwner] = await ethers.getSigners();

    const MHT = await ethers.getContractFactory("MouseHauntToken");
    const mht = await MHT.deploy(mhtOwner.address);
    const busd = await MHT.deploy(busdOwner.address);

    const SeedSale = await ethers.getContractFactory("SeedSale");
    const seedSale = await SeedSale.deploy(
      mhtOwner.address,
      mht.address,
      busd.address,
      ethers.utils.parseEther(mhtToBusd.toString()).toString()
    );

    await seedSale.deployed();

    await seedSale.connect(mhtOwner).pause();

    await expect(seedSale.buy(1)).to.be.revertedWith("Pausable: paused");

    await seedSale.connect(mhtOwner).unpause();

    await expect(seedSale.buy(1)).to.be.revertedWith(
      "SeedSale: not whitelisted"
    );
  });
  it("Should buy 20% of MHT with whitelist and approve pattern", async function () {
    const [, mhtOwner, buyer] = await ethers.getSigners();

    const MHT = await ethers.getContractFactory("MouseHauntToken");
    const mht = await MHT.deploy(mhtOwner.address);
    const busd = await MHT.deploy(buyer.address);

    const SeedSale = await ethers.getContractFactory("SeedSale");
    const seedSale = await SeedSale.deploy(
      mhtOwner.address,
      mht.address,
      busd.address,
      ethers.utils.parseEther(mhtToBusd.toString()).toString()
    );

    await seedSale.deployed();

    await seedSale.connect(mhtOwner).addToWhitelist([buyer.address]);

    const mhtToBuy = ethers.utils.parseEther("3.1415");
    const busdTotal = ethers.utils.parseEther("0.31415");

    await mht.connect(mhtOwner).approve(seedSale.address, mhtToBuy);
    await busd.connect(buyer).approve(seedSale.address, busdTotal);

    await seedSale.connect(buyer).buy(mhtToBuy);

    expect(await mht.balanceOf(buyer.address)).to.equal(
      ethers.utils.parseEther("0.6283")
    );
    expect(await mht.balanceOf(mhtOwner.address)).to.equal(
      ethers.utils
        .parseEther("100000000")
        .sub(ethers.utils.parseEther("0.6283"))
    );

    await seedSale.connect(mhtOwner).removeFromWhitelist([buyer.address]);

    await expect(seedSale.buy(1)).to.be.revertedWith(
      "SeedSale: not whitelisted"
    );
  });
  it("Should withdraw remaining MHT after IDO", async function () {
    const [, mhtOwner, buyer] = await ethers.getSigners();

    const MHT = await ethers.getContractFactory("MouseHauntToken");
    const mht = await MHT.deploy(mhtOwner.address);
    const busd = await MHT.deploy(buyer.address);

    const SeedSale = await ethers.getContractFactory("SeedSale");
    const seedSale = await SeedSale.deploy(
      mhtOwner.address,
      mht.address,
      busd.address,
      ethers.utils.parseEther(mhtToBusd.toString()).toString()
    );

    await seedSale.deployed();

    await seedSale.connect(mhtOwner).addToWhitelist([buyer.address]);

    const mhtToBuy = ethers.utils.parseEther("3.1415");
    const busdTotal = ethers.utils.parseEther("0.31415");

    await mht.connect(mhtOwner).approve(seedSale.address, mhtToBuy);
    await busd.connect(buyer).approve(seedSale.address, busdTotal);

    await seedSale.connect(buyer).buy(mhtToBuy);

    expect(await mht.balanceOf(buyer.address)).to.equal(
      ethers.utils.parseEther("0.6283")
    );

    await expect(seedSale.connect(buyer).withdraw()).to.be.revertedWith(
      "SeedSale: locked before IDO"
    );

    const tx = seedSale.connect(mhtOwner).idoUnlock();
    await expect(tx).to.emit(seedSale, "IDOUnlocked");

    await seedSale.connect(buyer).withdraw();

    expect(await mht.balanceOf(buyer.address)).to.equal(
      ethers.utils.parseEther("3.1415")
    );
  });
  it("Should be possible to update MHT to IDO", async function () {
    const [, mhtOwner, buyer] = await ethers.getSigners();

    const MHT = await ethers.getContractFactory("MouseHauntToken");
    const mht = await MHT.deploy(mhtOwner.address);
    const busd = await MHT.deploy(buyer.address);

    const SeedSale = await ethers.getContractFactory("SeedSale");
    const seedSale = await SeedSale.deploy(
      mhtOwner.address,
      mht.address,
      busd.address,
      ethers.utils.parseEther(mhtToBusd.toString()).toString()
    );

    await seedSale.deployed();

    await seedSale.connect(mhtOwner).addToWhitelist([buyer.address]);

    const invalidMHTtoUSD = "0";
    await expect(
      seedSale.connect(mhtOwner).updateMHTToBUSD(invalidMHTtoUSD)
    ).to.be.revertedWith("SeedSale: invalid MHT to BUSD");

    const newMHTtoUSD = ethers.utils.parseEther("1.4142");
    await seedSale.connect(mhtOwner).updateMHTToBUSD(newMHTtoUSD);

    const mhtToBuy = ethers.utils.parseEther("2.71828");
    const wrongBusdTotal = ethers.utils.parseEther("0.271828");

    await mht.connect(mhtOwner).approve(seedSale.address, mhtToBuy);
    await busd.connect(buyer).approve(seedSale.address, wrongBusdTotal);

    await expect(seedSale.connect(buyer).buy(mhtToBuy)).to.be.revertedWith(
      "ERC20: transfer amount exceeds allowance"
    );

    const rightBusdTotal = ethers.utils.parseEther("3.844191576");
    await busd.connect(buyer).approve(seedSale.address, rightBusdTotal);

    await seedSale.connect(buyer).buy(mhtToBuy);

    expect(await mht.balanceOf(buyer.address)).to.equal(
      ethers.utils.parseEther("0.543656")
    );
    expect(await mht.balanceOf(mhtOwner.address)).to.equal(
      ethers.utils
        .parseEther("100000000")
        .sub(ethers.utils.parseEther("0.543656"))
    );
  });
  it("Should buy a minimum of 1 MHT", async function () {
    const [, mhtOwner, buyer] = await ethers.getSigners();

    const MHT = await ethers.getContractFactory("MouseHauntToken");
    const mht = await MHT.deploy(mhtOwner.address);
    const busd = await MHT.deploy(buyer.address);

    const SeedSale = await ethers.getContractFactory("SeedSale");
    const seedSale = await SeedSale.deploy(
      mhtOwner.address,
      mht.address,
      busd.address,
      ethers.utils.parseEther(mhtToBusd.toString()).toString()
    );

    await seedSale.deployed();

    await seedSale.connect(mhtOwner).addToWhitelist([buyer.address]);

    const lessThan1MHT = ethers.utils.parseEther("0.9");

    await expect(seedSale.connect(buyer).buy(lessThan1MHT)).to.be.revertedWith(
      "SeedSale: invalid MHT purchase"
    );
  });
});
