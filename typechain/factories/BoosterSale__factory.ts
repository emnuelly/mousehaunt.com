/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, BigNumberish, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { BoosterSale, BoosterSaleInterface } from '../BoosterSale'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_boosterOwner',
        type: 'address'
      },
      {
        internalType: 'contract IERC20',
        name: '_busd',
        type: 'address'
      },
      {
        internalType: 'contract IERC20',
        name: '_legendaryBooster',
        type: 'address'
      },
      {
        internalType: 'contract IERC20',
        name: '_epicBooster',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'legendaryBoosterPrice',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'epicBoosterPrice',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'Paused',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32'
      }
    ],
    name: 'RoleAdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'RoleGranted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'RoleRevoked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'Unpaused',
    type: 'event'
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'OPERATIONS_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'boosterOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'busd',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'booster',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_numberOfBoostersInWei',
        type: 'uint256'
      }
    ],
    name: 'buy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'epicBooster',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'legendaryBooster',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address'
      }
    ],
    name: 'prices',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_buyers',
        type: 'address[]'
      },
      {
        internalType: 'uint256[]',
        name: 'legendaryAllowances',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'epicAllowances',
        type: 'uint256[]'
      }
    ],
    name: 'setWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4'
      }
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      },
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address'
      }
    ],
    name: 'whitelist',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]

