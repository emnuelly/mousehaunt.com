/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MouseHauntToken,
  MouseHauntTokenInterface,
} from "../MouseHauntToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280601181526020017f4d6f757365204861756e7420546f6b656e0000000000000000000000000000008152506040518060400160405280600381526020017f4d4854000000000000000000000000000000000000000000000000000000000081525081600390805190602001906200009692919062000414565b508060049080519060200190620000af92919062000414565b5050506000600560006101000a81548160ff021916908315150217905550620000ed620000e16200013360201b60201c565b6200013b60201b60201c565b6200012d33620001026200020160201b60201c565b600a6200011091906200064d565b6305f5e1006200012191906200078a565b6200020a60201b60201c565b620008f5565b600033905090565b6000600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200027d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002749062000545565b60405180910390fd5b62000291600083836200038360201b60201c565b8060026000828254620002a5919062000595565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002fc919062000595565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000363919062000567565b60405180910390a36200037f60008383620003f360201b60201c565b5050565b62000393620003f860201b60201c565b15620003d6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003cd9062000523565b60405180910390fd5b620003ee8383836200040f60201b62000bc91760201c565b505050565b505050565b6000600560009054906101000a900460ff16905090565b505050565b828054620004229062000802565b90600052602060002090601f01602090048101928262000446576000855562000492565b82601f106200046157805160ff191683800117855562000492565b8280016001018555821562000492579182015b828111156200049157825182559160200191906001019062000474565b5b509050620004a19190620004a5565b5090565b5b80821115620004c0576000816000905550600101620004a6565b5090565b6000620004d360108362000584565b9150620004e082620008a3565b602082019050919050565b6000620004fa601f8362000584565b91506200050782620008cc565b602082019050919050565b6200051d81620007eb565b82525050565b600060208201905081810360008301526200053e81620004c4565b9050919050565b600060208201905081810360008301526200056081620004eb565b9050919050565b60006020820190506200057e600083018462000512565b92915050565b600082825260208201905092915050565b6000620005a282620007eb565b9150620005af83620007eb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620005e757620005e662000838565b5b828201905092915050565b6000808291508390505b600185111562000644578086048111156200061c576200061b62000838565b5b60018516156200062c5780820291505b80810290506200063c8562000896565b9450620005fc565b94509492505050565b60006200065a82620007eb565b91506200066783620007f5565b9250620006967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846200069e565b905092915050565b600082620006b0576001905062000783565b81620006c0576000905062000783565b8160018114620006d95760028114620006e4576200071a565b600191505062000783565b60ff841115620006f957620006f862000838565b5b8360020a91508482111562000713576200071262000838565b5b5062000783565b5060208310610133831016604e8410600b8410161715620007545782820a9050838111156200074e576200074d62000838565b5b62000783565b620007638484846001620005f2565b925090508184048111156200077d576200077c62000838565b5b81810290505b9392505050565b60006200079782620007eb565b9150620007a483620007eb565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620007e057620007df62000838565b5b828202905092915050565b6000819050919050565b600060ff82169050919050565b600060028204905060018216806200081b57607f821691505b6020821081141562000832576200083162000867565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60008160011c9050919050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61206480620009056000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad57806395d89b411161007157806395d89b41146102d2578063a457c2d7146102f0578063a9059cbb14610320578063dd62ed3e14610350578063f2fde38b1461038057610121565b806370a0823114610254578063715018a61461028457806379cc67901461028e5780638456cb59146102aa5780638da5cb5b146102b457610121565b8063313ce567116100f4578063313ce567146101c257806339509351146101e05780633f4ba83a1461021057806342966c681461021a5780635c975abb1461023657610121565b806306fdde0314610126578063095ea7b31461014457806318160ddd1461017457806323b872dd14610192575b600080fd5b61012e61039c565b60405161013b9190611839565b60405180910390f35b61015e6004803603810190610159919061153f565b61042e565b60405161016b919061181e565b60405180910390f35b61017c61044c565b6040516101899190611a1b565b60405180910390f35b6101ac60048036038101906101a791906114f0565b610456565b6040516101b9919061181e565b60405180910390f35b6101ca61054e565b6040516101d79190611a36565b60405180910390f35b6101fa60048036038101906101f5919061153f565b610557565b604051610207919061181e565b60405180910390f35b610218610603565b005b610234600480360381019061022f919061157b565b610689565b005b61023e61069d565b60405161024b919061181e565b60405180910390f35b61026e6004803603810190610269919061148b565b6106b4565b60405161027b9190611a1b565b60405180910390f35b61028c6106fc565b005b6102a860048036038101906102a3919061153f565b610784565b005b6102b26107ff565b005b6102bc610885565b6040516102c99190611803565b60405180910390f35b6102da6108af565b6040516102e79190611839565b60405180910390f35b61030a6004803603810190610305919061153f565b610941565b604051610317919061181e565b60405180910390f35b61033a6004803603810190610335919061153f565b610a2c565b604051610347919061181e565b60405180910390f35b61036a600480360381019061036591906114b4565b610a4a565b6040516103779190611a1b565b60405180910390f35b61039a6004803603810190610395919061148b565b610ad1565b005b6060600380546103ab90611b7f565b80601f01602080910402602001604051908101604052809291908181526020018280546103d790611b7f565b80156104245780601f106103f957610100808354040283529160200191610424565b820191906000526020600020905b81548152906001019060200180831161040757829003601f168201915b5050505050905090565b600061044261043b610bce565b8484610bd6565b6001905092915050565b6000600254905090565b6000610463848484610da1565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006104ae610bce565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561052e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105259061193b565b60405180910390fd5b6105428561053a610bce565b858403610bd6565b60019150509392505050565b60006012905090565b60006105f9610564610bce565b848460016000610572610bce565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105f49190611a6d565b610bd6565b6001905092915050565b61060b610bce565b73ffffffffffffffffffffffffffffffffffffffff16610629610885565b73ffffffffffffffffffffffffffffffffffffffff161461067f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106769061195b565b60405180910390fd5b610687611022565b565b61069a610694610bce565b826110c4565b50565b6000600560009054906101000a900460ff16905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610704610bce565b73ffffffffffffffffffffffffffffffffffffffff16610722610885565b73ffffffffffffffffffffffffffffffffffffffff1614610778576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076f9061195b565b60405180910390fd5b610782600061129b565b565b600061079783610792610bce565b610a4a565b9050818110156107dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d39061197b565b60405180910390fd5b6107f0836107e8610bce565b848403610bd6565b6107fa83836110c4565b505050565b610807610bce565b73ffffffffffffffffffffffffffffffffffffffff16610825610885565b73ffffffffffffffffffffffffffffffffffffffff161461087b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108729061195b565b60405180910390fd5b610883611361565b565b6000600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546108be90611b7f565b80601f01602080910402602001604051908101604052809291908181526020018280546108ea90611b7f565b80156109375780601f1061090c57610100808354040283529160200191610937565b820191906000526020600020905b81548152906001019060200180831161091a57829003601f168201915b5050505050905090565b60008060016000610950610bce565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610a0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a04906119fb565b60405180910390fd5b610a21610a18610bce565b85858403610bd6565b600191505092915050565b6000610a40610a39610bce565b8484610da1565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610ad9610bce565b73ffffffffffffffffffffffffffffffffffffffff16610af7610885565b73ffffffffffffffffffffffffffffffffffffffff1614610b4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b449061195b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610bbd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb4906118bb565b60405180910390fd5b610bc68161129b565b50565b505050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3d906119db565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cb6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cad906118db565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610d949190611a1b565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e08906119bb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e789061185b565b60405180910390fd5b610e8c838383611404565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610f12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f09906118fb565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fa59190611a6d565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110099190611a1b565b60405180910390a361101c84848461145c565b50505050565b61102a61069d565b611069576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110609061187b565b60405180910390fd5b6000600560006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6110ad610bce565b6040516110ba9190611803565b60405180910390a1565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611134576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112b9061199b565b60405180910390fd5b61114082600083611404565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156111c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111bd9061189b565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816002600082825461121d9190611ac3565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516112829190611a1b565b60405180910390a36112968360008461145c565b505050565b6000600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61136961069d565b156113a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a09061191b565b60405180910390fd5b6001600560006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586113ed610bce565b6040516113fa9190611803565b60405180910390a1565b61140c61069d565b1561144c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114439061191b565b60405180910390fd5b611457838383610bc9565b505050565b505050565b60008135905061147081612000565b92915050565b60008135905061148581612017565b92915050565b60006020828403121561149d57600080fd5b60006114ab84828501611461565b91505092915050565b600080604083850312156114c757600080fd5b60006114d585828601611461565b92505060206114e685828601611461565b9150509250929050565b60008060006060848603121561150557600080fd5b600061151386828701611461565b935050602061152486828701611461565b925050604061153586828701611476565b9150509250925092565b6000806040838503121561155257600080fd5b600061156085828601611461565b925050602061157185828601611476565b9150509250929050565b60006020828403121561158d57600080fd5b600061159b84828501611476565b91505092915050565b6115ad81611af7565b82525050565b6115bc81611b09565b82525050565b60006115cd82611a51565b6115d78185611a5c565b93506115e7818560208601611b4c565b6115f081611c0f565b840191505092915050565b6000611608602383611a5c565b915061161382611c20565b604082019050919050565b600061162b601483611a5c565b915061163682611c6f565b602082019050919050565b600061164e602283611a5c565b915061165982611c98565b604082019050919050565b6000611671602683611a5c565b915061167c82611ce7565b604082019050919050565b6000611694602283611a5c565b915061169f82611d36565b604082019050919050565b60006116b7602683611a5c565b91506116c282611d85565b604082019050919050565b60006116da601083611a5c565b91506116e582611dd4565b602082019050919050565b60006116fd602883611a5c565b915061170882611dfd565b604082019050919050565b6000611720602083611a5c565b915061172b82611e4c565b602082019050919050565b6000611743602483611a5c565b915061174e82611e75565b604082019050919050565b6000611766602183611a5c565b915061177182611ec4565b604082019050919050565b6000611789602583611a5c565b915061179482611f13565b604082019050919050565b60006117ac602483611a5c565b91506117b782611f62565b604082019050919050565b60006117cf602583611a5c565b91506117da82611fb1565b604082019050919050565b6117ee81611b35565b82525050565b6117fd81611b3f565b82525050565b600060208201905061181860008301846115a4565b92915050565b600060208201905061183360008301846115b3565b92915050565b6000602082019050818103600083015261185381846115c2565b905092915050565b60006020820190508181036000830152611874816115fb565b9050919050565b600060208201905081810360008301526118948161161e565b9050919050565b600060208201905081810360008301526118b481611641565b9050919050565b600060208201905081810360008301526118d481611664565b9050919050565b600060208201905081810360008301526118f481611687565b9050919050565b60006020820190508181036000830152611914816116aa565b9050919050565b60006020820190508181036000830152611934816116cd565b9050919050565b60006020820190508181036000830152611954816116f0565b9050919050565b6000602082019050818103600083015261197481611713565b9050919050565b6000602082019050818103600083015261199481611736565b9050919050565b600060208201905081810360008301526119b481611759565b9050919050565b600060208201905081810360008301526119d48161177c565b9050919050565b600060208201905081810360008301526119f48161179f565b9050919050565b60006020820190508181036000830152611a14816117c2565b9050919050565b6000602082019050611a3060008301846117e5565b92915050565b6000602082019050611a4b60008301846117f4565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611a7882611b35565b9150611a8383611b35565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611ab857611ab7611bb1565b5b828201905092915050565b6000611ace82611b35565b9150611ad983611b35565b925082821015611aec57611aeb611bb1565b5b828203905092915050565b6000611b0282611b15565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611b6a578082015181840152602081019050611b4f565b83811115611b79576000848401525b50505050565b60006002820490506001821680611b9757607f821691505b60208210811415611bab57611baa611be0565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f7760008201527f616e636500000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b61200981611af7565b811461201457600080fd5b50565b61202081611b35565b811461202b57600080fd5b5056fea2646970667358221220b940cfd2adc67e9db3bfc715748c789ef0eda9d8e1b54d2370b95f6b503eb0f664736f6c63430008040033";

export class MouseHauntToken__factory extends ContractFactory {
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
  ): Promise<MouseHauntToken> {
    return super.deploy(overrides || {}) as Promise<MouseHauntToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MouseHauntToken {
    return super.attach(address) as MouseHauntToken;
  }
  connect(signer: Signer): MouseHauntToken__factory {
    return super.connect(signer) as MouseHauntToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MouseHauntTokenInterface {
    return new utils.Interface(_abi) as MouseHauntTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MouseHauntToken {
    return new Contract(address, _abi, signerOrProvider) as MouseHauntToken;
  }
}