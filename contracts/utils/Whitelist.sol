// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

/// @custom:security-contact security@mousehaunt.com
abstract contract Whitelist {
  mapping(address => uint256) private _whitelist;

  modifier whitelistedWithAmount(address wallet, uint256 amount) {
    require(
      amount <= whitelistAmount(wallet),
      "Whitelist: amount > whitelisted"
    );
    _;
  }

  function whitelistAmount(address wallet)
    public
    view
    virtual
    returns (uint256)
  {
    return _whitelist[wallet];
  }

  function _addToWhitelist(address[] memory wallets, uint256 _amount)
    internal
    virtual
  {
    for (uint256 i = 0; i < wallets.length; i++) {
      _whitelist[wallets[i]] = _amount;
    }
  }

  function _removeFromWhitelist(address[] memory wallets) internal virtual {
    for (uint256 i = 0; i < wallets.length; i++) {
      _whitelist[wallets[i]] = 0;
    }
  }
}
