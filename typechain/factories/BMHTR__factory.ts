/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BMHTR, BMHTRInterface } from "../BMHTR";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
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
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200336d3803806200336d833981810160405281019062000037919062000623565b6040518060400160405280601881526020017f4d6f757365204861756e7420426f6f73746572205241524500000000000000008152506040518060400160405280600581526020017f424d4854520000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb92919062000509565b508060049080519060200190620000d492919062000509565b5050506000600560006101000a81548160ff021916908315150217905550620001076000801b826200017f60201b60201c565b620001397f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a826200017f60201b60201c565b62000178816200014e6200019560201b60201c565b600a6200015c9190620007ef565b6202dc6c6200016c919062000840565b6200019a60201b60201c565b5062000a86565b6200019182826200031360201b60201c565b5050565b600090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200020d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002049062000902565b60405180910390fd5b62000221600083836200040560201b60201c565b806002600082825462000235919062000924565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200028c919062000924565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002f3919062000992565b60405180910390a36200030f600083836200047560201b60201c565b5050565b6200032582826200047a60201b60201c565b620004015760016006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620003a6620004e560201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b62000415620004ed60201b60201c565b1562000458576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200044f90620009ff565b60405180910390fd5b620004708383836200050460201b62000ca11760201c565b505050565b505050565b60006006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b6000600560009054906101000a900460ff16905090565b505050565b828054620005179062000a50565b90600052602060002090601f0160209004810192826200053b576000855562000587565b82601f106200055657805160ff191683800117855562000587565b8280016001018555821562000587579182015b828111156200058657825182559160200191906001019062000569565b5b5090506200059691906200059a565b5090565b5b80821115620005b55760008160009055506001016200059b565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620005eb82620005be565b9050919050565b620005fd81620005de565b81146200060957600080fd5b50565b6000815190506200061d81620005f2565b92915050565b6000602082840312156200063c576200063b620005b9565b5b60006200064c848285016200060c565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115620006e357808604811115620006bb57620006ba62000655565b5b6001851615620006cb5780820291505b8081029050620006db8562000684565b94506200069b565b94509492505050565b600082620006fe5760019050620007d1565b816200070e5760009050620007d1565b8160018114620007275760028114620007325762000768565b6001915050620007d1565b60ff84111562000747576200074662000655565b5b8360020a91508482111562000761576200076062000655565b5b50620007d1565b5060208310610133831016604e8410600b8410161715620007a25782820a9050838111156200079c576200079b62000655565b5b620007d1565b620007b1848484600162000691565b92509050818404811115620007cb57620007ca62000655565b5b81810290505b9392505050565b6000819050919050565b600060ff82169050919050565b6000620007fc82620007d8565b91506200080983620007e2565b9250620008387fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620006ec565b905092915050565b60006200084d82620007d8565b91506200085a83620007d8565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161562000896576200089562000655565b5b828202905092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620008ea601f83620008a1565b9150620008f782620008b2565b602082019050919050565b600060208201905081810360008301526200091d81620008db565b9050919050565b60006200093182620007d8565b91506200093e83620007d8565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000976576200097562000655565b5b828201905092915050565b6200098c81620007d8565b82525050565b6000602082019050620009a9600083018462000981565b92915050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b6000620009e7601083620008a1565b9150620009f482620009af565b602082019050919050565b6000602082019050818103600083015262000a1a81620009d8565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000a6957607f821691505b6020821081141562000a805762000a7f62000a21565b5b50919050565b6128d78062000a966000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80635c975abb116100c3578063a217fddf1161007c578063a217fddf146103c7578063a457c2d7146103e5578063a9059cbb14610415578063d547741f14610445578063dd62ed3e14610461578063e63ab1e91461049157610158565b80635c975abb1461030557806370a082311461032357806379cc6790146103535780638456cb591461036f57806391d148541461037957806395d89b41146103a957610158565b80632f2ff15d116101155780632f2ff15d14610259578063313ce5671461027557806336568abe1461029357806339509351146102af5780633f4ba83a146102df57806342966c68146102e957610158565b806301ffc9a71461015d57806306fdde031461018d578063095ea7b3146101ab57806318160ddd146101db57806323b872dd146101f9578063248a9ca314610229575b600080fd5b610177600480360381019061017291906119d6565b6104af565b6040516101849190611a1e565b60405180910390f35b610195610529565b6040516101a29190611ad2565b60405180910390f35b6101c560048036038101906101c09190611b88565b6105bb565b6040516101d29190611a1e565b60405180910390f35b6101e36105d9565b6040516101f09190611bd7565b60405180910390f35b610213600480360381019061020e9190611bf2565b6105e3565b6040516102209190611a1e565b60405180910390f35b610243600480360381019061023e9190611c7b565b6106db565b6040516102509190611cb7565b60405180910390f35b610273600480360381019061026e9190611cd2565b6106fb565b005b61027d610724565b60405161028a9190611d2e565b60405180910390f35b6102ad60048036038101906102a89190611cd2565b610729565b005b6102c960048036038101906102c49190611b88565b6107ac565b6040516102d69190611a1e565b60405180910390f35b6102e7610858565b005b61030360048036038101906102fe9190611d49565b610895565b005b61030d6108a9565b60405161031a9190611a1e565b60405180910390f35b61033d60048036038101906103389190611d76565b6108c0565b60405161034a9190611bd7565b60405180910390f35b61036d60048036038101906103689190611b88565b610908565b005b610377610983565b005b610393600480360381019061038e9190611cd2565b6109c0565b6040516103a09190611a1e565b60405180910390f35b6103b1610a2b565b6040516103be9190611ad2565b60405180910390f35b6103cf610abd565b6040516103dc9190611cb7565b60405180910390f35b6103ff60048036038101906103fa9190611b88565b610ac4565b60405161040c9190611a1e565b60405180910390f35b61042f600480360381019061042a9190611b88565b610baf565b60405161043c9190611a1e565b60405180910390f35b61045f600480360381019061045a9190611cd2565b610bcd565b005b61047b60048036038101906104769190611da3565b610bf6565b6040516104889190611bd7565b60405180910390f35b610499610c7d565b6040516104a69190611cb7565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610522575061052182610ca6565b5b9050919050565b60606003805461053890611e12565b80601f016020809104026020016040519081016040528092919081815260200182805461056490611e12565b80156105b15780601f10610586576101008083540402835291602001916105b1565b820191906000526020600020905b81548152906001019060200180831161059457829003601f168201915b5050505050905090565b60006105cf6105c8610d10565b8484610d18565b6001905092915050565b6000600254905090565b60006105f0848484610ee3565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061063b610d10565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156106bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b290611eb6565b60405180910390fd5b6106cf856106c7610d10565b858403610d18565b60019150509392505050565b600060066000838152602001908152602001600020600101549050919050565b610704826106db565b61071581610710610d10565b611164565b61071f8383611201565b505050565b600090565b610731610d10565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461079e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079590611f48565b60405180910390fd5b6107a882826112e2565b5050565b600061084e6107b9610d10565b8484600160006107c7610d10565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108499190611f97565b610d18565b6001905092915050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a61088a81610885610d10565b611164565b6108926113c4565b50565b6108a66108a0610d10565b82611466565b50565b6000600560009054906101000a900460ff16905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600061091b83610916610d10565b610bf6565b905081811015610960576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109579061205f565b60405180910390fd5b6109748361096c610d10565b848403610d18565b61097e8383611466565b505050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a6109b5816109b0610d10565b611164565b6109bd61163d565b50565b60006006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b606060048054610a3a90611e12565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6690611e12565b8015610ab35780601f10610a8857610100808354040283529160200191610ab3565b820191906000526020600020905b815481529060010190602001808311610a9657829003601f168201915b5050505050905090565b6000801b81565b60008060016000610ad3610d10565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610b90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b87906120f1565b60405180910390fd5b610ba4610b9b610d10565b85858403610d18565b600191505092915050565b6000610bc3610bbc610d10565b8484610ee3565b6001905092915050565b610bd6826106db565b610be781610be2610d10565b611164565b610bf183836112e2565b505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7f90612183565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610df8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610def90612215565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610ed69190611bd7565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4a906122a7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fba90612339565b60405180910390fd5b610fce8383836116e0565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611054576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104b906123cb565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110e79190611f97565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161114b9190611bd7565b60405180910390a361115e848484611738565b50505050565b61116e82826109c0565b6111fd576111938173ffffffffffffffffffffffffffffffffffffffff16601461173d565b6111a18360001c602061173d565b6040516020016111b29291906124bf565b6040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f49190611ad2565b60405180910390fd5b5050565b61120b82826109c0565b6112de5760016006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611283610d10565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6112ec82826109c0565b156113c05760006006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611365610d10565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b6113cc6108a9565b61140b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140290612545565b60405180910390fd5b6000600560006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa61144f610d10565b60405161145c9190612574565b60405180910390a1565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156114d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114cd90612601565b60405180910390fd5b6114e2826000836116e0565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611568576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155f90612693565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546115bf91906126b3565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516116249190611bd7565b60405180910390a361163883600084611738565b505050565b6116456108a9565b15611685576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167c90612733565b60405180910390fd5b6001600560006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586116c9610d10565b6040516116d69190612574565b60405180910390a1565b6116e86108a9565b15611728576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161171f90612733565b60405180910390fd5b611733838383610ca1565b505050565b505050565b6060600060028360026117509190612753565b61175a9190611f97565b67ffffffffffffffff811115611773576117726127ad565b5b6040519080825280601f01601f1916602001820160405280156117a55781602001600182028036833780820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106117dd576117dc6127dc565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611841576118406127dc565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600060018460026118819190612753565b61188b9190611f97565b90505b600181111561192b577f3031323334353637383961626364656600000000000000000000000000000000600f8616601081106118cd576118cc6127dc565b5b1a60f81b8282815181106118e4576118e36127dc565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c9450806119249061280b565b905061188e565b506000841461196f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161196690612881565b60405180910390fd5b8091505092915050565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6119b38161197e565b81146119be57600080fd5b50565b6000813590506119d0816119aa565b92915050565b6000602082840312156119ec576119eb611979565b5b60006119fa848285016119c1565b91505092915050565b60008115159050919050565b611a1881611a03565b82525050565b6000602082019050611a336000830184611a0f565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611a73578082015181840152602081019050611a58565b83811115611a82576000848401525b50505050565b6000601f19601f8301169050919050565b6000611aa482611a39565b611aae8185611a44565b9350611abe818560208601611a55565b611ac781611a88565b840191505092915050565b60006020820190508181036000830152611aec8184611a99565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611b1f82611af4565b9050919050565b611b2f81611b14565b8114611b3a57600080fd5b50565b600081359050611b4c81611b26565b92915050565b6000819050919050565b611b6581611b52565b8114611b7057600080fd5b50565b600081359050611b8281611b5c565b92915050565b60008060408385031215611b9f57611b9e611979565b5b6000611bad85828601611b3d565b9250506020611bbe85828601611b73565b9150509250929050565b611bd181611b52565b82525050565b6000602082019050611bec6000830184611bc8565b92915050565b600080600060608486031215611c0b57611c0a611979565b5b6000611c1986828701611b3d565b9350506020611c2a86828701611b3d565b9250506040611c3b86828701611b73565b9150509250925092565b6000819050919050565b611c5881611c45565b8114611c6357600080fd5b50565b600081359050611c7581611c4f565b92915050565b600060208284031215611c9157611c90611979565b5b6000611c9f84828501611c66565b91505092915050565b611cb181611c45565b82525050565b6000602082019050611ccc6000830184611ca8565b92915050565b60008060408385031215611ce957611ce8611979565b5b6000611cf785828601611c66565b9250506020611d0885828601611b3d565b9150509250929050565b600060ff82169050919050565b611d2881611d12565b82525050565b6000602082019050611d436000830184611d1f565b92915050565b600060208284031215611d5f57611d5e611979565b5b6000611d6d84828501611b73565b91505092915050565b600060208284031215611d8c57611d8b611979565b5b6000611d9a84828501611b3d565b91505092915050565b60008060408385031215611dba57611db9611979565b5b6000611dc885828601611b3d565b9250506020611dd985828601611b3d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611e2a57607f821691505b60208210811415611e3e57611e3d611de3565b5b50919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b6000611ea0602883611a44565b9150611eab82611e44565b604082019050919050565b60006020820190508181036000830152611ecf81611e93565b9050919050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000611f32602f83611a44565b9150611f3d82611ed6565b604082019050919050565b60006020820190508181036000830152611f6181611f25565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611fa282611b52565b9150611fad83611b52565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611fe257611fe1611f68565b5b828201905092915050565b7f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f7760008201527f616e636500000000000000000000000000000000000000000000000000000000602082015250565b6000612049602483611a44565b915061205482611fed565b604082019050919050565b600060208201905081810360008301526120788161203c565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006120db602583611a44565b91506120e68261207f565b604082019050919050565b6000602082019050818103600083015261210a816120ce565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061216d602483611a44565b915061217882612111565b604082019050919050565b6000602082019050818103600083015261219c81612160565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006121ff602283611a44565b915061220a826121a3565b604082019050919050565b6000602082019050818103600083015261222e816121f2565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000612291602583611a44565b915061229c82612235565b604082019050919050565b600060208201905081810360008301526122c081612284565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000612323602383611a44565b915061232e826122c7565b604082019050919050565b6000602082019050818103600083015261235281612316565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006123b5602683611a44565b91506123c082612359565b604082019050919050565b600060208201905081810360008301526123e4816123a8565b9050919050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b600061242c6017836123eb565b9150612437826123f6565b601782019050919050565b600061244d82611a39565b61245781856123eb565b9350612467818560208601611a55565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b60006124a96011836123eb565b91506124b482612473565b601182019050919050565b60006124ca8261241f565b91506124d68285612442565b91506124e18261249c565b91506124ed8284612442565b91508190509392505050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b600061252f601483611a44565b915061253a826124f9565b602082019050919050565b6000602082019050818103600083015261255e81612522565b9050919050565b61256e81611b14565b82525050565b60006020820190506125896000830184612565565b92915050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006125eb602183611a44565b91506125f68261258f565b604082019050919050565b6000602082019050818103600083015261261a816125de565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b600061267d602283611a44565b915061268882612621565b604082019050919050565b600060208201905081810360008301526126ac81612670565b9050919050565b60006126be82611b52565b91506126c983611b52565b9250828210156126dc576126db611f68565b5b828203905092915050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b600061271d601083611a44565b9150612728826126e7565b602082019050919050565b6000602082019050818103600083015261274c81612710565b9050919050565b600061275e82611b52565b915061276983611b52565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156127a2576127a1611f68565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061281682611b52565b9150600082141561282a57612829611f68565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b600061286b602083611a44565b915061287682612835565b602082019050919050565b6000602082019050818103600083015261289a8161285e565b905091905056fea26469706673582212207784a9b3f79d957478f10d4391099a138ec4a587ac375c2bff305e4f3aae885a64736f6c63430008090033";

export class BMHTR__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BMHTR> {
    return super.deploy(owner, overrides || {}) as Promise<BMHTR>;
  }
  getDeployTransaction(
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner, overrides || {});
  }
  attach(address: string): BMHTR {
    return super.attach(address) as BMHTR;
  }
  connect(signer: Signer): BMHTR__factory {
    return super.connect(signer) as BMHTR__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BMHTRInterface {
    return new utils.Interface(_abi) as BMHTRInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BMHTR {
    return new Contract(address, _abi, signerOrProvider) as BMHTR;
  }
}