import React, { useEffect } from "react";
import type { NextPage } from "next";
import {
  Container,
  Content,
  StoreContainer,
  StorePageSub,
  StoreTitle,
  CountdownContainer,
} from "./styles";
import Cards from "../Cards";
import Header from "../Header";
import Logo from "../Logo";
import Sections from "../Sections";
import { ConnectWalletButton } from "../ConnectWalletButton";

const sections = [
  { to: "/store", title: "Store" },
  { to: "/store/inventory", title: "Inventory" },
];

function countdown() {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const final = new Date("2021-11-14T23:59:59.000Z");

  const countDown = new Date(final).getTime();

  const now = new Date().getTime();
  const distance = countDown - now;

  if (distance < 0) {
    document.getElementById("ends")!.innerText = "PRIVATE SALE ENDED";
    document.getElementById("ended-ul")!.style.display = "none";
    return;
  }

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

const Countdown = () => (
  <CountdownContainer>
    <span id="ends">PRIVATE SALE ENDS IN</span>
    <ul id="ended-ul">
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
  </CountdownContainer>
);

const StoreHome: NextPage = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      countdown();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Content>
        <StoreContainer>
          <Header>
            <Logo />
            <Sections sections={sections} />
            <ConnectWalletButton />
          </Header>
          <StoreTitle>SHOP</StoreTitle>
          <StorePageSub>
            Welcome to the Mouse Haunt Shop!
            <br />
            Here you will find the latest goods on this cheesy universe!
          </StorePageSub>
          <Countdown />
          <Cards />
        </StoreContainer>
      </Content>
    </Container>
  );
};

export default StoreHome;
