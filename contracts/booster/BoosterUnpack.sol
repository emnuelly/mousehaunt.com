// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "./interfaces/IBooster.sol";
import "./interfaces/IMouseHero.sol";
import "./Random.sol";

/// @custom:security-contact security@mousehaunt.com
contract BoosterUnpack is Pausable, Ownable, Random {
  using SafeERC20 for IBooster;
  using Strings for uint256;

  uint256 public constant PERCENTAGE_THOUSAND_EPIC = 99000;

  IMouseHero public nft;
  IBooster public immutable legendaryBooster;
  IBooster public immutable epicBooster;

  constructor(
    address owner,
    IMouseHero _nft,
    IBooster _legendaryBooster,
    IBooster _epicBooster
  ) {
    transferOwnership(owner);
    nft = _nft;
    legendaryBooster = _legendaryBooster;
    epicBooster = _epicBooster;
  }

  function _getRarityFromBooster(IBooster booster) internal returns (Rarity) {
    if (booster == legendaryBooster) {
      return Rarity.LEGENDARY;
    }
    // is epicBooster
    else if (getRandom() >= PERCENTAGE_THOUSAND_EPIC) {
      return Rarity.LEGENDARY;
    } else return Rarity.EPIC;
  }

  function unpack(IBooster booster, uint256 amount) public whenNotPaused {
    require(booster.balanceOf(msg.sender) >= 1e18, "Not enough boosters");
    require(amount % 1e18 == 0, "Invalid amount");
    require(
      booster == legendaryBooster || booster == epicBooster,
      "Invalid booster"
    );

    booster.burnFrom(msg.sender, amount);

    uint256 numberOfNFTs = amount / 1e18;
    for (uint256 i = 0; i < numberOfNFTs; i++) {
      Rarity rarity = _getRarityFromBooster(booster);
      nft.safeMint(msg.sender, rarity);
    }
  }

  function pause() public onlyOwner {
    _pause();
  }

  function unpause() public onlyOwner {
    _unpause();
  }
}
