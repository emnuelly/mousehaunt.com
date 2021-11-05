// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "./interfaces/IBooster.sol";
import "./interfaces/IMouseHeroNFT.sol";
import "./Random.sol";

/// @custom:security-contact security@mousehaunt.com
contract BoosterUnpack is Pausable, Ownable, Random {
  using SafeERC20 for IBooster;
  using Strings for uint256;

  uint256 public constant RARITY_INDEX_LEGENDARY = 0;
  uint256 public constant RARITY_INDEX_EPIC = 1;

  uint256 public constant PERCENTAGE_THOUSAND_EPIC = 95000;

  IBooster[] public boosters;
  IMouseHeroNFT public nft;

  constructor(address owner) {
    transferOwnership(owner);
  }

  function configure(IBooster[] memory _boosters, IMouseHeroNFT _nft)
    public
    onlyOwner
  {
    delete boosters;
    for (uint256 i = 0; i < _boosters.length; i++) {
      boosters.push(_boosters[i]);
    }
    nft = _nft;
  }

  function _getNFTRarityFromBooster(IBooster booster)
    internal
    returns (uint256 _index)
  {
    int256 index = -1;
    for (uint256 i = 0; i < boosters.length; i++) {
      if (boosters[i] == booster) {
        index = int256(i);
      }
    }
    require(index != -1, "Invalid booster");

    uint256 uindex = uint256(index);

    if (
      uindex == RARITY_INDEX_EPIC && getRandom() >= PERCENTAGE_THOUSAND_EPIC
    ) {
      return RARITY_INDEX_LEGENDARY;
    } else {
      return uindex;
    }
  }

  function unpack(IBooster booster, uint256 amount) public whenNotPaused {
    require(booster.balanceOf(msg.sender) >= 1e18, "Not enough boosters");
    require(amount % 1e18 == 0, "Invalid amount");

    booster.burnFrom(msg.sender, amount);

    uint256 numberOfNFTs = amount / 1e18;
    for (uint256 i = 0; i < numberOfNFTs; i++) {
      uint256 index = _getNFTRarityFromBooster(booster);
      nft.safeMint(msg.sender, index.toString());
    }
  }

  function pause() public onlyOwner {
    _pause();
  }

  function unpause() public onlyOwner {
    _unpause();
  }
}
