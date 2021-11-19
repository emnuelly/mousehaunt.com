import { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../contexts/StoreContext";
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

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const ConnectWalletButton = () => {
  const { account, userInfo, getAccount, web3, setAccount } =
    useContext(StoreContext);

  const onClick = async () => {
    if (account) {
      await (web3?.eth?.currentProvider as any).disconnect();
      setAccount("");
    } else {
      setAccount(await getAccount());
    }
  };

  const buttonText = account ? "DISCONNECT" : "CONNECT WALLET";
  const whitelistedText =
    account && userInfo
      ? userInfo?.whitelisted
        ? "WHITELISTED (PRIVATE SALE FORMS)"
        : "NOT WHITELISTED (PRIVATE SALE FORMS)"
      : "";
  const mhtPurchasedText =
    account && userInfo?.whitelisted
      ? userInfo?.totalTokens + " $MHT PURCHASED"
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
