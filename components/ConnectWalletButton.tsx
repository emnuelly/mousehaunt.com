import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { StoreContext } from "../contexts/StoreContext";
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
  const { account, userInfo, getAccount, setAccount } =
    useContext(StoreContext);

  const onClick = async () => {
    if (account) {
      setAccount("");
    } else {
      setAccount(await getAccount());
    }
  };

  useEffect(() => {
    if (account) {
      (async () => {
        setAccount(await getAccount());
      })();
    }
  }, [account, setAccount, getAccount]);

  const buttonText = account ? "DISCONNECT" : "CONNECT TO WALLET";
  const whitelistedText =
    account && userInfo
      ? userInfo?.whitelisted
        ? "WHITELISTED"
        : "NOT WHITELISTED"
      : "";
  const mhtPurchasedText =
    account && userInfo?.whitelisted
      ? userInfo?.totalTokens + " MHT PURCHASED"
      : "";

  return (
    <Container>
      <WalletInfo>
        <pre>{account}</pre>
        <div>
          <span>{whitelistedText}</span>
          {mhtPurchasedText ? <span>|</span> : null}
          <span>{mhtPurchasedText}</span>
        </div>
      </WalletInfo>
      <Button onClick={onClick}>{buttonText}</Button>
    </Container>
  );
};