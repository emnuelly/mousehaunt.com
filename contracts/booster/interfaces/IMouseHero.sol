// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "../../nft/Rarity.sol";

interface IMouseHero is IERC721 {
  function safeMint(address to, Rarity rarity) external;
}
