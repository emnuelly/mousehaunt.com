// eslint-disable-next-line node/no-missing-import
import bsc from "./bsc";
// eslint-disable-next-line node/no-missing-import
import bscTestnet from "./bscTestnet";

const config = {
  bscTestnet,
  bsc,
};

export default config;

export type Network = "bsc" | "bscTestnet";
