import { ethers } from "ethers";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useContracts } from "../hooks/useContracts";
import { Button } from "./Button";

const Container = styled.div`
  margin-left: auto;
  display: flex;
  button {
    align-self: center;
  }
`;

const WalletInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  pre {
    margin: 5px 0px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    span {
      margin-left: 10px;
    }
  }
`;

export const ConnectWalletButton = () => {
  const [account, setAccount] = useState("");
  const [whitelisted, setWhitelisted] = useState(false);
  const [mhtAmount, setMhtAmount] = useState("");
  const contracts = useContracts();

  const getAccount = async () => {
    const accounts = await window.ethereum?.request({
      method: "eth_requestAccounts",
    });
    return accounts ? (accounts as string[])[0] : "";
  };

  const onClick = async () => {
    if (account) {
      setAccount("");
    } else {
      setAccount(await getAccount());
    }
  };

  useEffect(() => {
    window.ethereum?.on("accountsChanged", function (accounts) {
      setAccount((accounts as string[])[0]);
    });
  }, []);

  useEffect(() => {
    if (account) {
      (async () => {
        const isWhitelisted = await contracts.whitelistSale.isWhitelisted(
          account
        );
        setWhitelisted(isWhitelisted);
        const [totalAmountInWei] =
          await contracts.whitelistSale.addressToUserInfo(account);
        const totalAmount = ethers.utils.formatEther(totalAmountInWei);
        setMhtAmount(totalAmount);
      })();
    }
  }, [account, contracts]);

  const text = account ? "DISCONNECT" : "CONNECT TO WALLET";

  return (
    <Container>
      <WalletInfo>
        <pre>{account}</pre>
        <div>
          <span>
            {!account ? "" : whitelisted ? "WHITELISTED" : "NOT WHITELISTED"}
          </span>
          <span>
            {account && whitelisted ? "| " + mhtAmount + " MHT PURCHASED" : ""}
          </span>
        </div>
      </WalletInfo>
      <Button onClick={onClick}>{text}</Button>
    </Container>
  );
};
