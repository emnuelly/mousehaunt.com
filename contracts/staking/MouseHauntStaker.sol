// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/security/Pausable.sol";
//import "./IStaker.sol";

interface IMouseHauntStaker {
    function deposit(uint256 _pid, uint256 _amount) external;

    function withdraw(uint256 _pid, uint256 _amount) external;

    //function enterStaking(uint256 _amount) external;

    //function leaveStaking(uint256 _amount) external;

    //function pendingCake(uint256 _pid, address _user) external view returns (uint256);

    function staker(uint256 _pid, address _user) external view returns (uint256, uint256);

    //function emergencyWithdraw(uint256 _pid) external;
}

/**
* @notice Stakeable is a contract who is ment to be inherited by other contract that wants Staking capabilities
*/
contract MouseHauntStaker is Pausable {

    struct Staker {
        uint256 amountShares;
        uint256 lastTimestamp;
    }

    mapping(address => Staker) public staker;

    uint256 public totalShares;
    uint256 public lastHarvestedTime;
    address public treasury;

    //uint256 public constant BLOCK_TIME = 32; //3.2s
    uint256 public constant HASVERT_CYCLE = 24 hours;
    // The MHT available as a staking reward is defined on our Tokenomics (11,750,000 distributed in 48 months = 244791.666 per month = 8159.722 per day
    uint256 public constant MAX_HASVERT_PER_CYCLE = 8159722; //8159.722 MHT

    uint256 public performanceFee = 200; // 2%
    uint256 public depositFee = 10; // 0.1%

    event Deposit(address indexed sender, uint256 amount, uint256 shares, uint256 lastDepositedTime);
    event Withdraw(address indexed sender, uint256 amount, uint256 shares);
    event Harvest(address indexed sender, uint256 callFee);
    event Pause();
    event Unpause();

    function deposit(uint256 _amount) external whenNotPaused notContract {
        require(_amount > 0, "Nothing to deposit");

        /*
        uint256 index = stakes[msg.sender];
        uint256 timestamp = block.timestamp;

        if (index == 0) {
            index = _addStakeholder(msg.sender);
        }

        stakeholders[index].address_stakes.push(Stake(msg.sender, _amount, timestamp, 0));
        emit Deposit(msg.sender, _amount, index, timestamp);
        */

        uint256 pool = balanceOf();
        /*
        token.safeTransferFrom(msg.sender, address(this), _amount);
        uint256 currentShares = 0;
        if (totalShares != 0) {
            currentShares = (_amount.mul(totalShares)).div(pool);
        } else {
            currentShares = _amount;
        }
        UserInfo storage user = userInfo[msg.sender];

        user.shares = user.shares.add(currentShares);
        user.lastDepositedTime = block.timestamp;

        totalShares = totalShares.add(currentShares);

        user.cakeAtLastUserAction = user.shares.mul(balanceOf()).div(totalShares);
        user.lastUserActionTime = block.timestamp;

        _earn();
        */
        emit Deposit(msg.sender, _amount, currentShares, block.timestamp);
    }

    /**
    * @notice Withdraws from funds from the Cake Vault
     * @param _shares: Number of shares to withdraw
     */
    function withdraw(uint256 _shares) public notContract { }

    /**
     * @notice Reinvests CAKE tokens into MasterChef
     * @dev Only possible when contract not paused.
     */
    function harvest() external notContract whenNotPaused { }

    /**
 * @notice Sets treasury address
     * @dev Only callable by the contract owner.
     */
    function setTreasury(address _treasury) external onlyOwner {
        require(_treasury != address(0), "Cannot be zero address");
        treasury = _treasury;
    }

    /**
    * @notice Custom logic for how much the vault allows to be borrowed
     * @dev The contract puts 100% of the tokens to work.
     */
    function available() public view returns (uint256) {
        return token.balanceOf(address(this));
    }

    /**
    * @notice Calculates the total underlying tokens
     * @dev It includes tokens held by the contract and held in MasterChef
     */
    function balanceOf() public view returns (uint256) {
        (uint256 amount,) =  staker[address(this)].amountShares;
        return token.balanceOf(address(this)).add(amount);
    }

    /**
     * @notice Checks if the msg.sender is a contract or a proxy
     */
    modifier notContract() {
        require(!_isContract(msg.sender), "Contract not allowed");
        require(msg.sender == tx.origin, "Proxy contract not allowed");
        _;
    }

    /**
     * @notice Checks if address is a contract
     * @dev It prevents contract from being targetted
     */
    function _isContract(address addr) internal view returns (bool) {
        uint256 size;
        assembly {
            size := extcodesize(addr)
        }
        return size > 0;
    }
}
