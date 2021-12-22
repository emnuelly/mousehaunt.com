import { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../contexts/StoreContext";
import { truncate } from "../../utils/blockchain";
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
  const { account, userInfoDetailed, getAccount, web3Modal, setAccount } =
    useContext(StoreContext);

  const onClick = async () => {
    if (account) {
      web3Modal?.clearCachedProvider();
      setAccount("");
    } else {
      setAccount(await getAccount());
    }
  };

  const buttonText = account ? "DISCONNECT" : "CONNECT WALLET";
  const whitelistedText =
    !account || !userInfoDetailed?.allowance.genesis
      ? ""
      : Number(userInfoDetailed?.allowance.genesis) > 0
      ? " WHITELISTED (GENESIS)"
      : " NOT WHITELISTED OR ABOVE CAP (GENESIS)";
  const mhtPurchasedText =
    account && userInfoDetailed?.totalTokens
      ? truncate(userInfoDetailed?.totalTokens) + " $MHT PURCHASED ON PRESALE"
      : "";
  const mhtOnWalletText =
    account && userInfoDetailed?.mhtOnWallet
      ? truncate(userInfoDetailed?.mhtOnWallet) + " $MHT ON WALLET"
      : "";

  const hasText = whitelistedText || mhtPurchasedText || mhtOnWalletText;

  return (
    <Container>
      <WalletInfo>
        <pre>{account}</pre>
        <div>
          {hasText
            ? [
                whitelistedText,
                mhtPurchasedText,
                mhtOnWalletText,
              ]
                .filter((x) => x)
                .map((text) => <span key={text}>{text}</span>)
                .reduce(
                  (prev, curr, index) =>
                    [prev, <span key={index}>|</span>, curr] as any
                )
            : null}
        </div>
      </WalletInfo>
      <Button onClick={onClick}>{buttonText}</Button>
    </Container>
  );
};
