import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

describe("BoosterSale", function () {
  let boosterOwner: SignerWithAddress;
  let buyer: SignerWithAddress;

  let busd: Contract;
  let boosterSale: Contract;
  let bmhtl: Contract;
  let bmhte: Contract;
  let boosters: string[];

  const busdPricePerBoosterInWei = [
    ethers.utils.parseEther("250"),
    ethers.utils.parseEther("75"),
  ];
  const capPerBoosterInWei = [
    ethers.utils.parseEther("2"),
    ethers.utils.parseEther("6"),
  ];

  beforeEach(async function () {
    [, boosterOwner, buyer] = await ethers.getSigners();

    const BUSD = await ethers.getContractFactory("MouseHauntToken");
    busd = await BUSD.deploy(buyer.address);
    await busd.deployed();

    const BMHTL = await ethers.getContractFactory("BMHTL");
    bmhtl = await BMHTL.deploy(boosterOwner.address);
    await bmhtl.deployed();

    const BMHTE = await ethers.getContractFactory("BMHTE");
    bmhte = await BMHTE.deploy(boosterOwner.address);
    await bmhte.deployed();

    boosters = [bmhtl.address, bmhte.address];

    const BoosterSale = await ethers.getContractFactory("BoosterSale");
    boosterSale = await BoosterSale.deploy(boosterOwner.address, busd.address);
    await boosterSale.deployed();
  });

  it("Should have owner different than deployer", async function () {
    expect(await boosterSale.owner()).to.equal(boosterOwner.address);
  });
  it("Should be pausable", async function () {
    await boosterSale.connect(boosterOwner).pause();

    await expect(boosterSale.getBoosterIndex(bmhtl.address)).to.be.revertedWith(
      "Pausable: paused"
    );

    await boosterSale.connect(boosterOwner).unpause();

    await expect(
      boosterSale.getBoosterIndex(bmhtl.address)
    ).to.not.be.revertedWith("Pausable: paused");
  });

  it("configure", async function () {
    await boosterSale
      .connect(boosterOwner)
      .configure(boosters, busdPricePerBoosterInWei, capPerBoosterInWei);

    expect(await boosterSale.boosters(0)).to.equal(boosters[0]);
    expect(await boosterSale.boosters(1)).to.equal(boosters[1]);

    expect(await boosterSale.busdPricePerBoosterInWei(0)).to.equal(
      busdPricePerBoosterInWei[0]
    );
    expect(await boosterSale.busdPricePerBoosterInWei(1)).to.equal(
      busdPricePerBoosterInWei[1]
    );

    expect(await boosterSale.capPerBoosterInWei(0)).to.equal(
      capPerBoosterInWei[0]
    );
    expect(await boosterSale.capPerBoosterInWei(1)).to.equal(
      capPerBoosterInWei[1]
    );

    await expect(
      boosterSale
        .connect(boosterOwner)
        .configure(
          boosters,
          [busdPricePerBoosterInWei[0]],
          [capPerBoosterInWei[0]]
        )
    ).to.be.revertedWith("BoosterSale: invalid config");
  });

  it("configure 2x", async function () {
    await boosterSale
      .connect(boosterOwner)
      .configure(boosters, busdPricePerBoosterInWei, capPerBoosterInWei);

    expect(await boosterSale.boosters(0)).to.equal(boosters[0]);
    expect(await boosterSale.boosters(1)).to.equal(boosters[1]);

    await boosterSale
      .connect(boosterOwner)
      .configure(
        boosters.slice().reverse(),
        busdPricePerBoosterInWei.slice().reverse(),
        capPerBoosterInWei.slice().reverse()
      );

    expect(await boosterSale.boosters(0)).to.equal(boosters[1]);
    expect(await boosterSale.boosters(1)).to.equal(boosters[0]);
  });

  it("getBoosterIndex", async function () {
    await boosterSale
      .connect(boosterOwner)
      .configure(boosters, busdPricePerBoosterInWei, capPerBoosterInWei);

    expect(await boosterSale.getBoosterIndex(bmhtl.address)).to.equal(0);
    expect(await boosterSale.getBoosterIndex(bmhte.address)).to.equal(1);
    await expect(
      boosterSale.getBoosterIndex(boosterOwner.address)
    ).to.be.revertedWith("BoosterSale: invalid booster");
  });

  it("buy: invalid booster amount", async function () {
    await boosterSale
      .connect(boosterOwner)
      .addToWhitelist([boosterOwner.address]);

    await expect(
      boosterSale
        .connect(boosterOwner)
        .buy(bmhtl.address, ethers.utils.parseEther("0.9"))
    ).to.be.revertedWith("BoosterSale: invalid amount");

    await expect(
      boosterSale
        .connect(boosterOwner)
        .buy(bmhtl.address, ethers.utils.parseEther("1.5"))
    ).to.be.revertedWith("BoosterSale: invalid amount");
  });

  it("buy: whitelist", async function () {
    await boosterSale.connect(boosterOwner).addToWhitelist([buyer.address]);

    await expect(
      boosterSale
        .connect(buyer)
        .buy(bmhtl.address, ethers.utils.parseEther("0"))
    ).to.be.revertedWith("BoosterSale: invalid amount");

    await boosterSale
      .connect(boosterOwner)
      .removeFromWhitelist([buyer.address]);

    await expect(
      boosterSale
        .connect(buyer)
        .buy(bmhtl.address, ethers.utils.parseEther("1"))
    ).to.be.revertedWith("BoosterSale: not whitelisted");
  });

  it("buy: above cap", async function () {
    await boosterSale.connect(boosterOwner).addToWhitelist([buyer.address]);

    await boosterSale
      .connect(boosterOwner)
      .configure(boosters, busdPricePerBoosterInWei, capPerBoosterInWei);

    const tenBoosters = ethers.utils.parseEther("10");
    await bmhte.connect(boosterOwner).approve(boosterSale.address, tenBoosters);

    await expect(
      boosterSale.connect(buyer).buy(bmhte.address, tenBoosters)
    ).to.be.revertedWith("BoosterSale: above cap");
  });

  it("buy 2 LEGENDARY boosters", async function () {
    await boosterSale.connect(boosterOwner).addToWhitelist([buyer.address]);

    await boosterSale
      .connect(boosterOwner)
      .configure(boosters, busdPricePerBoosterInWei, capPerBoosterInWei);

    const twoBoosters = "2";
    const twoBoostersInWei = ethers.utils.parseEther(twoBoosters);
    const busdPriceInWei = busdPricePerBoosterInWei[0].mul(twoBoosters);
    await busd.connect(buyer).approve(boosterSale.address, busdPriceInWei);
    await bmhtl
      .connect(boosterOwner)
      .approve(boosterSale.address, twoBoostersInWei);

    expect(await bmhtl.balanceOf(buyer.address)).to.equal("0");

    const tx = boosterSale.connect(buyer).buy(bmhtl.address, twoBoostersInWei);

    await expect(tx)
      .to.emit(bmhtl, "Transfer")
      .withArgs(boosterOwner.address, buyer.address, twoBoostersInWei)
      .to.emit(busd, "Transfer")
      .withArgs(buyer.address, boosterOwner.address, busdPriceInWei);

    expect(await bmhtl.balanceOf(buyer.address)).to.equal(twoBoostersInWei);
  });

  it("buy 6 EPIC boosters", async function () {
    await boosterSale.connect(boosterOwner).addToWhitelist([buyer.address]);

    await boosterSale
      .connect(boosterOwner)
      .configure(boosters, busdPricePerBoosterInWei, capPerBoosterInWei);

    const sixBoosters = "6";
    const sixBoostersInWei = ethers.utils.parseEther(sixBoosters);
    const busdPriceInWei = busdPricePerBoosterInWei[1].mul(sixBoosters);
    await busd.connect(buyer).approve(boosterSale.address, busdPriceInWei);
    await bmhte
      .connect(boosterOwner)
      .approve(boosterSale.address, sixBoostersInWei);

    expect(await bmhte.balanceOf(buyer.address)).to.equal("0");

    const tx = boosterSale.connect(buyer).buy(bmhte.address, sixBoostersInWei);

    await expect(tx)
      .to.emit(bmhte, "Transfer")
      .withArgs(boosterOwner.address, buyer.address, sixBoostersInWei)
      .to.emit(busd, "Transfer")
      .withArgs(buyer.address, boosterOwner.address, busdPriceInWei);

    expect(await bmhte.balanceOf(buyer.address)).to.equal(sixBoostersInWei);
  });
});
