// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@pancakeswap-libs/pancake-swap-core/contracts/interfaces/IPancakePair.sol";

/// @custom:security-contact security@mousehaunt.com
contract Oracle {
  IPancakePair public pair;

  constructor(address _pairAddress) {
    pair = IPancakePair(_pairAddress);
  }

  function getRate(uint256 _amountToInWei) public view returns (uint256) {
    (uint112 fromReserve, uint112 toReserve, ) = pair.getReserves();
    return (_amountToInWei * toReserve) / fromReserve;
  }
}
