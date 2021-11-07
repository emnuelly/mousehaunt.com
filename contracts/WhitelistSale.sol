// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import "./utils/Whitelist.sol";
import "./utils/TokenAllocation.sol";

/// @custom:security-contact security@mousehaunt.com
contract WhitelistSale is Pausable, Ownable, Whitelist, TokenAllocation {
  using SafeERC20 for IERC20;

  event IGO(uint256 indexed timestamp);

  IERC20 public immutable busd;
  uint256 public immutable mhtToBusd;
  uint256 public immutable minMhtAmount;
  uint256 public immutable maxMhtAmount;

  constructor(
    address _mhtOwner,
    IERC20 _mht,
    IERC20 _busd,
    uint256 _mhtToBusd,
    uint256 _minMhtAmount,
    uint256 _maxMhtAmount,
    uint256 _unlockAtIGOPercent,
    uint256 _cliffMonths,
    uint256 _vestingPeriodMonths
  )
    TokenAllocation(
      _mhtOwner,
      _mht,
      _unlockAtIGOPercent,
      _cliffMonths,
      _vestingPeriodMonths
    )
  {
    transferOwnership(_mhtOwner);

    busd = _busd;
    mhtToBusd = _mhtToBusd;
    minMhtAmount = _minMhtAmount;
    maxMhtAmount = _maxMhtAmount;
  }

  function pause() public onlyOwner {
    _pause();
  }

  function unpause() public onlyOwner {
    _unpause();
  }

  function setIgoTimestamp(uint256 _igoTimestamp)
    public
    onlyOwner
    whenNotPaused
  {
    _setIgoTimestamp(_igoTimestamp);
    emit IGO(_igoTimestamp);
  }

  function buy(uint256 _mhtAmount)
    public
    whenNotPaused
    whitelisted(msg.sender)
  {
    require(_mhtAmount >= minMhtAmount, "Sale: amount less than min");
    require(_mhtAmount <= maxMhtAmount, "Sale: amount greater than max");

    uint256 busdAmount = (_mhtAmount * mhtToBusd) / 1e18;

    busd.safeTransferFrom(msg.sender, mhtOwner, busdAmount);
    _addUserToTokenAllocation(msg.sender, _mhtAmount);
  }

  function addToWhitelist(address[] memory _buyers)
    public
    onlyOwner
    whenNotPaused
  {
    _addToWhitelist(_buyers);
  }

  function removeFromWhitelist(address[] memory _buyers)
    public
    onlyOwner
    whenNotPaused
  {
    _removeFromWhitelist(_buyers);
  }
}
