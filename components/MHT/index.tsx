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

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

const MHT: NextPage = () => {
  const tokenDecimals = 18;

  const onClick = async () => {
    const { ethereum } = window;
    const contracts = [
      config.bsc.MouseHauntToken,
      config.bsc.BMHTL,
      config.bsc.BMHTE,
    ];
    for (const contract of contracts) {
      await ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: contract.address,
            symbol: contract.symbol,
            image: contract.image,
            decimals: tokenDecimals,
          },
        },
      });
    }
  };
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
          <Button onClick={onClick}>ADD TO WALLET</Button>
        </Right>
      </Container>
      <Ellipse />
    </>
  );
};

export default MHT;
