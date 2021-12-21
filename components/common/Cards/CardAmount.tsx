import { Formik, Field, Form } from "formik";
import Image from "next/image";

import React, { useState, useContext } from "react";
import { ethers } from "ethers";
import increment from "../../../public/images/other/increment.png";
import decrement from "../../../public/images/other/decrement.png";
import Loading from "../../../assets/svg/loading.svg";

import {
  FormMainSection,
  ContentForm,
  ButtonFormat,
  FormIncremental,
} from "./stylesForm";
import config, { Network } from "../../../utils/config";
import waitFor from "../../../utils/waitFor";
import { isTransactionMined, NETWORK_TIMEOUT } from "../../../utils/blockchain";
import { StoreContext } from "../../../contexts/StoreContext";
import { useRouter } from "next/router";
import { Button } from "../Button";
import { LoadingContainer } from "./styles";

function isNumeric(str: string): boolean {
  if (typeof str != "string") return false;
  return !isNaN(str as unknown as number) && !isNaN(parseFloat(str));
}

function boosterAllowance(boosterAmount: number, network: Network) {
  return ethers.utils
    .parseEther(
      config[network].BoosterSale.PrivateSale3.BMHTR.busdPrice.toString()
    )
    .mul(boosterAmount);
}

enum BUY_STEP {
  APPROVE,
  BUY,
  WAIT,
}

const CardAmount: React.FC = () => {
  const [boosterAmount, setBoosterAmount] = useState(1);
  const [buyStep, setBuyStep] = useState<BUY_STEP>(BUY_STEP.APPROVE);
  const router = useRouter();
  const { account, refresh, setRefresh, contracts, provider, network } =
    useContext(StoreContext);

  const sale = config[network].WhitelistSale.PreSales.find(
    (sale) => sale.whitelisted === account
  );
  const allowance = Math.random() < 0.5 ? "1" : "0";

  const MHT_TO_BUSD = Number(sale?.MHTtoBUSD);

  const maxBusdAmount = Number(sale?.amount) * MHT_TO_BUSD;

  const approveBooster = async () => {
    if (provider && contracts) {
      try {
        setBuyStep(BUY_STEP.WAIT);
        const ethersProvider = new ethers.providers.Web3Provider(
          provider as any
        );
        const approve = await contracts.busd.approve(
          config[network].BoosterSale.PrivateSale3.address,
          boosterAllowance(boosterAmount, network)
        );
        await waitFor(
          () => isTransactionMined(ethersProvider, approve.hash),
          NETWORK_TIMEOUT
        );
        setBuyStep(BUY_STEP.BUY);
      } catch (err: any) {
        const message = err.data ? err.data.message : err.message;
        alert(message);
        setBuyStep(BUY_STEP.APPROVE);
      }
    }
  };

  const buyBooster = async () => {
    if (provider && contracts) {
      try {
        setBuyStep(BUY_STEP.WAIT);
        const ethersProvider = new ethers.providers.Web3Provider(
          provider as any
        );
        const booster = config[network].BMHTR.address;

        const buy = await contracts.boosterSale3.buy(
          booster,
          boosterAmount.toString()
        );
        const tx = await waitFor(
          () => isTransactionMined(ethersProvider, buy?.hash),
          NETWORK_TIMEOUT
        );
        setRefresh(!refresh);
        router.push({
          pathname: "/store/success",
          query: {
            type: `GENESIS BOOSTER${boosterAmount === 1 ? "" : "S"}`,
            amount: boosterAmount,
            tx,
          },
        });
      } catch (err: any) {
        const message = err.data ? err.data.message : err.message;
        alert(message);
        setBuyStep(BUY_STEP.APPROVE);
      }
    }
  };

  const displayIncrementalButtons = () => {
    return (
      <>
        <FormIncremental>
          <label>Amount of boosters</label> <br />
          <span
            style={{
              margin: "5px",
              position: "relative",
              top: "15%",
              left: "-1%",
            }}
            onClick={() => {
              if (boosterAmount > 1) setBoosterAmount(boosterAmount - 1);
            }}
          >
            <Image
              alt="decrement"
              src={decrement}
              width={"30px"}
              height={"30px"}
            ></Image>
          </span>
          <Field id="amountBUSD" name="amountBUSD" value={boosterAmount} />{" "}
          <span
            style={{
              margin: "5px",
              position: "relative",
              top: "15%",
            }}
            onClick={() => {
              const amountMax = Number(
                config[network].BoosterSale.PrivateSale3.BMHTR.cap
              );
              if (boosterAmount >= 1 && boosterAmount < amountMax) {
                setBoosterAmount(boosterAmount + 1);
              }
              return;
            }}
          >
            <Image
              alt="increment"
              src={increment}
              width={"30px"}
              height={"30px"}
            ></Image>
          </span>
        </FormIncremental>
      </>
    );
  };

  return (
    <>
      {
        <Formik
          onSubmit={() => undefined}
          initialValues={{ amount: 1, amountMHT: 1 }}
        >
          <ContentForm>
            <Form>
              <FormMainSection>{displayIncrementalButtons()}</FormMainSection>
              <ButtonFormat>
                <Button
                  disabled={buyStep !== BUY_STEP.APPROVE || allowance === "0"}
                  onClick={approveBooster}
                >
                  APPROVE MHT
                </Button>
                <Button
                  disabled={buyStep !== BUY_STEP.BUY || allowance === "0"}
                  onClick={buyBooster}
                >
                  BUY
                </Button>
              </ButtonFormat>
              {buyStep === BUY_STEP.WAIT && (
                <LoadingContainer>
                  <Loading />
                </LoadingContainer>
              )}
            </Form>
          </ContentForm>
        </Formik>
      }
    </>
  );
};

export default CardAmount;
