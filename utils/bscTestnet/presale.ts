const seedSale = [
  {
    address: "0x5FA41E248EfF800FD69e7D048888686BDc7bC6aF",
    whitelisted: "0x343BD4e802BaE35F89e043299B82067aab38dfd3",
    amount: "200",
  },
  {
    address: "0xFA01D9FdD0169E07e7d4855f2467fc4a1124078C",
    whitelisted: "0xDe15C3D6845D6Cc7A8a8f80aFD6514b0494dA91A",
    amount: "160",
  },
].map((term) => ({
  ...term,
  owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
  MHTtoBUSD: "0.00125",
  unlockAtIGOPercent: "4",
  cliffMonths: "0",
  vestingPeriodMonths: "12",
}));

const privateSale = [
  {
    address: "0x9eBfb7b87543aAE30c586a8c1508eD1388BdFD7d",
    whitelisted: "0x343BD4e802BaE35F89e043299B82067aab38dfd3",
    amount: "150",
  },
].map((term) => ({
  ...term,
  owner: "0x087B58029f7251E7054153Bc8775e14A68490286",
  MHTtoBUSD: "0.0015",
  unlockAtIGOPercent: "8",
  cliffMonths: "0",
  vestingPeriodMonths: "12",
}));

const presales = [...seedSale, ...privateSale];
export default presales;
