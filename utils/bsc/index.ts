// eslint-disable-next-line node/no-missing-import
import PreSales from "./presale";

const bsc = {
  s3: {
    bucket: "nft.mousehaunt.com",
  },
  MouseHauntToken: {
    address: "0x5Cb2C3Ed882E37DA610f9eF5b0FA25514d7bc85B",
    owner: "0x8e3f936932AbDa7a4C31EFE83068A00aeB69122B",
    image: "https://mousehaunt.com/images/logo.png",
    symbol: "MHT",
    decimals: 18,
  },
  BUSD: {
    address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
  },
  WhitelistSale: {
    PreSales,
    PrivateSale1: {
      address: "0x4A3833566032BfB394D13B0b356fF0E8e3Bc206F",
      owner: "0x5FEe4568C79542682C2819a87f8868AbaFA97793",
      MHTtoBUSD: "0.15",
      minMhtAmount: "500",
      maxMhtAmount: "4000",
      unlockAtIGOPercent: "8",
      cliffMonths: "0",
      vestingPeriodMonths: "12",
      available: "4000000",
    },
    PrivateSale2: {
      address: "0x7a5390CFda7C68A3503613577702925191e26384",
      owner: "0x5FEe4568C79542682C2819a87f8868AbaFA97793",
      MHTtoBUSD: "0.175",
      minMhtAmount: "57",
      maxMhtAmount: "114",
      unlockAtIGOPercent: "8",
      cliffMonths: "0",
      vestingPeriodMonths: "12",
      available: "571500",
    },
    PrivateSale3: {
      address: "0x0Aa2B2F7Ba37a628037c8f815d792eCccA5F717B",
      owner: "0x5FEe4568C79542682C2819a87f8868AbaFA97793",
      MHTtoBUSD: "0.19",
      minMhtAmount: "115",
      maxMhtAmount: "115",
      unlockAtIGOPercent: "8",
      cliffMonths: "0",
      vestingPeriodMonths: "12",
      available: "575000",
    },
  },
  BMHTL: {
    address: "0x29421DF4FEAA2ff2eA08b7A8F221425C8aFD424C",
    owner: "0x2124b4912532f6cD235081fEA2223EB3C0Af301d",
    image: "https://mousehaunt.com/images/legendary.png",
    symbol: "BMHTL",
    decimals: 18,
  },
  BMHTE: {
    address: "0x2DE83F4243ff0200624a44011777a373aF7E9f72",
    owner: "0x2124b4912532f6cD235081fEA2223EB3C0Af301d",
    image: "https://mousehaunt.com/images/epic.png",
    symbol: "BMHTE",
    decimals: 18,
  },
  BMHTR: {
    address: "0x9b0D5A9e64aD9461f4D5B6E893FBf8655d21CBE4",
    owner: "0x2124b4912532f6cD235081fEA2223EB3C0Af301d",
    image: "https://mousehaunt.com/images/rare.png",
    symbol: "BMHTR",
    decimals: 0,
  },
  BoosterSale: {
    PrivateSale1: {
      address: "0xa7Ee9AE77671934FE936706b2193E33Bc3F6461C",
      owner: "0x2124b4912532f6cD235081fEA2223EB3C0Af301d",
      BMHTL: {
        busdPrice: "250",
        cap: "2",
        available: "2000",
      },
      BMHTE: {
        busdPrice: "75",
        cap: "6",
        available: "6000",
      },
    },
    PrivateSale2: {
      address: "0xd10fe236c990e423b35383c2a574992FE11B89c6",
      owner: "0x2124b4912532f6cD235081fEA2223EB3C0Af301d",
      BMHTL: {
        busdPrice: "350",
        cap: "1",
        available: "500",
      },
      BMHTE: {
        busdPrice: "105",
        cap: "1",
        available: "5000",
      },
    },
    PrivateSale3: {
      address: "0x674d68fDe432A0ED962080cE44865A6E8241311C",
      owner: "0x2124b4912532f6cD235081fEA2223EB3C0Af301d",
      BMHTE: {
        busdPrice: "150",
        cap: "1",
        available: "3333",
      },
      BMHTR: {
        busdPrice: "45",
        cap: "2",
        available: "20000",
      },
    },
  },
  MouseHero: {
    address: "",
    owner: "0x2124b4912532f6cD235081fEA2223EB3C0Af301d",
  },
  LegendaryEpicBoosterUnpack: {
    address: "",
    owner: "0x2124b4912532f6cD235081fEA2223EB3C0Af301d",
  },
};

export default bsc;
