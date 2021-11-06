// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/// @custom:security-contact security@mousehaunt.com
contract SeedSale is Pausable, Ownable {
  using SafeMath for uint256;
  using SafeERC20 for IERC20;

  uint256 public constant UNLOCKED_BEFORE_IDO_PERCENT = 20;

  event IDOUnlocked();

  address public mhtOwner;
  IERC20 public mht;
  IERC20 public busd;
  uint256 public mhtToBusd;
  mapping(address => uint256) public whitelistAmount;
  mapping(address => uint256) public addressToMHTUnlockedAtIDOAmount;

  bool private _idoLocked;

  constructor(
    address _mhtOwner,
    IERC20 _mht,
    IERC20 _busd,
    uint256 _mhtToBusd
  ) {
    transferOwnership(_mhtOwner);

    mhtOwner = _mhtOwner;
    mht = _mht;
    busd = _busd;
    mhtToBusd = _mhtToBusd;

    _idoLocked = true;
  }

  function pause() public onlyOwner {
    _pause();
  }

  function unpause() public onlyOwner {
    _unpause();
  }

  function buy(uint256 _mhtAmountTotal) public whenNotPaused {
    require(
      _mhtAmountTotal <= whitelistAmount[msg.sender],
      "SeedSale: amount > whitelisted"
    );
    require(_mhtAmountTotal >= 1e18, "SeedSale: minimum 1 MHT");

    uint256 busdAmount = _mhtAmountTotal.mul(mhtToBusd).div(1e18);
    uint256 mhtAmount = _mhtAmountTotal.mul(UNLOCKED_BEFORE_IDO_PERCENT).div(
      100
    );

    uint256 mhtUnlockedAtIDOAmount = _mhtAmountTotal.sub(mhtAmount);
    addressToMHTUnlockedAtIDOAmount[msg.sender] = mhtUnlockedAtIDOAmount;

    busd.safeTransferFrom(msg.sender, mhtOwner, busdAmount);
    mht.safeTransferFrom(mhtOwner, msg.sender, mhtAmount);
  }

  function withdraw() public whenNotPaused {
    require(!_idoLocked, "SeedSale: locked before IDO");

    uint256 amount = addressToMHTUnlockedAtIDOAmount[msg.sender];
    addressToMHTUnlockedAtIDOAmount[msg.sender] = 0;
    mht.safeTransferFrom(mhtOwner, address(msg.sender), amount);
  }

  function idoUnlock() public onlyOwner whenNotPaused {
    _idoLocked = false;
    emit IDOUnlocked();
  }

  function updateMHTToBUSD(uint256 _newMHTToBUSD) public onlyOwner {
    require(_newMHTToBUSD > 0, "SeedSale: invalid MHT to BUSD");
    mhtToBusd = _newMHTToBUSD;
  }

  function addToWhitelist(address[] memory _buyers, uint256 _amount)
    public
    onlyOwner
    whenNotPaused
  {
    for (uint256 i = 0; i < _buyers.length; i++) {
      whitelistAmount[_buyers[i]] = _amount;
    }
  }

  function removeFromWhitelist(address[] memory _buyers)
    public
    onlyOwner
    whenNotPaused
  {
    for (uint256 i = 0; i < _buyers.length; i++) {
      whitelistAmount[_buyers[i]] = 0;
    }
  }
}