const _bytecode =
  '0x6101006040523480156200001257600080fd5b5060405162002a3138038062002a31833981810160405281019062000038919062000461565b60008060006101000a81548160ff021916908315150217905550620000676000801b87620001fd60201b60201c565b620000997fe3723f41c074e25ac45636a7cd631386f2e15f8583ade05d0b710b41251f5c7b87620001fd60201b60201c565b8573ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508473ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508373ffffffffffffffffffffffffffffffffffffffff1660e08173ffffffffffffffffffffffffffffffffffffffff16815250508273ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505081600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050505050620004fd565b6200020f82826200021360201b60201c565b5050565b6200022582826200030460201b60201c565b6200030057600180600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620002a56200036f60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60006001600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003a9826200037c565b9050919050565b620003bb816200039c565b8114620003c757600080fd5b50565b600081519050620003db81620003b0565b92915050565b6000620003ee826200039c565b9050919050565b6200040081620003e1565b81146200040c57600080fd5b50565b6000815190506200042081620003f5565b92915050565b6000819050919050565b6200043b8162000426565b81146200044757600080fd5b50565b6000815190506200045b8162000430565b92915050565b60008060008060008060c0878903121562000481576200048062000377565b5b60006200049189828a01620003ca565b9650506020620004a489828a016200040f565b9550506040620004b789828a016200040f565b9450506060620004ca89828a016200040f565b9350506080620004dd89828a016200044a565b92505060a0620004f089828a016200044a565b9150509295509295509295565b60805160a05160c05160e0516124d76200055a6000396000818161050e0152610c540152600081816105ef0152610c070152600081816107370152610b560152600081816107ae01528181610aea0152610ba001526124d76000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806378a6cc09116100ad578063cce7ec1311610071578063cce7ec13146102e4578063cfed246b14610300578063d24f3c5b14610330578063d547741f1461034e578063f32131851461036a57610121565b806378a6cc091461023e5780638456cb591461025c57806391d1485414610266578063a217fddf14610296578063b092145e146102b457610121565b806336568abe116100f457806336568abe146101be5780633ca5b234146101da5780633f4ba83a146101f85780635c975abb146102025780637532ed2b1461022057610121565b806301ffc9a71461012657806306c8470114610156578063248a9ca3146101725780632f2ff15d146101a2575b600080fd5b610140600480360381019061013b919061161e565b610388565b60405161014d9190611666565b60405180910390f35b610170600480360381019061016b919061173c565b610402565b005b61018c60048036038101906101879190611826565b610669565b6040516101999190611862565b60405180910390f35b6101bc60048036038101906101b791906118db565b610689565b005b6101d860048036038101906101d391906118db565b6106b2565b005b6101e2610735565b6040516101ef919061197a565b60405180910390f35b610200610759565b005b61020a610796565b6040516102179190611666565b60405180910390f35b6102286107ac565b60405161023591906119a4565b60405180910390f35b6102466107d0565b6040516102539190611862565b60405180910390f35b6102646107f4565b005b610280600480360381019061027b91906118db565b610831565b60405161028d9190611666565b60405180910390f35b61029e61089c565b6040516102ab9190611862565b60405180910390f35b6102ce60048036038101906102c991906119fd565b6108a3565b6040516102db9190611a56565b60405180910390f35b6102fe60048036038101906102f99190611a9d565b6108c8565b005b61031a60048036038101906103159190611add565b610bed565b6040516103279190611a56565b60405180910390f35b610338610c05565b604051610345919061197a565b60405180910390f35b610368600480360381019061036391906118db565b610c29565b005b610372610c52565b60405161037f919061197a565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103fb57506103fa82610c76565b5b9050919050565b7fe3723f41c074e25ac45636a7cd631386f2e15f8583ade05d0b710b41251f5c7b6104348161042f610ce0565b610ce8565b61043c610796565b1561047c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047390611b67565b60405180910390fd5b60005b8787905081101561065f5785858281811061049d5761049c611b87565b5b90506020020135600360008a8a858181106104bb576104ba611b87565b5b90506020020160208101906104d09190611bb6565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555083838281811061057e5761057d611b87565b5b90506020020135600360008a8a8581811061059c5761059b611b87565b5b90506020020160208101906105b19190611bb6565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550808061065790611c12565b91505061047f565b5050505050505050565b600060016000838152602001908152602001600020600101549050919050565b61069282610669565b6106a38161069e610ce0565b610ce8565b6106ad8383610d85565b505050565b6106ba610ce0565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610727576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071e90611ccd565b60405180910390fd5b6107318282610e65565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7fe3723f41c074e25ac45636a7cd631386f2e15f8583ade05d0b710b41251f5c7b61078b81610786610ce0565b610ce8565b610793610f47565b50565b60008060009054906101000a900460ff16905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b7fe3723f41c074e25ac45636a7cd631386f2e15f8583ade05d0b710b41251f5c7b81565b7fe3723f41c074e25ac45636a7cd631386f2e15f8583ade05d0b710b41251f5c7b61082681610821610ce0565b610ce8565b61082e610fe8565b50565b60006001600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b6003602052816000526040600020602052806000526040600020600091509150505481565b6108d0610796565b15610910576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090790611b67565b60405180910390fd5b6000670de0b6b3a7640000826109269190611d1c565b905080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156109e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109de90611d99565b60405180910390fd5b670de0b6b3a76400008210158015610a1257506000670de0b6b3a764000083610a109190611db9565b145b610a51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4890611e36565b60405180910390fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610add9190611e56565b92505081905550610b9b337f0000000000000000000000000000000000000000000000000000000000000000600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484610b549190611e8a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661108a909392919063ffffffff16565b610be87f000000000000000000000000000000000000000000000000000000000000000033848673ffffffffffffffffffffffffffffffffffffffff1661108a909392919063ffffffff16565b505050565b60026020528060005260406000206000915090505481565b7f000000000000000000000000000000000000000000000000000000000000000081565b610c3282610669565b610c4381610c3e610ce0565b610ce8565b610c4d8383610e65565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b610cf28282610831565b610d8157610d178173ffffffffffffffffffffffffffffffffffffffff166014611113565b610d258360001c6020611113565b604051602001610d36929190611ff6565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d78919061207a565b60405180910390fd5b5050565b610d8f8282610831565b610e6157600180600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610e06610ce0565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b610e6f8282610831565b15610f435760006001600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610ee8610ce0565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b610f4f610796565b610f8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f85906120e8565b60405180910390fd5b60008060006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610fd1610ce0565b604051610fde91906119a4565b60405180910390a1565b610ff0610796565b15611030576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102790611b67565b60405180910390fd5b60016000806101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611073610ce0565b60405161108091906119a4565b60405180910390a1565b61110d846323b872dd60e01b8585856040516024016110ab93929190612108565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061134f565b50505050565b6060600060028360026111269190611e8a565b611130919061213f565b67ffffffffffffffff81111561114957611148612195565b5b6040519080825280601f01601f19166020018201604052801561117b5781602001600182028036833780820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106111b3576111b2611b87565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061121757611216611b87565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600060018460026112579190611e8a565b611261919061213f565b90505b6001811115611301577f3031323334353637383961626364656600000000000000000000000000000000600f8616601081106112a3576112a2611b87565b5b1a60f81b8282815181106112ba576112b9611b87565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c9450806112fa906121c4565b9050611264565b5060008414611345576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133c9061223a565b60405180910390fd5b8091505092915050565b60006113b1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166114169092919063ffffffff16565b905060008151111561141157808060200190518101906113d19190612286565b611410576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140790612325565b60405180910390fd5b5b505050565b6060611425848460008561142e565b90509392505050565b606082471015611473576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161146a906123b7565b60405180910390fd5b61147c85611542565b6114bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b290612423565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516114e4919061248a565b60006040518083038185875af1925050503d8060008114611521576040519150601f19603f3d011682016040523d82523d6000602084013e611526565b606091505b5091509150611536828286611555565b92505050949350505050565b600080823b905060008111915050919050565b60608315611565578290506115b5565b6000835111156115785782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115ac919061207a565b60405180910390fd5b9392505050565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6115fb816115c6565b811461160657600080fd5b50565b600081359050611618816115f2565b92915050565b600060208284031215611634576116336115bc565b5b600061164284828501611609565b91505092915050565b60008115159050919050565b6116608161164b565b82525050565b600060208201905061167b6000830184611657565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126116a6576116a5611681565b5b8235905067ffffffffffffffff8111156116c3576116c2611686565b5b6020830191508360208202830111156116df576116de61168b565b5b9250929050565b60008083601f8401126116fc576116fb611681565b5b8235905067ffffffffffffffff81111561171957611718611686565b5b6020830191508360208202830111156117355761173461168b565b5b9250929050565b60008060008060008060608789031215611759576117586115bc565b5b600087013567ffffffffffffffff811115611777576117766115c1565b5b61178389828a01611690565b9650965050602087013567ffffffffffffffff8111156117a6576117a56115c1565b5b6117b289828a016116e6565b9450945050604087013567ffffffffffffffff8111156117d5576117d46115c1565b5b6117e189828a016116e6565b92509250509295509295509295565b6000819050919050565b611803816117f0565b811461180e57600080fd5b50565b600081359050611820816117fa565b92915050565b60006020828403121561183c5761183b6115bc565b5b600061184a84828501611811565b91505092915050565b61185c816117f0565b82525050565b60006020820190506118776000830184611853565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006118a88261187d565b9050919050565b6118b88161189d565b81146118c357600080fd5b50565b6000813590506118d5816118af565b92915050565b600080604083850312156118f2576118f16115bc565b5b600061190085828601611811565b9250506020611911858286016118c6565b9150509250929050565b6000819050919050565b600061194061193b6119368461187d565b61191b565b61187d565b9050919050565b600061195282611925565b9050919050565b600061196482611947565b9050919050565b61197481611959565b82525050565b600060208201905061198f600083018461196b565b92915050565b61199e8161189d565b82525050565b60006020820190506119b96000830184611995565b92915050565b60006119ca8261189d565b9050919050565b6119da816119bf565b81146119e557600080fd5b50565b6000813590506119f7816119d1565b92915050565b60008060408385031215611a1457611a136115bc565b5b6000611a22858286016118c6565b9250506020611a33858286016119e8565b9150509250929050565b6000819050919050565b611a5081611a3d565b82525050565b6000602082019050611a6b6000830184611a47565b92915050565b611a7a81611a3d565b8114611a8557600080fd5b50565b600081359050611a9781611a71565b92915050565b60008060408385031215611ab457611ab36115bc565b5b6000611ac2858286016119e8565b9250506020611ad385828601611a88565b9150509250929050565b600060208284031215611af357611af26115bc565b5b6000611b01848285016119e8565b91505092915050565b600082825260208201905092915050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b6000611b51601083611b0a565b9150611b5c82611b1b565b602082019050919050565b60006020820190508181036000830152611b8081611b44565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611bcc57611bcb6115bc565b5b6000611bda848285016118c6565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611c1d82611a3d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611c5057611c4f611be3565b5b600182019050919050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000611cb7602f83611b0a565b9150611cc282611c5b565b604082019050919050565b60006020820190508181036000830152611ce681611caa565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611d2782611a3d565b9150611d3283611a3d565b925082611d4257611d41611ced565b5b828204905092915050565b7f426f6f7374657253616c653a2061626f76652063617000000000000000000000600082015250565b6000611d83601683611b0a565b9150611d8e82611d4d565b602082019050919050565b60006020820190508181036000830152611db281611d76565b9050919050565b6000611dc482611a3d565b9150611dcf83611a3d565b925082611ddf57611dde611ced565b5b828206905092915050565b7f426f6f7374657253616c653a20696e76616c696420616d6f756e740000000000600082015250565b6000611e20601b83611b0a565b9150611e2b82611dea565b602082019050919050565b60006020820190508181036000830152611e4f81611e13565b9050919050565b6000611e6182611a3d565b9150611e6c83611a3d565b925082821015611e7f57611e7e611be3565b5b828203905092915050565b6000611e9582611a3d565b9150611ea083611a3d565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611ed957611ed8611be3565b5b828202905092915050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b6000611f25601783611ee4565b9150611f3082611eef565b601782019050919050565b600081519050919050565b60005b83811015611f64578082015181840152602081019050611f49565b83811115611f73576000848401525b50505050565b6000611f8482611f3b565b611f8e8185611ee4565b9350611f9e818560208601611f46565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b6000611fe0601183611ee4565b9150611feb82611faa565b601182019050919050565b600061200182611f18565b915061200d8285611f79565b915061201882611fd3565b91506120248284611f79565b91508190509392505050565b6000601f19601f8301169050919050565b600061204c82611f3b565b6120568185611b0a565b9350612066818560208601611f46565b61206f81612030565b840191505092915050565b600060208201905081810360008301526120948184612041565b905092915050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b60006120d2601483611b0a565b91506120dd8261209c565b602082019050919050565b60006020820190508181036000830152612101816120c5565b9050919050565b600060608201905061211d6000830186611995565b61212a6020830185611995565b6121376040830184611a47565b949350505050565b600061214a82611a3d565b915061215583611a3d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561218a57612189611be3565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006121cf82611a3d565b915060008214156121e3576121e2611be3565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b6000612224602083611b0a565b915061222f826121ee565b602082019050919050565b6000602082019050818103600083015261225381612217565b9050919050565b6122638161164b565b811461226e57600080fd5b50565b6000815190506122808161225a565b92915050565b60006020828403121561229c5761229b6115bc565b5b60006122aa84828501612271565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b600061230f602a83611b0a565b915061231a826122b3565b604082019050919050565b6000602082019050818103600083015261233e81612302565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006123a1602683611b0a565b91506123ac82612345565b604082019050919050565b600060208201905081810360008301526123d081612394565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b600061240d601d83611b0a565b9150612418826123d7565b602082019050919050565b6000602082019050818103600083015261243c81612400565b9050919050565b600081519050919050565b600081905092915050565b600061246482612443565b61246e818561244e565b935061247e818560208601611f46565b80840191505092915050565b60006124968284612459565b91508190509291505056fea26469706673582212207994b1b94f6f785e91533bfee45316c8b9ec37d5ac2ccd89948406b909bde32b64736f6c63430008090033'

