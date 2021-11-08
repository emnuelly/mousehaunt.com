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
} from "./styles";
import Header from "../Header";
import Logo from "../Logo";
import Sections from "../Sections";
import { ConnectWalletButton } from "../ConnectWalletButton";
import Footer from "../Footer";
import { useRouter } from "next/router";
import Image from "next/image";

import coffin from "../../public/images/coffin-store.png";
import mht from "../../public/images/MHT.png";
import { addToWallet } from "../../utils/blockchain";
import { Button } from "../Button";
import { StoreContext, UserInfoDetailed } from "../../contexts/StoreContext";
import { ethers } from "ethers";

const sections = [
  {
    title: "Store",
    to: "/store",
  },
  {
    title: "Inventory",
    to: "/inventory",
  },
];

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
      <span>IGO (TBD)</span>
    </div>
  </StoreSuccessDescription>
);

const StoreSuccess: NextPage = () => {
  const router = useRouter();
  const image = router.query.type === "MHT" ? mht : coffin;
  const { account, setAccount, getAccount, userInfo } =
    useContext(StoreContext);

  useEffect(() => {
    async () => {
      setAccount(await getAccount());
    };
  }, [setAccount, getAccount]);

  const onClick = async () => {
    await addToWallet();
    router.push("/inventory");
  };

  return (
    <Container>
      <Content>
        <StoreSuccessContainer>
          <Header>
            <Logo />
            <Sections sections={sections} />
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
