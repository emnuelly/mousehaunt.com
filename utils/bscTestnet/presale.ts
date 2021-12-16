const seedSale = [
  {
    address: "",
    whitelisted: "0x343BD4e802BaE35F89e043299B82067aab38dfd3",
    amount: "20000",
  },
  {
    address: "",
    whitelisted: "0xDe15C3D6845D6Cc7A8a8f80aFD6514b0494dA91A",
    amount: "16000",
  },
].map((term) => ({
  ...term,
  owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
  MHTtoBUSD: "0.125",
  unlockAtIGOPercent: "4",
  cliffMonths: "0",
  vestingPeriodMonths: "12",
}));

const privateSale = [
  {
    address: "",
    whitelisted: "0x343BD4e802BaE35F89e043299B82067aab38dfd3",
    amount: "15000",
  },
].map((term) => ({
  ...term,
  owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
  MHTtoBUSD: "0.15",
  unlockAtIGOPercent: "8",
  cliffMonths: "0",
  vestingPeriodMonths: "12",
}));

const presales = [...seedSale, ...privateSale];
export default presales;
