// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/// @custom:security-contact security@mousehaunt.com
interface IMouseHeroNFT is IERC721 {
  function safeMint(address to, string memory rarity) external;
}
