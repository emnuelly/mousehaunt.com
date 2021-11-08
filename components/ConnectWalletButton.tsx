import { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Container = styled.div`
  margin-left: auto;
  display: flex;
  button {
    align-self: center;
  }
`;

export const ConnectWalletButton = () => {
  const [account, setAccount] = useState("");

  const onClick = async () => {
    if (account) {
      setAccount("");
    } else {
      const accounts = (await window.ethereum?.request({
        method: "eth_requestAccounts",
      })) as string[];
      setAccount(accounts[0]);
    }
  };

  const text = account ? "DISCONNECT" : "CONNECT TO WALLET";

  return (
    <Container>
      <pre>{account}</pre>
      <Button onClick={onClick}>{text}</Button>
    </Container>
  );
};
