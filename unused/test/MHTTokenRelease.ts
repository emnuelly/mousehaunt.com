import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers, network } from "hardhat";

describe("MHT Token Release", function () {
  let mhtOwner: SignerWithAddress,
    strategicPartnershipWallet: SignerWithAddress,
    seedWallet: SignerWithAddress,
    privateSaleWallet: SignerWithAddress,
    whitelistWallet: SignerWithAddress,
    dexLiquidityWallet: SignerWithAddress,
    teamAndAdvisorsWallet: SignerWithAddress,
    playToEarnWallet: SignerWithAddress,
    communityAndMarketingWallet: SignerWithAddress,
    reservesWallet: SignerWithAddress,
    stakingWallet: SignerWithAddress;

  let tokenRelease: Contract;
  let mht: Contract;

  beforeEach(async function () {
    [
      ,
      mhtOwner,
      strategicPartnershipWallet,
      seedWallet,
      privateSaleWallet,
      whitelistWallet,
      dexLiquidityWallet,
      teamAndAdvisorsWallet,
      playToEarnWallet,
      communityAndMarketingWallet,
      reservesWallet,
      stakingWallet,
    ] = await ethers.getSigners();

    const MHT = await ethers.getContractFactory("MouseHauntToken");
    mht = await MHT.deploy(mhtOwner.address);

    const MHTTokenRelease = await ethers.getContractFactory("MHTTokenRelease");
    tokenRelease = await MHTTokenRelease.deploy(
      mht.address,
      strategicPartnershipWallet.address,
      seedWallet.address,
      privateSaleWallet.address,
      whitelistWallet.address,
      dexLiquidityWallet.address,
      teamAndAdvisorsWallet.address,
      playToEarnWallet.address,
      communityAndMarketingWallet.address,
      reservesWallet.address,
      stakingWallet.address
    );

    await tokenRelease.deployed();
  });

  it("unlockedAtIDOAmount", async function () {
    expect(
      await tokenRelease.unlockedAtIDOAmount({
        totalTokens: 1000,
        unlockAtIDOPercent: 20,
        fullLockMonths: 0,
        vestingPeriodMonths: 3,
      })
    ).to.equal(200);

    expect(
      await tokenRelease.unlockedAtIDOAmount({
        totalTokens: 1234,
        unlockAtIDOPercent: 0,
        fullLockMonths: 1,
        vestingPeriodMonths: 2,
      })
    ).to.equal(0);
  });

  it("amountWithDecimal", async function () {
    expect(await tokenRelease.amountWithDecimal(1)).to.equal(
      ethers.utils.parseEther("1")
    );
  });

  it("timestampToYYYYMM", async function () {
    expect(
      await tokenRelease.timestampToYYYYMM(
        new Date("1970-01-01T00:00:00.000Z").getTime() / 1000
      )
    ).to.equal("197001");
    expect(
      await tokenRelease.timestampToYYYYMM(
        new Date("2021-12-01T00:00:00.000Z").getTime() / 1000
      )
    ).to.equal("202112");
  });

  it("releaseAmount", async function () {
    const allocation = {
      totalTokens: 100,
      unlockAtIDOPercent: 20,
      fullLockMonths: 0,
      vestingPeriodMonths: 3,
    };
    expect(await tokenRelease.releaseAmount(allocation, 0)).to.equal(20);
    expect(await tokenRelease.releaseAmount(allocation, 1)).to.equal(26);
    expect(await tokenRelease.releaseAmount(allocation, 2)).to.equal(26);
    expect(await tokenRelease.releaseAmount(allocation, 3)).to.equal(28);
    expect(await tokenRelease.releaseAmount(allocation, 4)).to.equal(0);
  });

  it("unlockAtIDOPercent", async function () {
    const allocation = {
      totalTokens: 3000000,
      unlockAtIDOPercent: 20,
      fullLockMonths: 0,
      vestingPeriodMonths: 3,
    };
    expect(await tokenRelease.releaseAmount(allocation, 0)).to.equal(600000);
    expect(await tokenRelease.releaseAmount(allocation, 1)).to.equal(800000);
    expect(await tokenRelease.releaseAmount(allocation, 2)).to.equal(800000);
    expect(await tokenRelease.releaseAmount(allocation, 3)).to.equal(800000);
    expect(await tokenRelease.releaseAmount(allocation, 4)).to.equal(0);
  });

  it("releaseAmount 100% IDO", async function () {
    const allocation = {
      totalTokens: 2250000,
      unlockAtIDOPercent: 100,
      fullLockMonths: 0,
      vestingPeriodMonths: 0,
    };
    expect(await tokenRelease.releaseAmount(allocation, 0)).to.equal(2250000);
    expect(await tokenRelease.releaseAmount(allocation, 1)).to.equal(0);
  });

  it("releaseAmount fullLockMonths", async function () {
    const allocation = {
      totalTokens: 16250000,
      unlockAtIDOPercent: 0,
      fullLockMonths: 8,
      vestingPeriodMonths: 12,
    };
    expect(await tokenRelease.releaseAmount(allocation, 0)).to.equal(0);
    expect(await tokenRelease.releaseAmount(allocation, 1)).to.equal(0);
    expect(await tokenRelease.releaseAmount(allocation, 2)).to.equal(0);
    expect(await tokenRelease.releaseAmount(allocation, 3)).to.equal(0);
    expect(await tokenRelease.releaseAmount(allocation, 4)).to.equal(0);
    expect(await tokenRelease.releaseAmount(allocation, 5)).to.equal(0);
    expect(await tokenRelease.releaseAmount(allocation, 6)).to.equal(0);
    expect(await tokenRelease.releaseAmount(allocation, 7)).to.equal(0);
    expect(await tokenRelease.releaseAmount(allocation, 8)).to.equal(0);
    expect(await tokenRelease.releaseAmount(allocation, 9)).to.equal(1354166);
    expect(await tokenRelease.releaseAmount(allocation, 10)).to.equal(1354166);
    expect(await tokenRelease.releaseAmount(allocation, 11)).to.equal(1354166);
    expect(await tokenRelease.releaseAmount(allocation, 12)).to.equal(1354166);
    expect(await tokenRelease.releaseAmount(allocation, 13)).to.equal(1354166);
    expect(await tokenRelease.releaseAmount(allocation, 14)).to.equal(1354166);
    expect(await tokenRelease.releaseAmount(allocation, 15)).to.equal(1354166);
    expect(await tokenRelease.releaseAmount(allocation, 16)).to.equal(1354166);
    expect(await tokenRelease.releaseAmount(allocation, 17)).to.equal(1354166);
    expect(await tokenRelease.releaseAmount(allocation, 18)).to.equal(1354166);
    expect(await tokenRelease.releaseAmount(allocation, 19)).to.equal(1354166);
    expect(await tokenRelease.releaseAmount(allocation, 20)).to.equal(1354174);
    expect(await tokenRelease.releaseAmount(allocation, 21)).to.equal(0);
  });

  it("claim", async function () {
    const wontClaim = tokenRelease.claim();

    await expect(wontClaim).to.not.emit(tokenRelease, "Claimed");

    const now = new Date("2021-12-01T00:00:00.000Z").getTime() / 1000;
    await network.provider.send("evm_mine", [now]);

    await mht
      .connect(mhtOwner)
      .transfer(tokenRelease.address, ethers.utils.parseEther("100000000"));

    const claim = tokenRelease.claim();

    await expect(claim).to.emit(tokenRelease, "Claimed").withArgs("202112");

    await expect(claim)
      .to.emit(mht, "Transfer")
      .withArgs(
        tokenRelease.address,
        strategicPartnershipWallet.address,
        ethers.utils.parseEther("250000")
      )
      .to.emit(mht, "Transfer")
      .withArgs(
        tokenRelease.address,
        seedWallet.address,
        ethers.utils.parseEther("100000")
      )
      .to.emit(mht, "Transfer")
      .withArgs(
        tokenRelease.address,
        privateSaleWallet.address,
        ethers.utils.parseEther("200000")
      )
      .to.emit(mht, "Transfer")
      .withArgs(
        tokenRelease.address,
        whitelistWallet.address,
        ethers.utils.parseEther("600000")
      )
      .to.emit(mht, "Transfer")
      .withArgs(
        tokenRelease.address,
        dexLiquidityWallet.address,
        ethers.utils.parseEther("2250000")
      );
  });

  it("claim 2x", async function () {
    const now = new Date("2022-01-01T00:00:00.000Z").getTime() / 1000;
    await network.provider.send("evm_mine", [now]);

    await mht
      .connect(mhtOwner)
      .transfer(tokenRelease.address, ethers.utils.parseEther("100000000"));

    const claim = tokenRelease.claim();

    await expect(claim).to.emit(tokenRelease, "Claimed").withArgs("202112");
    await expect(claim).to.emit(tokenRelease, "Claimed").withArgs("202201");
  });

  it("claim everything after IDO + 48 months", async function () {
    const now = new Date("2025-12-01T00:00:00.000Z").getTime() / 1000;
    await network.provider.send("evm_mine", [now]);

    await mht
      .connect(mhtOwner)
      .transfer(tokenRelease.address, ethers.utils.parseEther("100000000"));

    const claim = tokenRelease.claim();

    for (let i = 0; i <= 48; i++) {
      const date = new Date("2021-12-01T00:00:00.000Z");
      date.setUTCMonth(date.getUTCMonth() + i);
      const yyyymm = date.getUTCFullYear() * 100 + (date.getUTCMonth() + 1);

      await expect(claim).to.emit(tokenRelease, "Claimed").withArgs(yyyymm);
    }

    expect(await mht.balanceOf(tokenRelease.address)).to.equal(0);

    const w = (x: number) => ethers.utils.parseEther(x.toString());

    expect(await mht.balanceOf(strategicPartnershipWallet.address)).to.equal(
      w(5000000)
    );
    expect(await mht.balanceOf(seedWallet.address)).to.equal(w(2000000));
    expect(await mht.balanceOf(privateSaleWallet.address)).to.equal(w(2500000));
    expect(await mht.balanceOf(whitelistWallet.address)).to.equal(w(3000000));
    expect(await mht.balanceOf(dexLiquidityWallet.address)).to.equal(
      w(2250000)
    );
    expect(await mht.balanceOf(teamAndAdvisorsWallet.address)).to.equal(
      w(16250000)
    );
    expect(await mht.balanceOf(playToEarnWallet.address)).to.equal(w(37000000));
    expect(await mht.balanceOf(communityAndMarketingWallet.address)).to.equal(
      w(15000000)
    );
    expect(await mht.balanceOf(reservesWallet.address)).to.equal(w(5000000));
    expect(await mht.balanceOf(stakingWallet.address)).to.equal(w(12000000));
  });
});
