/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Unpackable, UnpackableInterface } from "../Unpackable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IBooster",
        name: "booster",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "enum Rarity",
        name: "rarity",
        type: "uint8",
      },
    ],
    name: "Unpack",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "unpack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class Unpackable__factory {
  static readonly abi = _abi;
  static createInterface(): UnpackableInterface {
    return new utils.Interface(_abi) as UnpackableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Unpackable {
    return new Contract(address, _abi, signerOrProvider) as Unpackable;
  }
}