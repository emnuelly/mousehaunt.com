import React, { useContext, useEffect } from "react";
import type { NextPage } from "next";
import {
  Container,
  Content,
  StoreSuccessBody,
  StoreSuccessContainer,
  SuccessCard,
  SuccessCardImage,
  StoreSuccessDescription,
} from "./styles/styles";
import Header from "../common/Header";
import Logo from "../common/Logo";
import Sections from "../common/Sections";
import { ConnectWalletButton } from "../common/ConnectWalletButton";
import Footer from "../common/Footer";
import { useRouter } from "next/router";
import Image from "next/image";

import epic from "../../public/images/other/epic.png";
import rare from "../../public/images/other/rare.png";
import mht from "../../public/images/other/MHT.png";
import { addToWallet } from "../../utils/blockchain";
import { Button } from "../common/Button";
import { StoreContext, UserInfoDetailed } from "../../contexts/StoreContext";

const DescriptionMHT = (props: {
  userInfo?: UserInfoDetailed;
  account: string;
}) => (
  <StoreSuccessDescription>
    <div>
      <span>Your address</span>
      <span>{props.account}</span>
    </div>
    <div>
      <span>$MHT Total Amount</span>
      <span>{props.userInfo?.totalTokens}</span>
    </div>
    <div>
      <span>Claimed</span>
      <span>{props.userInfo?.claimedTokens}</span>
    </div>
    <div>
      <span>Next claim</span>
      <span>IGO (December 21th)</span>
    </div>
  </StoreSuccessDescription>
);

const StoreSuccess: NextPage = () => {
  const router = useRouter();
  const image =
    router.query.type === "MHT"
      ? mht
      : router.query.type?.includes("RARE")
      ? rare
      : epic;
  const tx = router.query.tx;
  const {
    account,
    setAccount,
    getAccount,
    userInfoDetailed: userInfo,
    network,
  } = useContext(StoreContext);

  useEffect(() => {
    async () => {
      setAccount(await getAccount());
    };
  }, [setAccount, getAccount]);

  const onClick = async () => {
    await addToWallet(network);
    router.push("/store/inventory");
  };

  return (
    <Container>
      <Content>
        <StoreSuccessContainer>
          <Header>
            <Logo />
            <Sections />
            <ConnectWalletButton />
          </Header>
          <StoreSuccessBody>
            <h1>
              PURCHASE <b>SUCCESSFUL</b>
            </h1>
            <SuccessCard>
              <SuccessCardImage>
                <Image
                  src={image}
                  width="250px"
                  height="300px "
                  alt="page-items"
                />
              </SuccessCardImage>
              <h2>
                YOU BOUGHT <b>{router.query.amount}</b> {router.query.type}
              </h2>
              {router.query.type === "MHT" ? (
                <DescriptionMHT userInfo={userInfo} account={account} />
              ) : null}
              {tx ? (
                <a
                  href={`https://${
                    network === "bsc" ? "" : "testnet."
                  }bscscan.com/tx/${tx}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>View on bscscan</b>
                </a>
              ) : null}
              <br />
              <Button onClick={onClick}>ADD TO WALLET</Button>
            </SuccessCard>
          </StoreSuccessBody>
          <Footer />
        </StoreSuccessContainer>
      </Content>
    </Container>
  );
};

export default StoreSuccess;
