// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "BokkyPooBahsDateTimeLibrary/contracts/BokkyPooBahsDateTimeLibrary.sol";

/// @custom:security-contact security@mousehaunt.com
contract MHTTokenRelease {
  using SafeERC20 for IERC20;

  uint256 public constant TOKEN_DECIMAL = 1e18;
  uint256 public constant IDO_YYYY = 2021;
  uint256 public constant IDO_MM = 12;

  uint256 public constant LAST_MONTH_INDEX = 48;

  event Claimed(uint256);

  struct AllocationType {
    uint256 totalTokens;
    uint256 unlockAtIDOPercent;
    uint256 fullLockMonths;
    uint256 vestingPeriodMonths;
  }

  struct ReleaseConfig {
    uint256 date;
    uint256 monthIndex;
  }

  struct LastClaimInfo {
    uint256 untilDate;
    uint256 nextDateIndex;
  }

  IERC20 public immutable mhtToken;

  address public immutable strategicPartnershipWallet;
  address public immutable seedWallet;
  address public immutable privateSaleWallet;
  address public immutable whitelistWallet;
  address public immutable dexLiquidityWallet;
  address public immutable teamAndAdvisorsWallet;
  address public immutable playToEarnWallet;
  address public immutable communityAndMarketingWallet;
  address public immutable reservesWallet;
  address public immutable stakingWallet;

  LastClaimInfo public lastClaim;
  ReleaseConfig[] public releaseList;

  constructor(
    IERC20 _mhtToken,
    address _strategicPartnershipWallet,
    address _seedWallet,
    address _privateSaleWallet,
    address _whitelistWallet,
    address _dexLiquidityWallet,
    address _teamAndAdvisorsWallet,
    address _playToEarnWallet,
    address _communityAndMarketingWallet,
    address _reservesWallet,
    address _stakingWallet
  ) {
    mhtToken = _mhtToken;
    strategicPartnershipWallet = _strategicPartnershipWallet;
    seedWallet = _seedWallet;
    privateSaleWallet = _privateSaleWallet;
    whitelistWallet = _whitelistWallet;
    dexLiquidityWallet = _dexLiquidityWallet;
    teamAndAdvisorsWallet = _teamAndAdvisorsWallet;
    playToEarnWallet = _playToEarnWallet;
    communityAndMarketingWallet = _communityAndMarketingWallet;
    reservesWallet = _reservesWallet;
    stakingWallet = _stakingWallet;

    uint256 idoTimestamp = BokkyPooBahsDateTimeLibrary.timestampFromDate(
      IDO_YYYY,
      IDO_MM,
      1
    );

    for (uint256 i = 0; i <= LAST_MONTH_INDEX; i++) {
      uint256 timestamp = BokkyPooBahsDateTimeLibrary.addMonths(
        idoTimestamp,
        i
      );
      uint256 date = timestampToYYYYMM(timestamp);

      releaseList.push(ReleaseConfig({date: date, monthIndex: i}));
    }
  }

  function unlockedAtIDOAmount(AllocationType memory allocation)
    public
    pure
    returns (uint256 amount)
  {
    uint256 _amount = (allocation.totalTokens * allocation.unlockAtIDOPercent) /
      100;

    return _amount;
  }

  function releaseAmount(AllocationType memory allocation, uint256 monthIndex)
    public
    pure
    returns (uint256 amount)
  {
    if (
      allocation.fullLockMonths > 0 && monthIndex <= allocation.fullLockMonths
    ) {
      return 0;
    } else if (
      monthIndex > (allocation.fullLockMonths + allocation.vestingPeriodMonths)
    ) {
      return 0;
    } else if (monthIndex == 0) {
      return unlockedAtIDOAmount(allocation);
    } else {
      // e.g. 100 distributed in 1+3 months with 20 at IDO should be 20, 26, 26, 28

      // starts at 1
      uint256 _vestingIndex = monthIndex - allocation.fullLockMonths;

      // e.g. 20
      uint256 _unlockedAtIDOAmount = unlockedAtIDOAmount(allocation);

      // e.g. 26
      uint256 _amount = (allocation.totalTokens - _unlockedAtIDOAmount) /
        allocation.vestingPeriodMonths;

      // e.g. 20, 46, 72
      uint256 _distributedTokens = _unlockedAtIDOAmount +
        _amount *
        (_vestingIndex - 1);

      // e.g. 80, 54, 28
      uint256 _remainingTokens = allocation.totalTokens - _distributedTokens;

      // e.g. false, false, true
      if (_remainingTokens < 2 * _amount) {
        _amount = _remainingTokens;
      }

      // e.g. 26, 26, 28
      return _amount;
    }
  }

  function amountWithDecimal(uint256 amount) public pure returns (uint256) {
    return amount * TOKEN_DECIMAL;
  }

  function timestampToYYYYMM(uint256 timestamp) public pure returns (uint256) {
    (uint256 year, uint256 month, ) = BokkyPooBahsDateTimeLibrary
      .timestampToDate(timestamp);
    return year * 100 + month;
  }

  function mhtTransfer(address _to, uint256 _amount) internal {
    if (_amount > 0) {
      mhtToken.safeTransfer(_to, _amount);
    }
  }

  function claim() public {
    // solhint-disable-next-line not-rely-on-time
    uint256 nowTs = block.timestamp;
    uint256 currentDate = timestampToYYYYMM(nowTs);
    uint256 startIndex = lastClaim.nextDateIndex;

    AllocationType memory strategicPartnership = AllocationType({
      totalTokens: amountWithDecimal(5000000),
      unlockAtIDOPercent: 5,
      fullLockMonths: 0,
      vestingPeriodMonths: 12
    });
    AllocationType memory seed = AllocationType({
      totalTokens: amountWithDecimal(2000000),
      unlockAtIDOPercent: 5,
      fullLockMonths: 0,
      vestingPeriodMonths: 12
    });
    AllocationType memory privateSale = AllocationType({
      totalTokens: amountWithDecimal(2500000),
      unlockAtIDOPercent: 8,
      fullLockMonths: 0,
      vestingPeriodMonths: 6
    });
    AllocationType memory whitelist = AllocationType({
      totalTokens: amountWithDecimal(3000000),
      unlockAtIDOPercent: 20,
      fullLockMonths: 0,
      vestingPeriodMonths: 3
    });
    AllocationType memory dexLiquidity = AllocationType({
      totalTokens: amountWithDecimal(2250000),
      unlockAtIDOPercent: 100,
      fullLockMonths: 0,
      vestingPeriodMonths: 0
    });
    AllocationType memory teamAndAdvisors = AllocationType({
      totalTokens: amountWithDecimal(16250000),
      unlockAtIDOPercent: 0,
      fullLockMonths: 8,
      vestingPeriodMonths: 12
    });
    AllocationType memory playToEarn = AllocationType({
      totalTokens: amountWithDecimal(37000000),
      unlockAtIDOPercent: 0,
      fullLockMonths: 0,
      vestingPeriodMonths: 48
    });
    AllocationType memory communityAndMarketing = AllocationType({
      totalTokens: amountWithDecimal(15000000),
      unlockAtIDOPercent: 0,
      fullLockMonths: 0,
      vestingPeriodMonths: 36
    });
    AllocationType memory reserves = AllocationType({
      totalTokens: amountWithDecimal(5000000),
      unlockAtIDOPercent: 0,
      fullLockMonths: 12,
      vestingPeriodMonths: 36
    });
    AllocationType memory staking = AllocationType({
      totalTokens: amountWithDecimal(12000000),
      unlockAtIDOPercent: 0,
      fullLockMonths: 0,
      vestingPeriodMonths: 48
    });

    for (uint256 i = startIndex; i < releaseList.length; i++) {
      ReleaseConfig memory _config = releaseList[i];
      if (_config.date <= currentDate) {
        uint256 strategicPartnershipAmount = releaseAmount(
          strategicPartnership,
          i
        );
        uint256 seedAmount = releaseAmount(seed, i);
        uint256 privateSaleAmount = releaseAmount(privateSale, i);
        uint256 whitelistAmount = releaseAmount(whitelist, i);
        uint256 dexLiquidityAmount = releaseAmount(dexLiquidity, i);
        uint256 teamAndAdvisorsAmount = releaseAmount(teamAndAdvisors, i);
        uint256 playToEarnAmount = releaseAmount(playToEarn, i);
        uint256 communityAndMarketingAmount = releaseAmount(
          communityAndMarketing,
          i
        );
        uint256 reservesAmount = releaseAmount(reserves, i);
        uint256 stakingAmount = releaseAmount(staking, i);

        mhtTransfer(strategicPartnershipWallet, strategicPartnershipAmount);
        mhtTransfer(seedWallet, seedAmount);
        mhtTransfer(privateSaleWallet, privateSaleAmount);
        mhtTransfer(whitelistWallet, whitelistAmount);
        mhtTransfer(dexLiquidityWallet, dexLiquidityAmount);
        mhtTransfer(teamAndAdvisorsWallet, teamAndAdvisorsAmount);
        mhtTransfer(playToEarnWallet, playToEarnAmount);
        mhtTransfer(communityAndMarketingWallet, communityAndMarketingAmount);
        mhtTransfer(reservesWallet, reservesAmount);
        mhtTransfer(stakingWallet, stakingAmount);

        lastClaim.untilDate = _config.date;
        lastClaim.nextDateIndex = i + 1;

        emit Claimed(_config.date);
      } else {
        break;
      }
    }
  }
}
