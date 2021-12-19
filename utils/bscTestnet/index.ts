// eslint-disable-next-line node/no-missing-import
import PreSales from "./presale";

const bscTestnet = {
  MouseHauntToken: {
    address: "0x034d0272AEbCE737B35C61b3Ab709020cEDca808",
    owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
    image: "https://mousehaunt.com/images/logo.png",
    symbol: "MHT",
    decimals: 18,
  },
  BUSD: {
    address: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
  },
  WhitelistSale: {
    igoTimestamp: "1634572800",
    PreSales,
    PrivateSale1: {
      address: "0x693348553511106405a0544f98765b0332daF507",
      owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
      MHTtoBUSD: "0.0015",
      minMhtAmount: "50",
      maxMhtAmount: "400",
      unlockAtIGOPercent: "8",
      cliffMonths: "0",
      vestingPeriodMonths: "12",
      available: "4000000",
    },
    PrivateSale2: {
      address: "0x644e548960437F2d2c1C1C0dE9e9c7f559f67c27",
      owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
      MHTtoBUSD: "0.00175",
      minMhtAmount: "57",
      maxMhtAmount: "114",
      unlockAtIGOPercent: "8",
      cliffMonths: "0",
      vestingPeriodMonths: "12",
      available: "571500",
    },
    PrivateSale3: {
      address: "0x28236cFB512398b676cc2149b169B5f2f0D5bC91",
      owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
      MHTtoBUSD: "0.0019",
      minMhtAmount: "115",
      maxMhtAmount: "115",
      unlockAtIGOPercent: "8",
      cliffMonths: "0",
      vestingPeriodMonths: "12",
      available: "575000",
    },
  },
  BMHTL: {
    address: "0xf2F504fdAd751a0eB81A2cf88Fe90E5E57a199db",
    owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
    image: "https://mousehaunt.com/images/legendary.png",
    symbol: "BMHTL",
    decimals: 18,
  },
  BMHTE: {
    address: "0x2C76EE45C38F7d4c482302feea88ff7E33010355",
    owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
    image: "https://mousehaunt.com/images/epic.png",
    symbol: "BMHTE",
    decimals: 18,
  },
  BMHTR: {
    address: "0x6d4d1A9f277b4a9D94d9EDF490d54Be08A8aCB76",
    owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
    image: "https://mousehaunt.com/images/rare.png",
    symbol: "BMHTR",
    decimals: 0,
  },
  BoosterSale: {
    PrivateSale1: {
      address: "0x6Bb9c33F26Ba1CFbdaA1192484682469776019D8",
      owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
      BMHTL: {
        busdPrice: "0.025",
        cap: "2",
        available: "2000",
      },
      BMHTE: {
        busdPrice: "0.075",
        cap: "6",
        available: "6000",
      },
    },
    PrivateSale2: {
      address: "0xDF27461F27cea9FB6085f8A6574474dBB61a5603",
      owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
      BMHTL: {
        busdPrice: "0.005",
        cap: "1",
        available: "500",
      },
      BMHTE: {
        busdPrice: "0.0015",
        cap: "1",
        available: "5000",
      },
    },
    PrivateSale3: {
      address: "0x279Ee6C9EBa5C5DD23eaA482860969CcFa27EB68",
      owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
      BMHTE: {
        busdPrice: "0.0150",
        cap: "1",
        available: "3333",
      },
      BMHTR: {
        busdPrice: "0.0045",
        cap: "2",
        available: "10000",
      },
    },
  },
  MouseHero: {
    address: "",
    owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
  },
  LegendaryEpicBoosterUnpack: {
    address: "",
    owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
  },
};

export default bscTestnet;
