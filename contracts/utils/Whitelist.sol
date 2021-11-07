// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

/// @custom:security-contact security@mousehaunt.com
abstract contract Whitelist {
  mapping(address => bool) private _whitelist;

  modifier whitelisted(address wallet) {
    require(isWhitelisted(wallet), "Whitelist: not whitelisted");
    _;
  }

  function isWhitelisted(address wallet) public view virtual returns (bool) {
    return _whitelist[wallet];
  }

  function _addToWhitelist(address[] memory wallets) internal virtual {
    for (uint256 i = 0; i < wallets.length; i++) {
      _whitelist[wallets[i]] = true;
    }
  }

  function _removeFromWhitelist(address[] memory wallets) internal virtual {
    for (uint256 i = 0; i < wallets.length; i++) {
      _whitelist[wallets[i]] = false;
    }
  }
}
