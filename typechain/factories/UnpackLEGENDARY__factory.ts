/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UnpackLEGENDARY,
  UnpackLEGENDARYInterface,
} from "../UnpackLEGENDARY";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "contract IMouseHero",
        name: "_nft",
        type: "address",
      },
      {
        internalType: "contract IBooster",
        name: "_legendaryBooster",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DECIMALS",
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
    name: "legendaryBooster",
    outputs: [
      {
        internalType: "contract IBooster",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nft",
    outputs: [
      {
        internalType: "contract IMouseHero",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200171b3803806200171b833981810160405281019062000037919062000400565b60008060006101000a81548160ff02191690831515021790555062000071620000656200010060201b60201c565b6200010860201b60201c565b6200008283620001cd60201b60201c565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505050505062000577565b600033905090565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620001dd6200010060201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1662000203620002e360201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16146200025c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200025390620004bd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620002cf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002c69062000555565b60405180910390fd5b620002e0816200010860201b60201c565b50565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200033e8262000311565b9050919050565b620003508162000331565b81146200035c57600080fd5b50565b600081519050620003708162000345565b92915050565b6000620003838262000331565b9050919050565b620003958162000376565b8114620003a157600080fd5b50565b600081519050620003b5816200038a565b92915050565b6000620003c88262000331565b9050919050565b620003da81620003bb565b8114620003e657600080fd5b50565b600081519050620003fa81620003cf565b92915050565b6000806000606084860312156200041c576200041b6200030c565b5b60006200042c868287016200035f565b93505060206200043f86828701620003a4565b92505060406200045286828701620003e9565b9150509250925092565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000620004a56020836200045c565b9150620004b2826200046d565b602082019050919050565b60006020820190508181036000830152620004d88162000496565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006200053d6026836200045c565b91506200054a82620004df565b604082019050919050565b6000602082019050818103600083015262000570816200052e565b9050919050565b608051611173620005a8600039600081816103be015281816104fe015281816105d9015261080501526111736000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638456cb59116100665780638456cb59146101115780638a02be681461011b5780638da5cb5b14610137578063f2fde38b14610155578063f3213185146101715761009e565b80632e0f2625146100a35780633f4ba83a146100c157806347ccca02146100cb5780635c975abb146100e9578063715018a614610107575b600080fd5b6100ab61018f565b6040516100b89190610a50565b60405180910390f35b6100c961019b565b005b6100d3610221565b6040516100e09190610aea565b60405180910390f35b6100f1610247565b6040516100fe9190610b20565b60405180910390f35b61010f61025d565b005b6101196102e5565b005b61013560048036038101906101309190610b6c565b61036b565b005b61013f6106e2565b60405161014c9190610bba565b60405180910390f35b61016f600480360381019061016a9190610c01565b61070b565b005b610179610803565b6040516101869190610c4f565b60405180910390f35b670de0b6b3a764000081565b6101a3610827565b73ffffffffffffffffffffffffffffffffffffffff166101c16106e2565b73ffffffffffffffffffffffffffffffffffffffff1614610217576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020e90610cc7565b60405180910390fd5b61021f61082f565b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900460ff16905090565b610265610827565b73ffffffffffffffffffffffffffffffffffffffff166102836106e2565b73ffffffffffffffffffffffffffffffffffffffff16146102d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d090610cc7565b60405180910390fd5b6102e360006108d0565b565b6102ed610827565b73ffffffffffffffffffffffffffffffffffffffff1661030b6106e2565b73ffffffffffffffffffffffffffffffffffffffff1614610361576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035890610cc7565b60405180910390fd5b610369610995565b565b610373610247565b156103b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103aa90610d33565b60405180910390fd5b670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016104159190610bba565b60206040518083038186803b15801561042d57600080fd5b505afa158015610441573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104659190610d68565b10156104a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049d90610de1565b60405180910390fd5b6000670de0b6b3a7640000826104bc9190610e30565b146104fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f390610ead565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166379cc679033836040518363ffffffff1660e01b8152600401610557929190610ecd565b600060405180830381600087803b15801561057157600080fd5b505af1158015610585573d6000803e3d6000fd5b505050506000670de0b6b3a76400008261059f9190610f25565b905060005b818110156106dd57600060038111156105c0576105bf610f56565b5b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff167fa5d52a70cdfb7f1fa79f200371db8b49f2c01575c1136137b62637f6c685262b60405160405180910390a4600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663761c4c403360006040518363ffffffff1660e01b8152600401610698929190610fcd565b600060405180830381600087803b1580156106b257600080fd5b505af11580156106c6573d6000803e3d6000fd5b5050505080806106d590610ff6565b9150506105a4565b505050565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610713610827565b73ffffffffffffffffffffffffffffffffffffffff166107316106e2565b73ffffffffffffffffffffffffffffffffffffffff1614610787576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077e90610cc7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ee906110b1565b60405180910390fd5b610800816108d0565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b600033905090565b610837610247565b610876576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086d9061111d565b60405180910390fd5b60008060006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6108b9610827565b6040516108c69190610bba565b60405180910390a1565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61099d610247565b156109dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d490610d33565b60405180910390fd5b60016000806101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610a20610827565b604051610a2d9190610bba565b60405180910390a1565b6000819050919050565b610a4a81610a37565b82525050565b6000602082019050610a656000830184610a41565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610ab0610aab610aa684610a6b565b610a8b565b610a6b565b9050919050565b6000610ac282610a95565b9050919050565b6000610ad482610ab7565b9050919050565b610ae481610ac9565b82525050565b6000602082019050610aff6000830184610adb565b92915050565b60008115159050919050565b610b1a81610b05565b82525050565b6000602082019050610b356000830184610b11565b92915050565b600080fd5b610b4981610a37565b8114610b5457600080fd5b50565b600081359050610b6681610b40565b92915050565b600060208284031215610b8257610b81610b3b565b5b6000610b9084828501610b57565b91505092915050565b6000610ba482610a6b565b9050919050565b610bb481610b99565b82525050565b6000602082019050610bcf6000830184610bab565b92915050565b610bde81610b99565b8114610be957600080fd5b50565b600081359050610bfb81610bd5565b92915050565b600060208284031215610c1757610c16610b3b565b5b6000610c2584828501610bec565b91505092915050565b6000610c3982610ab7565b9050919050565b610c4981610c2e565b82525050565b6000602082019050610c646000830184610c40565b92915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610cb1602083610c6a565b9150610cbc82610c7b565b602082019050919050565b60006020820190508181036000830152610ce081610ca4565b9050919050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b6000610d1d601083610c6a565b9150610d2882610ce7565b602082019050919050565b60006020820190508181036000830152610d4c81610d10565b9050919050565b600081519050610d6281610b40565b92915050565b600060208284031215610d7e57610d7d610b3b565b5b6000610d8c84828501610d53565b91505092915050565b7f4e6f7420656e6f75676820626f6f737465727300000000000000000000000000600082015250565b6000610dcb601383610c6a565b9150610dd682610d95565b602082019050919050565b60006020820190508181036000830152610dfa81610dbe565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610e3b82610a37565b9150610e4683610a37565b925082610e5657610e55610e01565b5b828206905092915050565b7f496e76616c696420616d6f756e74000000000000000000000000000000000000600082015250565b6000610e97600e83610c6a565b9150610ea282610e61565b602082019050919050565b60006020820190508181036000830152610ec681610e8a565b9050919050565b6000604082019050610ee26000830185610bab565b610eef6020830184610a41565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f3082610a37565b9150610f3b83610a37565b925082610f4b57610f4a610e01565b5b828204905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60048110610f9657610f95610f56565b5b50565b6000819050610fa782610f85565b919050565b6000610fb782610f99565b9050919050565b610fc781610fac565b82525050565b6000604082019050610fe26000830185610bab565b610fef6020830184610fbe565b9392505050565b600061100182610a37565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561103457611033610ef6565b5b600182019050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061109b602683610c6a565b91506110a68261103f565b604082019050919050565b600060208201905081810360008301526110ca8161108e565b9050919050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b6000611107601483610c6a565b9150611112826110d1565b602082019050919050565b60006020820190508181036000830152611136816110fa565b905091905056fea26469706673582212206c36bb31e22a407aa26256225a7ef4d49c882367bc3fe7c15ae6573cd6f0eaa464736f6c63430008090033";

export class UnpackLEGENDARY__factory extends ContractFactory {
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
    owner: string,
    _nft: string,
    _legendaryBooster: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UnpackLEGENDARY> {
    return super.deploy(
      owner,
      _nft,
      _legendaryBooster,
      overrides || {}
    ) as Promise<UnpackLEGENDARY>;
  }
  getDeployTransaction(
    owner: string,
    _nft: string,
    _legendaryBooster: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      owner,
      _nft,
      _legendaryBooster,
      overrides || {}
    );
  }
  attach(address: string): UnpackLEGENDARY {
    return super.attach(address) as UnpackLEGENDARY;
  }
  connect(signer: Signer): UnpackLEGENDARY__factory {
    return super.connect(signer) as UnpackLEGENDARY__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnpackLEGENDARYInterface {
    return new utils.Interface(_abi) as UnpackLEGENDARYInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UnpackLEGENDARY {
    return new Contract(address, _abi, signerOrProvider) as UnpackLEGENDARY;
  }
}