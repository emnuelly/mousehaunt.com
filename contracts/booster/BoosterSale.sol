// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/// @custom:security-contact security@mousehaunt.com
contract BoosterSale is Pausable, Ownable {
  using SafeMath for uint256;
  using SafeERC20 for IERC20;

  address public immutable boosterOwner;
  IERC20 public immutable busd;

  IERC20[] public boosters;
  uint256[] public busdPricePerBoosterInWei;
  uint256[] public capPerBoosterInWei;

  mapping(address => bool) public isWhitelisted;
  mapping(IERC20 => uint256) public boosterToBoosterIndex;

  constructor(address _boosterOwner, IERC20 _busd) {
    transferOwnership(_boosterOwner);

    boosterOwner = _boosterOwner;
    busd = _busd;
  }

  function pause() public onlyOwner {
    _pause();
  }

  function unpause() public onlyOwner {
    _unpause();
  }

  function configure(
    IERC20[] memory _boosters,
    uint256[] memory _busdPricePerBoosterInWei,
    uint256[] memory _capPerBoosterInWei
  ) public onlyOwner whenNotPaused {
    require(
      _boosters.length == _busdPricePerBoosterInWei.length &&
        _busdPricePerBoosterInWei.length == _capPerBoosterInWei.length,
      "BoosterSale: invalid config"
    );

    delete boosters;
    delete busdPricePerBoosterInWei;
    delete capPerBoosterInWei;

    uint256 numberOfBoosters = _boosters.length;
    for (uint256 i = 0; i < numberOfBoosters; i++) {
      boosters.push(_boosters[i]);
      busdPricePerBoosterInWei.push(_busdPricePerBoosterInWei[i]);
      capPerBoosterInWei.push(_capPerBoosterInWei[i]);
      boosterToBoosterIndex[_boosters[i]] = i;
    }
  }

  function buy(IERC20 booster, uint256 _numberOfBoostersInWei)
    public
    whenNotPaused
  {
    require(isWhitelisted[msg.sender], "BoosterSale: not whitelisted");
    require(
      _numberOfBoostersInWei >= 1e18 && _numberOfBoostersInWei % 1e18 == 0,
      "BoosterSale: invalid amount"
    );

    uint256 index = boosterToBoosterIndex[booster];

    uint256 capInWei = capPerBoosterInWei[index];
    require(
      booster.balanceOf(msg.sender) + _numberOfBoostersInWei <= capInWei,
      "BoosterSale: above cap"
    );

    uint256 busdPriceInWei = busdPricePerBoosterInWei[index];

    uint256 _numberOfBoosters = _numberOfBoostersInWei / 1e18;
    uint256 busdAmountInWei = _numberOfBoosters * busdPriceInWei;

    busd.safeTransferFrom(msg.sender, boosterOwner, busdAmountInWei);
    booster.safeTransferFrom(boosterOwner, msg.sender, _numberOfBoostersInWei);
  }

  function addToWhitelist(address[] memory _buyers)
    public
    onlyOwner
    whenNotPaused
  {
    for (uint256 i = 0; i < _buyers.length; i++) {
      isWhitelisted[_buyers[i]] = true;
    }
  }

  function removeFromWhitelist(address[] memory _buyers)
    public
    onlyOwner
    whenNotPaused
  {
    for (uint256 i = 0; i < _buyers.length; i++) {
      isWhitelisted[_buyers[i]] = false;
    }
  }
}
