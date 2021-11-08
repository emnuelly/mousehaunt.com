const config = {
  external: {
    viewer: {
      url: "https://nft.viewer.r2u.io/?nft=",
    },
  },
  bscTestnet: {
    MouseHauntToken: {
      address: "0x034d0272AEbCE737B35C61b3Ab709020cEDca808",
      owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
    },
    BUSD: {
      address: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
    },
    WhitelistSale: {
      PrivateSale: {
        owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
        MHTtoBUSD: "0.015",
        minMhtAmount: "50",
        maxMhtAmount: "400",
        unlockAtIGOPercent: "8",
        cliffMonths: "0",
        vestingPeriodMonths: "12",
        address: "0x0FC2dCbD2243877697195af4aF8C762aa0354Bf4",
        available: "4000000",
      },
    },
    BMHTL: {
      address: "0xE2AF9395d3cC2A49cC6D1231704Eb21c0799c22A",
      owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
      image:
        "https://nft.mousehaunt.com/booster/0000000000000000000000000000000000000000000000000000000000000001/0000000000000000000000000000000000000000000000000000000000000001.png",
      symbol: "BMHTL",
      busdPrice: "2.5",
      cap: "2",
      available: "2000",
    },
    BMHTE: {
      address: "0x7e27F6aD10f883c9aC15049920433f230A86343f",
      owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
      image:
        "https://nft.mousehaunt.com/booster/0000000000000000000000000000000000000000000000000000000000000002/0000000000000000000000000000000000000000000000000000000000000002.png",
      symbol: "BMHTE",
      busdPrice: "0.75",
      cap: "6",
      available: "6000",
    },
    BoosterSale: {
      address: "0xeEADCd83bDD1a0c36C39C46E296D07b7B31De6A2",
      owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
    },
  },
  bsc: {
    s3: {
      bucket: "nft.mousehaunt.com",
    },
    MouseHauntToken: {
      address: "0x5Cb2C3Ed882E37DA610f9eF5b0FA25514d7bc85B",
      owner: "0x8e3f936932AbDa7a4C31EFE83068A00aeB69122B",
      image: "https://mousehaunt.com/images/logo.png",
      symbol: "MHT",
    },
    BUSD: {
      address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    },
    WhitelistSale: {
      PrivateSale: {
        owner: "0x5FEe4568C79542682C2819a87f8868AbaFA97793",
        MHTtoBUSD: "0.15",
        minMhtAmount: "500",
        maxMhtAmount: "4000",
        unlockAtIGOPercent: "8",
        cliffMonths: "0",
        vestingPeriodMonths: "12",
        address: "",
        available: "4000000",
      },
    },
    BMHTL: {
      address: "0x29421DF4FEAA2ff2eA08b7A8F221425C8aFD424C",
      owner: "0x2124b4912532f6cD235081fEA2223EB3C0Af301d",
      image:
        "https://nft.mousehaunt.com/booster/0000000000000000000000000000000000000000000000000000000000000001/0000000000000000000000000000000000000000000000000000000000000001.png",
      symbol: "BMHTL",
      busdPrice: "250",
      cap: "2",
      available: "2000",
    },
    BMHTE: {
      address: "0x2DE83F4243ff0200624a44011777a373aF7E9f72",
      owner: "0x2124b4912532f6cD235081fEA2223EB3C0Af301d",
      image:
        "https://nft.mousehaunt.com/booster/0000000000000000000000000000000000000000000000000000000000000002/0000000000000000000000000000000000000000000000000000000000000002.png",
      symbol: "BMHTE",
      busdPrice: "75",
      cap: "6",
      available: "6000",
    },
    BoosterSale: {
      address: "",
      owner: "0x2124b4912532f6cD235081fEA2223EB3C0Af301d",
    },
  },
};

export default config;

export type Network = "bsc" | "bscTestnet";
