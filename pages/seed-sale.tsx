import type { NextPage } from "next";
import Head from "next/head";

import { Container, Footer, Hero } from "../styles/SeedSale";
import Image from "next/image";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import coffins from "../public/images/Coffins.jpg";

import config from "../utils/config";
import MHTPrivateSaleJson from "../contracts/MHTPrivateSale.sol/MHTPrivateSale.json";
import { MHTPrivateSale } from "../typechain/MHTPrivateSale";
import { Button } from "../components/Button";
import CurrencyConverter from "../components/CurrencyConverter";

function countdown() {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const final = new Date(1636243199000);

  const countDown = new Date(final).getTime();

  const now = new Date().getTime();
  const distance = countDown - now;

  if (distance < 0) return;

  document.getElementById("days")!.innerText = Math.floor(
    distance / day
  ).toString();
  document.getElementById("hours")!.innerText = Math.floor(
    (distance % day) / hour
  ).toString();
  document.getElementById("minutes")!.innerText = Math.floor(
    (distance % hour) / minute
  ).toString();
  document.getElementById("seconds")!.innerText = Math.floor(
    (distance % minute) / second
  ).toString();
}

const SeedSale: NextPage = () => {
  const [contract, setContract] = useState<MHTPrivateSale>();
  const [wallet, setWallet] = useState<string>();
  const bnb = 0.0000424;
  const tokens = 100;
  const value = tokens * bnb;

  useEffect(() => {
    setInterval(() => {
      countdown();
    }, 1000);
  }, []);

  // useEffect(() => {
  //   if (typeof (window as any).ethereum !== "undefined") {
  //     const provider = new ethers.providers.Web3Provider(
  //       (window as any).ethereum
  //     );
  //     const signer = provider.getSigner(0);
  //     const contract = new ethers.Contract(
  //       config.mainnet.MHTPrivateSale.address,
  //       MHTPrivateSaleJson.abi,
  //       signer
  //     ) as MHTPrivateSale;
  //     signer.getAddress().then(setWallet);
  //     setContract(contract);
  //   }
  // }, []);

  const onClick = () => {
    if (contract && wallet) {
      contract?.buyTokens(wallet, {
        value: ethers.utils.parseEther(value.toString()),
      });
    }
  };

  return (
    <Container>
      <Head>
        <title>Mouse Haunt — Seed Sale</title>
      </Head>
      <Hero id="hero" className="first">
        <div className="top">
          <div className="mouse">MOUSE</div>
          <div className="haunt">HAUNT</div>
        </div>
        <div className="bottom">
          <CurrencyConverter rate={config.mainnet.MHTSeedSale.BUSDtoMHT} />
        </div>
      </Hero>
      <Image
        layout="fill"
        alt="Coffins"
        src={coffins}
        objectFit="cover"
        placeholder="blur"
        priority
      />
      <Footer>
        <div>
          <span>SEED SALE ENDS IN</span>
          <ul>
            <li>
              <span id="days"></span>DAYS
            </li>
            <li>
              <span id="hours"></span>HOURS
            </li>
            <li>
              <span id="minutes"></span>MINUTES
            </li>
            <li>
              <span id="seconds"></span>SECONDS
            </li>
          </ul>
        </div>
      </Footer>
    </Container>
  );
};

export default SeedSale;