export class BoosterSale__factory extends ContractFactory {
  constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0])
    } else {
      super(...args)
    }
  }

  deploy(
    _boosterOwner: string,
    _busd: string,
    _legendaryBooster: string,
    _epicBooster: string,
    legendaryBoosterPrice: BigNumberish,
    epicBoosterPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BoosterSale> {
    return super.deploy(
      _boosterOwner,
      _busd,
      _legendaryBooster,
      _epicBooster,
      legendaryBoosterPrice,
      epicBoosterPrice,
      overrides || {}
    ) as Promise<BoosterSale>
  }
  getDeployTransaction(
    _boosterOwner: string,
    _busd: string,
    _legendaryBooster: string,
    _epicBooster: string,
    legendaryBoosterPrice: BigNumberish,
    epicBoosterPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _boosterOwner,
      _busd,
      _legendaryBooster,
      _epicBooster,
      legendaryBoosterPrice,
      epicBoosterPrice,
      overrides || {}
    )
  }
  attach(address: string): BoosterSale {
    return super.attach(address) as BoosterSale
  }
  connect(signer: Signer): BoosterSale__factory {
    return super.connect(signer) as BoosterSale__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): BoosterSaleInterface {
    return new utils.Interface(_abi) as BoosterSaleInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BoosterSale {
    return new Contract(address, _abi, signerOrProvider) as BoosterSale
  }
}
