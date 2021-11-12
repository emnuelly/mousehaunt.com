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
      image: "https://mousehaunt.com/images/logo.png",
      symbol: "MHT",
    },
    BUSD: {
      address: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
    },
    WhitelistSale: {
      SeedSale: {
        owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
        MHTtoBUSD: "0.00125",
        minMhtAmount: "80000",
        maxMhtAmount: "16000000",
        unlockAtIGOPercent: "4",
        cliffMonths: "0",
        vestingPeriodMonths: "12",
        address: "",
        available: "2000000",
      },
      PrivateSale: {
        owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
        MHTtoBUSD: "0.0015",
        minMhtAmount: "50",
        maxMhtAmount: "400",
        unlockAtIGOPercent: "8",
        cliffMonths: "0",
        vestingPeriodMonths: "12",
        address: "",
        available: "4000000",
      },
    },
    BMHTL: {
      address: "0xf2F504fdAd751a0eB81A2cf88Fe90E5E57a199db",
      owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
      image: "https://mousehaunt.com/images/legendary.png",
      symbol: "BMHTL",
      busdPrice: "0.025",
      cap: "2",
      available: "2000",
    },
    BMHTE: {
      address: "0x2C76EE45C38F7d4c482302feea88ff7E33010355",
      owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
      image: "https://mousehaunt.com/images/epic.png",
      symbol: "BMHTE",
      busdPrice: "0.075",
      cap: "6",
      available: "6000",
    },
    BoosterSale: {
      address: "0x8213baC9695ceF5F16Ad01dCd49b854297E426dB",
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
      SeedSale: {
        owner: "0xb53A11c980f6E3b4725977A69672A373954B0157",
        MHTtoBUSD: "0.125",
        minMhtAmount: "80000",
        maxMhtAmount: "16000000",
        unlockAtIGOPercent: "4",
        cliffMonths: "0",
        vestingPeriodMonths: "12",
        address: "",
        available: "2000000",
      },
      PrivateSale: {
        owner: "0x5FEe4568C79542682C2819a87f8868AbaFA97793",
        MHTtoBUSD: "0.15",
        minMhtAmount: "500",
        maxMhtAmount: "4000",
        unlockAtIGOPercent: "8",
        cliffMonths: "0",
        vestingPeriodMonths: "12",
        address: "0x4A3833566032BfB394D13B0b356fF0E8e3Bc206F",
        available: "4000000",
      },
    },
    BMHTL: {
      address: "0x29421DF4FEAA2ff2eA08b7A8F221425C8aFD424C",
      owner: "0x2124b4912532f6cD235081fEA2223EB3C0Af301d",
      image: "https://mousehaunt.com/images/legendary.png",
      symbol: "BMHTL",
      busdPrice: "250",
      cap: "2",
      available: "2000",
    },
    BMHTE: {
      address: "0x2DE83F4243ff0200624a44011777a373aF7E9f72",
      owner: "0x2124b4912532f6cD235081fEA2223EB3C0Af301d",
      image: "https://mousehaunt.com/images/epic.png",
      symbol: "BMHTE",
      busdPrice: "75",
      cap: "6",
      available: "6000",
    },
    BoosterSale: {
      address: "0xf047A663fA1A6Ffb402c49800F9072D5475408A0",
      owner: "0x2124b4912532f6cD235081fEA2223EB3C0Af301d",
    },
  },
};

export default config;

export type Network = "bsc" | "bscTestnet";
