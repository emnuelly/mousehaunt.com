import type { NextPage } from "next";
import { MetaMaskInpageProvider } from "@metamask/providers";
import config from "../../utils/config";

import {
  Container,
  Left,
  Right,
  Title,
  Subtitle,
  Chest,
  Ellipse,
} from "./styles";
import Image from "next/image";
import { Button } from "../Button";
import mht from "../../public/images/MHT.png";
import { addToWallet } from "../../utils/blockchain";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

const MHT: NextPage = () => {
  return (
    <>
      <Container id="Token">
        <Left>
          <Chest>
            <Image
              src={mht}
              width="540px"
              height="473.5px"
              alt="MHT"
              placeholder="blur"
            />
          </Chest>
        </Left>
        <Right>
          <Title>HAVE FUN AND EARN!</Title>
          <Subtitle>
            Tired of playing boring NFT games just to make a couple bucks?
            <br />
            Come to Mouse Haunt now, showcase your skills and have fun{" "}
            <a
              href={`https://bscscan.com/token/${config.bsc.MouseHauntToken.address}`}
              target="_blank"
              rel="noreferrer"
            >
              earning MHT!
            </a>
          </Subtitle>
          <Button onClick={addToWallet}>ADD TO WALLET</Button>
        </Right>
      </Container>
      <Ellipse />
    </>
  );
};

export default MHT;
