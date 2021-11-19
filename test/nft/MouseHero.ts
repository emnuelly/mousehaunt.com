import { expect } from "chai";
import { ethers } from "hardhat";

describe("MouseHero", function () {
  /* eslint-disable no-unused-vars */
  enum Rarity {
    LEGENDARY,
    EPIC,
    RARE,
    COMMON,
  }
  /* eslint-enable no-unused-vars */
  it("Should be an ERC721 token", async function () {
    const [owner] = await ethers.getSigners();
    const MouseHero = await ethers.getContractFactory("MouseHero");
    const nft = await MouseHero.deploy(owner.address);
    await nft.deployed();
    const interfaceId = "0x80ac58cd";
    expect(await nft.supportsInterface(interfaceId)).to.equal(true);
  });
  it("Should have baseURI", async function () {
    const [owner, to] = await ethers.getSigners();
    const MouseHero = await ethers.getContractFactory("MouseHero");
    const nft = await MouseHero.deploy(owner.address);
    await nft.deployed();
    await nft.setMinter(owner.address);
    const legendary = nft.safeMint(to.address, Rarity.LEGENDARY);
    expect(await nft.tokenURI(0)).to.equal("https://nft.mousehaunt.com/hero/0");
    await expect(legendary)
      .to.emit(nft, "Mint")
      .withArgs(to.address, 0, Rarity.LEGENDARY);

    const epic = nft.safeMint(to.address, Rarity.EPIC);
    expect(await nft.tokenURI(1)).to.equal("https://nft.mousehaunt.com/hero/1");
    await expect(epic)
      .to.emit(nft, "Mint")
      .withArgs(to.address, 1, Rarity.EPIC);

    const rare = nft.safeMint(to.address, Rarity.RARE);
    expect(await nft.tokenURI(2)).to.equal("https://nft.mousehaunt.com/hero/2");
    await expect(rare)
      .to.emit(nft, "Mint")
      .withArgs(to.address, 2, Rarity.RARE);

    const common = nft.safeMint(to.address, Rarity.COMMON);
    expect(await nft.tokenURI(3)).to.equal("https://nft.mousehaunt.com/hero/3");
    await expect(common)
      .to.emit(nft, "Mint")
      .withArgs(to.address, 3, Rarity.COMMON);
  });
  it("Should be pausable", async function () {
    const [owner] = await ethers.getSigners();
    const MouseHero = await ethers.getContractFactory("MouseHero");
    const nft = await MouseHero.deploy(owner.address);
    await nft.deployed();
    await nft.pause();

    await expect(nft.safeMint(owner.address, Rarity.LEGENDARY)).to.revertedWith(
      "Pausable: paused"
    );

    await nft.unpause();
  });
  it("Should be burnable", async function () {
    const [owner] = await ethers.getSigners();
    const MouseHero = await ethers.getContractFactory("MouseHero");
    const nft = await MouseHero.deploy(owner.address);
    await nft.deployed();

    await nft.setMinter(owner.address);
    await nft.safeMint(owner.address, Rarity.COMMON);
    expect(await nft.tokenURI(0)).to.equal("https://nft.mousehaunt.com/hero/0");

    await nft.burn(0);
    await expect(nft.tokenURI(0)).to.revertedWith(
      "ERC721URIStorage: URI query for nonexistent token"
    );
  });
  it("Should only mint after minter is set", async function () {
    const [owner] = await ethers.getSigners();
    const MouseHero = await ethers.getContractFactory("MouseHero");
    const nft = await MouseHero.deploy(owner.address);
    await nft.deployed();

    await expect(nft.safeMint(owner.address, Rarity.LEGENDARY)).to.revertedWith(
      "Minter not set"
    );
  });
  it("Should only mint from minter", async function () {
    const [owner, boosterUnpack] = await ethers.getSigners();
    const MouseHero = await ethers.getContractFactory("MouseHero");
    const nft = await MouseHero.deploy(owner.address);
    await nft.deployed();

    await nft.setMinter(boosterUnpack.address);
    await expect(nft.safeMint(owner.address, Rarity.LEGENDARY)).to.revertedWith(
      "Not minter"
    );
  });
});
