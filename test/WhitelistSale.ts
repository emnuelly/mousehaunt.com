import { expect } from "chai";
import { ethers } from "hardhat";

describe("WhitelistSale", function () {
  const mhtToBusd = 0.1;

  it("Should have owner different than deployer", async function () {
    const [, mhtOwner, busdOwner] = await ethers.getSigners();

    const MHT = await ethers.getContractFactory("MouseHauntToken");
    const mht = await MHT.deploy(mhtOwner.address);
    const busd = await MHT.deploy(busdOwner.address);

    const WhitelistSale = await ethers.getContractFactory("WhitelistSale");
    const whitelistSale = await WhitelistSale.deploy(
      mhtOwner.address,
      mht.address,
      busd.address,
      ethers.utils.parseEther(mhtToBusd.toString()).toString()
    );

    await whitelistSale.deployed();

    expect(await whitelistSale.owner()).to.equal(mhtOwner.address);
  });
  it("Should be pausable", async function () {
    const [, mhtOwner, busdOwner] = await ethers.getSigners();

    const MHT = await ethers.getContractFactory("MouseHauntToken");
    const mht = await MHT.deploy(mhtOwner.address);
    const busd = await MHT.deploy(busdOwner.address);

    const WhitelistSale = await ethers.getContractFactory("WhitelistSale");
    const whitelistSale = await WhitelistSale.deploy(
      mhtOwner.address,
      mht.address,
      busd.address,
      ethers.utils.parseEther(mhtToBusd.toString()).toString()
    );

    await whitelistSale.deployed();

    await whitelistSale.connect(mhtOwner).pause();

    await expect(
      whitelistSale.connect(mhtOwner).addToWhitelist([busdOwner.address], 1)
    ).to.be.revertedWith("Pausable: paused");

    await whitelistSale.connect(mhtOwner).unpause();

    await whitelistSale
      .connect(mhtOwner)
      .addToWhitelist([busdOwner.address], 1);
  });
  it("Should buy 20% of MHT with whitelist and approve pattern", async function () {
    const [, mhtOwner, buyer] = await ethers.getSigners();

    const MHT = await ethers.getContractFactory("MouseHauntToken");
    const mht = await MHT.deploy(mhtOwner.address);
    const busd = await MHT.deploy(buyer.address);

    const WhitelistSale = await ethers.getContractFactory("WhitelistSale");
    const whitelistSale = await WhitelistSale.deploy(
      mhtOwner.address,
      mht.address,
      busd.address,
      ethers.utils.parseEther(mhtToBusd.toString()).toString()
    );

    await whitelistSale.deployed();

    const mhtToBuy = ethers.utils.parseEther("3.1415");
    const busdTotal = ethers.utils.parseEther("0.31415");

    await whitelistSale
      .connect(mhtOwner)
      .addToWhitelist([buyer.address], mhtToBuy);

    await mht.connect(mhtOwner).approve(whitelistSale.address, mhtToBuy);
    await busd.connect(buyer).approve(whitelistSale.address, busdTotal);

    await whitelistSale.connect(buyer).buy(mhtToBuy);

    expect(await mht.balanceOf(buyer.address)).to.equal(
      ethers.utils.parseEther("0.6283")
    );
    expect(await mht.balanceOf(mhtOwner.address)).to.equal(
      ethers.utils
        .parseEther("100000000")
        .sub(ethers.utils.parseEther("0.6283"))
    );

    await whitelistSale.connect(mhtOwner).removeFromWhitelist([buyer.address]);

    await expect(whitelistSale.buy(1)).to.be.revertedWith(
      "Sale: amount > whitelisted"
    );
  });
  it("Should withdraw remaining MHT after IDO", async function () {
    const [, mhtOwner, buyer] = await ethers.getSigners();

    const MHT = await ethers.getContractFactory("MouseHauntToken");
    const mht = await MHT.deploy(mhtOwner.address);
    const busd = await MHT.deploy(buyer.address);

    const WhitelistSale = await ethers.getContractFactory("WhitelistSale");
    const whitelistSale = await WhitelistSale.deploy(
      mhtOwner.address,
      mht.address,
      busd.address,
      ethers.utils.parseEther(mhtToBusd.toString()).toString()
    );

    await whitelistSale.deployed();

    const mhtToBuy = ethers.utils.parseEther("3.1415");
    const busdTotal = ethers.utils.parseEther("0.31415");

    await whitelistSale
      .connect(mhtOwner)
      .addToWhitelist([buyer.address], mhtToBuy);

    await mht.connect(mhtOwner).approve(whitelistSale.address, mhtToBuy);
    await busd.connect(buyer).approve(whitelistSale.address, busdTotal);

    await whitelistSale.connect(buyer).buy(mhtToBuy);

    expect(await mht.balanceOf(buyer.address)).to.equal(
      ethers.utils.parseEther("0.6283")
    );

    await expect(whitelistSale.connect(buyer).withdraw()).to.be.revertedWith(
      "Sale: locked before IDO"
    );

    const tx = whitelistSale.connect(mhtOwner).idoUnlock();
    await expect(tx).to.emit(whitelistSale, "IDOUnlocked");

    await whitelistSale.connect(buyer).withdraw();

    expect(await mht.balanceOf(buyer.address)).to.equal(
      ethers.utils.parseEther("3.1415")
    );
  });
  it("Should be possible to update MHT to IDO", async function () {
    const [, mhtOwner, buyer] = await ethers.getSigners();

    const MHT = await ethers.getContractFactory("MouseHauntToken");
    const mht = await MHT.deploy(mhtOwner.address);
    const busd = await MHT.deploy(buyer.address);

    const WhitelistSale = await ethers.getContractFactory("WhitelistSale");
    const whitelistSale = await WhitelistSale.deploy(
      mhtOwner.address,
      mht.address,
      busd.address,
      ethers.utils.parseEther(mhtToBusd.toString()).toString()
    );

    await whitelistSale.deployed();

    const mhtToBuy = ethers.utils.parseEther("2.71828");
    const wrongBusdTotal = ethers.utils.parseEther("0.271828");

    await whitelistSale
      .connect(mhtOwner)
      .addToWhitelist([buyer.address], mhtToBuy);

    const invalidMHTtoUSD = "0";
    await expect(
      whitelistSale.connect(mhtOwner).updateMHTToBUSD(invalidMHTtoUSD)
    ).to.be.revertedWith("Sale: invalid MHT to BUSD");

    const newMHTtoUSD = ethers.utils.parseEther("1.4142");
    await whitelistSale.connect(mhtOwner).updateMHTToBUSD(newMHTtoUSD);

    await mht.connect(mhtOwner).approve(whitelistSale.address, mhtToBuy);
    await busd.connect(buyer).approve(whitelistSale.address, wrongBusdTotal);

    await expect(whitelistSale.connect(buyer).buy(mhtToBuy)).to.be.revertedWith(
      "ERC20: transfer amount exceeds allowance"
    );

    const rightBusdTotal = ethers.utils.parseEther("3.844191576");
    await busd.connect(buyer).approve(whitelistSale.address, rightBusdTotal);

    await whitelistSale.connect(buyer).buy(mhtToBuy);

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

    const WhitelistSale = await ethers.getContractFactory("WhitelistSale");
    const whitelistSale = await WhitelistSale.deploy(
      mhtOwner.address,
      mht.address,
      busd.address,
      ethers.utils.parseEther(mhtToBusd.toString()).toString()
    );

    await whitelistSale.deployed();

    const lessThan1MHT = ethers.utils.parseEther("0.9");

    await whitelistSale
      .connect(mhtOwner)
      .addToWhitelist([buyer.address], lessThan1MHT);

    await expect(
      whitelistSale.connect(buyer).buy(lessThan1MHT)
    ).to.be.revertedWith("Sale: minimum 1 MHT");
  });
});
