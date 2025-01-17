/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MarketplaceStorage,
  MarketplaceStorageInterface,
} from "../MarketplaceStorage";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "ownerCutPerMillion",
        type: "uint256",
      },
    ],
    name: "ChangedOwnerCutPerMillion",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "publicationFee",
        type: "uint256",
      },
    ],
    name: "ChangedPublicationFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
    ],
    name: "OrderCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "priceInWei",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiresAt",
        type: "uint256",
      },
    ],
    name: "OrderCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalPrice",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "OrderExecuted",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptedToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "nfts",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "enum MarketplaceStorage.AssetType",
        name: "tokenType",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "orders",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "enum MarketplaceStorage.AssetType",
        name: "tokenType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiresAt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerCutPerMillion",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "publicationFeeInWei",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506104f1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063265aa6211461005c578063451c3d801461008d578063a01f79d4146100ab578063a85c38ef146100c9578063ae4f119814610100575b600080fd5b6100766004803603810190610071919061028b565b61011e565b604051610084929190610370565b60405180910390f35b61009561017b565b6040516100a291906103f8565b60405180910390f35b6100b361019f565b6040516100c09190610422565b60405180910390f35b6100e360048036038101906100de919061028b565b6101a5565b6040516100f798979695949392919061043d565b60405180910390f35b61010861024a565b6040516101159190610422565b60405180910390f35b6003818154811061012e57600080fd5b906000526020600020016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16905082565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b600181815481106101b557600080fd5b90600052602060002090600702016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900460ff16908060030154908060040154908060050154908060060154905088565b60055481565b600080fd5b6000819050919050565b61026881610255565b811461027357600080fd5b50565b6000813590506102858161025f565b92915050565b6000602082840312156102a1576102a0610250565b5b60006102af84828501610276565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102e3826102b8565b9050919050565b6102f3816102d8565b82525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110610339576103386102f9565b5b50565b600081905061034a82610328565b919050565b600061035a8261033c565b9050919050565b61036a8161034f565b82525050565b600060408201905061038560008301856102ea565b6103926020830184610361565b9392505050565b6000819050919050565b60006103be6103b96103b4846102b8565b610399565b6102b8565b9050919050565b60006103d0826103a3565b9050919050565b60006103e2826103c5565b9050919050565b6103f2816103d7565b82525050565b600060208201905061040d60008301846103e9565b92915050565b61041c81610255565b82525050565b60006020820190506104376000830184610413565b92915050565b600061010082019050610453600083018b610413565b610460602083018a6102ea565b61046d60408301896102ea565b61047a6060830188610361565b6104876080830187610413565b61049460a0830186610413565b6104a160c0830185610413565b6104ae60e0830184610413565b999850505050505050505056fea264697066735822122051bd8c24ed542bd294ba52d05ac6e33cd220b5684ad59a5b83d2699b4888008a64736f6c63430008090033";

export class MarketplaceStorage__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MarketplaceStorage> {
    return super.deploy(overrides || {}) as Promise<MarketplaceStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MarketplaceStorage {
    return super.attach(address) as MarketplaceStorage;
  }
  connect(signer: Signer): MarketplaceStorage__factory {
    return super.connect(signer) as MarketplaceStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketplaceStorageInterface {
    return new utils.Interface(_abi) as MarketplaceStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketplaceStorage {
    return new Contract(address, _abi, signerOrProvider) as MarketplaceStorage;
  }
}
