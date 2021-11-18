import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

describe("BoosterUnpack", function () {
  let mhtOwner: SignerWithAddress;
  let boosterUnpack: Contract;
  let bmhtl: Contract;
  let bmhte: Contract;
  let nft: Contract;

  /* eslint-disable no-unused-vars */
  enum Rarity {
    LEGENDARY,
    EPIC,
    RARE,
    COMMON,
  }
  /* eslint-enable no-unused-vars */

  beforeEach(async function () {
    [, mhtOwner] = await ethers.getSigners();

    const BMHTL = await ethers.getContractFactory("BMHTL");
    bmhtl = await BMHTL.deploy(mhtOwner.address);
    await bmhtl.deployed();

    const BMHTE = await ethers.getContractFactory("BMHTE");
    bmhte = await BMHTE.deploy(mhtOwner.address);
    await bmhte.deployed();

    const MouseHero = await ethers.getContractFactory("MouseHero");
    nft = await MouseHero.deploy(mhtOwner.address);
    await nft.deployed();

    const BoosterUnpack = await ethers.getContractFactory("BoosterUnpack");
    boosterUnpack = await BoosterUnpack.deploy(
      mhtOwner.address,
      nft.address,
      bmhtl.address,
      bmhte.address
    );
    await boosterUnpack.deployed();

    await nft.connect(mhtOwner).setMinter(boosterUnpack.address);
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

  it("unpack not enough boosters", async function () {
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
    const BMHTInvalid = await ethers.getContractFactory("BMHTE");
    const bmhtinvalid = await BMHTInvalid.deploy(mhtOwner.address);
    await bmhtinvalid.deployed();

    const oneBooster = ethers.utils.parseEther("1");
    await bmhte.connect(mhtOwner).approve(boosterUnpack.address, oneBooster);

    await expect(
      boosterUnpack.connect(mhtOwner).unpack(bmhtinvalid.address, oneBooster)
    ).to.be.revertedWith("Invalid booster");
  });

  it("unpack 2 boosters", async function () {
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
      .to.emit(nft, "Transfer")
      .withArgs(
        "0x0000000000000000000000000000000000000000",
        mhtOwner.address,
        "0"
      )
      .to.emit(nft, "Transfer")
      .withArgs(
        "0x0000000000000000000000000000000000000000",
        mhtOwner.address,
        "1"
      )
      .to.emit(nft, "Mint")
      .withArgs(mhtOwner.address, Rarity.LEGENDARY);
  });

  it("unpack boosters EPIC and get LEGENDARY NFT with 1% chance", async function () {
    const twoHundred = 200;
    const thousandboosters = ethers.utils.parseEther(twoHundred.toString());

    await bmhte
      .connect(mhtOwner)
      .approve(boosterUnpack.address, thousandboosters);

    const tx = boosterUnpack
      .connect(mhtOwner)
      .unpack(bmhte.address, thousandboosters);

    await expect(tx)
      .to.emit(nft, "Mint")
      .withArgs(mhtOwner.address, Rarity.EPIC)
      .to.emit(nft, "Mint")
      .withArgs(mhtOwner.address, Rarity.LEGENDARY);
  });
});
