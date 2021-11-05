#!/usr/bin/env bash

cat << EOF > node_modules/BokkyPooBahsDateTimeLibrary/package.json
{
  "name": "BokkyPooBahsDateTimeLibrary",
  "version": "1.0.1",
  "description": "A gas-efficient Solidity date and time library.",
  "files": [
    "contracts/BokkyPooBahsDateTimeLibrary.sol"
  ],
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/bokkypoobah/BokkyPooBahsDateTimeLibrary.git"
  },
  "keywords": [
    "solidity",
    "datetime",
    "library",
    "ethereum"
  ],
  "author": "BokkyPooBah / Bok Consulting Pty Ltd",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/bokkypoobah/BokkyPooBahsDateTimeLibrary/issues"
  },
  "homepage": "https://github.com/bokkypoobah/BokkyPooBahsDateTimeLibrary#readme",
  "devDependencies": {
    "prettier": "^2.2.1",
    "prettier-plugin-solidity": "^1.0.0-beta.5"
  }
}
EOF