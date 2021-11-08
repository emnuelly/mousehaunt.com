import type { NextPage } from "next";
import { MetaMaskInpageProvider } from "@metamask/providers";
import config, { Network } from "../../utils/config";

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
import { addToWallet, getNetwork } from "../../utils/blockchain";
import { useRouter } from "next/router";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

const MHT: NextPage = () => {
  const router = useRouter();
  const network = getNetwork(router);
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
              href={`https://bscscan.com/token/${config[network].MouseHauntToken.address}`}
              target="_blank"
              rel="noreferrer"
            >
              earning MHT!
            </a>
          </Subtitle>
          <Button onClick={() => addToWallet(network)}>ADD TO WALLET</Button>
        </Right>
      </Container>
      <Ellipse />
    </>
  );
};

export default MHT;
