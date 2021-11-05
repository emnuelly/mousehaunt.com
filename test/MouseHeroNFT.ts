import { expect } from "chai";
import { ethers } from "hardhat";

describe("MouseHeroNFT", function () {
  it("Should be an ERC721 token", async function () {
    const [owner] = await ethers.getSigners();
    const MouseHeroNFT = await ethers.getContractFactory("MouseHeroNFT");
    const nft = await MouseHeroNFT.deploy(owner.address);
    await nft.deployed();
    const interfaceId = "0x80ac58cd";
    expect(await nft.supportsInterface(interfaceId)).to.equal(true);
  });
  it("Should have baseURI", async function () {
    const [owner] = await ethers.getSigners();
    const MouseHeroNFT = await ethers.getContractFactory("MouseHeroNFT");
    const nft = await MouseHeroNFT.deploy(owner.address);
    await nft.deployed();
    await nft.configure(owner.address);
    await nft.safeMint(owner.address, "1");
    expect(await nft.tokenURI(0)).to.equal(
      "https://nft.mousehaunt.com/hero/1/0"
    );
  });
  it("Should be pausable", async function () {
    const [owner] = await ethers.getSigners();
    const MouseHeroNFT = await ethers.getContractFactory("MouseHeroNFT");
    const nft = await MouseHeroNFT.deploy(owner.address);
    await nft.deployed();
    await nft.pause();

    await expect(nft.safeMint(owner.address, "0")).to.revertedWith(
      "Pausable: paused"
    );

    await nft.unpause();
  });
  it("Should be burnable", async function () {
    const [owner] = await ethers.getSigners();
    const MouseHeroNFT = await ethers.getContractFactory("MouseHeroNFT");
    const nft = await MouseHeroNFT.deploy(owner.address);
    await nft.deployed();

    await nft.configure(owner.address);
    await nft.safeMint(owner.address, "2");
    expect(await nft.tokenURI(0)).to.equal(
      "https://nft.mousehaunt.com/hero/2/0"
    );

    await nft.burn(0);
    await expect(nft.tokenURI(0)).to.revertedWith(
      "ERC721URIStorage: URI query for nonexistent token"
    );
  });
  it("Should only mint from BoosterUnpack", async function () {
    const [owner, boosterUnpack] = await ethers.getSigners();
    const MouseHeroNFT = await ethers.getContractFactory("MouseHeroNFT");
    const nft = await MouseHeroNFT.deploy(owner.address);
    await nft.deployed();

    await nft.configure(boosterUnpack.address);
    await expect(nft.safeMint(owner.address, "42")).to.revertedWith(
      "Only BoosterUnpack can mint"
    );
  });
});
