const config = {
  external: {
    viewer: {
      url: "https://nft.viewer.r2u.io/?nft=",
    },
  },
  testnet: {
    MouseHauntToken: {
      address: "0x514219CEb7097eeA9556603141D2809f49EF428C",
      owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
    },
    WhitelistSale: {
      MHTtoBUSD: 0.1,
      address: "0x2D13b76318E04Cc8cfB815f6061D6485353fE92f",
    },
    BUSD: {
      address: "0x8301f2213c0eed49a7e28ae4c3e91722919b8b47",
    },
  },
  mainnet: {
    s3: {
      bucket: "nft.mousehaunt.com",
    },
    MouseHauntToken: {
      address: "0x5Cb2C3Ed882E37DA610f9eF5b0FA25514d7bc85B",
      owner: "0x8e3f936932AbDa7a4C31EFE83068A00aeB69122B",
    },
    BUSD: {
      address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    },
    WhitelistSale: {
      MHTtoBUSD: 0.1,
      address: "",
    },
    BMHTL: {
      address: "0x29421DF4FEAA2ff2eA08b7A8F221425C8aFD424C",
      owner: "0x2124b4912532f6cD235081fEA2223EB3C0Af301d",
    },
    BMHTE: {
      address: "0x2DE83F4243ff0200624a44011777a373aF7E9f72",
      owner: "0x2124b4912532f6cD235081fEA2223EB3C0Af301d",
    },
  },
};

export default config;
