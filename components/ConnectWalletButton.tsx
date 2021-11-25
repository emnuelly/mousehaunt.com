import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { StoreContext } from "../contexts/StoreContext";
import { changeNetwork } from "../utils/blockchain";
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

const TESTERS: string[] = [
  "0x343BD4e802BaE35F89e043299B82067aab38dfd3",
  "0x087B58029f7251E7054153Bc8775e14A68490286",
  "0x7CDf072cb005fF3008E19E4F22f04c961023CF8c",
  "0x09dcF02C01849231Bb22CC76233c31f35Db6fAac",
  "0xA68933d4Da2C70e7dd1cE610Adcd7930055d7C48",
  "0x43F8475b378BEa3aB4A952dDC4503D5dd9F15C79",
  "0x8b6CC293ABf2FB7011bc2B599fFAc06C01261f8A",
];

export const ConnectWalletButton = () => {
  const {
    account,
    userInfoDetailed,
    getAccount,
    web3,
    setAccount,
    network,
    setNetwork,
  } = useContext(StoreContext);
  const [isTester, setIsTester] = useState(false);

  const onClick = async () => {
    if (account) {
      await (web3?.eth?.currentProvider as any).disconnect();
      setAccount("");
    } else {
      setAccount(await getAccount());
    }
  };

  const toggleNetwork = () => {
    const newNetwork = network === "bsc" ? "bscTestnet" : "bsc";
    changeNetwork(newNetwork);
    setNetwork(newNetwork);
  };

  useEffect(() => {
    setIsTester(TESTERS.includes(account));
  }, [account]);

  const buttonText = account ? "DISCONNECT" : "CONNECT WALLET";
  const whitelistedText =
    account && userInfoDetailed
      ? userInfoDetailed?.whitelisted
        ? "WHITELISTED (#2)"
        : "NOT WHITELISTED (#2)"
      : "";
  const mhtPurchasedText =
    account && userInfoDetailed?.totalTokens
      ? userInfoDetailed?.totalTokens + " $MHT PURCHASED"
      : "";
  const busdOnWalletText =
    account && userInfoDetailed?.busdOnWallet
      ? userInfoDetailed?.busdOnWallet + " BUSD"
      : "";

  return (
    <Container>
      <WalletInfo>
        <pre>{account}</pre>
        <div>
          {whitelistedText &&
            [whitelistedText, mhtPurchasedText, busdOnWalletText]
              .filter((x) => x)
              .map((text) => <span key={text}>{text}</span>)
              .reduce(
                (prev, curr, index) =>
                  [prev, <span key={index}>|</span>, curr] as any
              )}
        </div>
      </WalletInfo>
      <Button onClick={onClick}>{buttonText}</Button>
      {isTester ? (
        <Button onClick={toggleNetwork} style={{ height: "96px" }}>
          <span>CHANGE NETWORK</span>
          <br />
          <small>CURRENT: {network}</small>
        </Button>
      ) : null}
    </Container>
  );
};
