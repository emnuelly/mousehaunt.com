const seedSale = [
  {
    address: "",
    whitelisted: "0x343BD4e802BaE35F89e043299B82067aab38dfd3",
    amount: "20000",
  },
  {
    address: "",
    whitelisted: "",
    amount: "",
  },
].map((term) => ({
  ...term,
  owner: "",
  MHTtoBUSD: "0.125",
  unlockAtIGOPercent: "4",
  cliffMonths: "0",
  vestingPeriodMonths: "12",
}));

const privateSale = [
  {
    address: "",
    whitelisted: "",
    amount: "",
  },
].map((term) => ({
  ...term,
  owner: "",
  MHTtoBUSD: "0.15",
  unlockAtIGOPercent: "8",
  cliffMonths: "0",
  vestingPeriodMonths: "12",
}));

const presales = [...seedSale, ...privateSale];
export default presales;
