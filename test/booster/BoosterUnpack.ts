import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

describe("BoosterUnpack", function () {
  let mhtOwner: SignerWithAddress;
  let boosterUnpack: Contract;
  let bmhtl: Contract;
  let bmhte: Contract;
  let mouseHeroNFT: Contract;

  beforeEach(async function () {
    [, mhtOwner] = await ethers.getSigners();

    const BoosterUnpack = await ethers.getContractFactory("BoosterUnpack");
    boosterUnpack = await BoosterUnpack.deploy(mhtOwner.address);
    await boosterUnpack.deployed();

    const BMHTL = await ethers.getContractFactory("BMHTL");
    bmhtl = await BMHTL.deploy(mhtOwner.address);
    await bmhtl.deployed();

    const BMHTE = await ethers.getContractFactory("BMHTE");
    bmhte = await BMHTE.deploy(mhtOwner.address);
    await bmhte.deployed();

    const MouseHeroNFT = await ethers.getContractFactory("MouseHeroNFT");
    mouseHeroNFT = await MouseHeroNFT.deploy(mhtOwner.address);
    await mouseHeroNFT.deployed();
  });

  it("Should have owner different than deployer", async function () {
    expect(await boosterUnpack.owner()).to.equal(mhtOwner.address);
  });
  it("Should be pausable", async function () {
    await boosterUnpack.connect(mhtOwner).pause();

    await expect(
      boosterUnpack.unpack(bmhtl.address, ethers.utils.parseEther("1"))
    ).to.be.revertedWith("Pausable: paused");

    await boosterUnpack.connect(mhtOwner).unpause();

    await expect(
      boosterUnpack.unpack(bmhtl.address, ethers.utils.parseEther("1"))
    ).to.be.revertedWith("Not enough boosters");
  });

  it("configure", async function () {
    const boosters = [bmhtl.address, bmhte.address];
    await boosterUnpack
      .connect(mhtOwner)
      .configure(boosters, mouseHeroNFT.address);

    expect(await boosterUnpack.boosters(0)).to.equal(boosters[0]);
    expect(await boosterUnpack.boosters(1)).to.equal(boosters[1]);
    expect(await boosterUnpack.nft()).to.equal(mouseHeroNFT.address);

    const boostersReverted = boosters.slice().reverse();
    await boosterUnpack
      .connect(mhtOwner)
      .configure(boostersReverted, mhtOwner.address);

    expect(await boosterUnpack.boosters(0)).to.equal(boosters[1]);
    expect(await boosterUnpack.boosters(1)).to.equal(boosters[0]);
    expect(await boosterUnpack.nft()).to.equal(mhtOwner.address);
  });

  it("unpack not enough boosters", async function () {
    const boosters = [bmhtl.address, bmhte.address];
    await boosterUnpack
      .connect(mhtOwner)
      .configure(boosters, mouseHeroNFT.address);

    await expect(
      boosterUnpack.unpack(bmhtl.address, ethers.utils.parseEther("1"))
    ).to.be.revertedWith("Not enough boosters");
  });

  it("unpack invalid booster amount", async function () {
    await expect(
      boosterUnpack
        .connect(mhtOwner)
        .unpack(bmhtl.address, ethers.utils.parseEther("1.5"))
    ).to.be.revertedWith("Invalid amount");
  });

  it("unpack invalid booster", async function () {
    await boosterUnpack
      .connect(mhtOwner)
      .configure([bmhtl.address], mouseHeroNFT.address);
    const oneBooster = ethers.utils.parseEther("1");
    await bmhte.connect(mhtOwner).approve(boosterUnpack.address, oneBooster);

    await expect(
      boosterUnpack.connect(mhtOwner).unpack(bmhte.address, oneBooster)
    ).to.be.revertedWith("Invalid booster");
  });

  it("unpack 2 boosters", async function () {
    await mouseHeroNFT.connect(mhtOwner).configure(boosterUnpack.address);
    await boosterUnpack
      .connect(mhtOwner)
      .configure([bmhtl.address, bmhte.address], mouseHeroNFT.address);

    const twoBoosters = ethers.utils.parseEther("2");

    await bmhtl.connect(mhtOwner).approve(boosterUnpack.address, twoBoosters);

    const tx = boosterUnpack
      .connect(mhtOwner)
      .unpack(bmhtl.address, twoBoosters);

    await expect(tx)
      .to.emit(bmhtl, "Transfer")
      .withArgs(
        mhtOwner.address,
        "0x0000000000000000000000000000000000000000",
        twoBoosters
      )
      .to.emit(mouseHeroNFT, "Transfer")
      .withArgs(
        "0x0000000000000000000000000000000000000000",
        mhtOwner.address,
        "0"
      )
      .to.emit(mouseHeroNFT, "Transfer")
      .withArgs(
        "0x0000000000000000000000000000000000000000",
        mhtOwner.address,
        "1"
      );
  });

  it("unpack boosters EPIC and get LEGENDARY NFT with 5% chance", async function () {
    await mouseHeroNFT.connect(mhtOwner).configure(boosterUnpack.address);
    await boosterUnpack
      .connect(mhtOwner)
      .configure([bmhtl.address, bmhte.address], mouseHeroNFT.address);

    const hundred = 100;
    const thousandboosters = ethers.utils.parseEther(hundred.toString());

    await bmhte
      .connect(mhtOwner)
      .approve(boosterUnpack.address, thousandboosters);

    await boosterUnpack
      .connect(mhtOwner)
      .unpack(bmhte.address, thousandboosters);

    const legendary = "0";
    const nfts = await Promise.all(
      Array.from(Array(hundred).keys()).map((i) => mouseHeroNFT.tokenURI(i))
    );
    const legendaryNFT = new RegExp(
      `https://nft.mousehaunt.com/hero/${legendary}/`
    );
    expect(nfts).match(legendaryNFT);
  });
});
