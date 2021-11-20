import { Formik, Field, Form } from "formik";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";

import React, { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import increment from "../../public/images/increment.png";
import decrement from "../../public/images/decrement.png";

import {
  FormDisplay,
  FormMainSection,
  ContentForm,
  IconStyle,
  ButtonFormat,
  FormIncremental,
  Warning,
} from "./stylesForm";
import config from "../../utils/config";
import waitFor from "../../utils/waitFor";
import { isTransactionMined } from "../../utils/blockchain";
import { StoreContext } from "../../contexts/StoreContext";
import { useRouter } from "next/router";
import { Button } from "../Button";

interface Props {
  index: number;
}

function isNumeric(str: string): boolean {
  if (typeof str != "string") return false;
  return !isNaN(str as unknown as number) && !isNaN(parseFloat(str));
}

const NETWORK_TIMEOUT = 120e3;

const CardAmount: React.FC<Props> = ({ index }: Props) => {
  const [boosterAmount, setBoosterAmount] = useState(1);
  const [buying, setBuying] = useState(false);
  const router = useRouter();
  const { refresh, userInfo, setRefresh, contracts, provider, sale, network } =
    useContext(StoreContext);

  console.log(userInfo);

  const MHT_TO_BUSD = Number(config[network].WhitelistSale[sale].MHTtoBUSD);

  const minBusdAmount =
    Number(config[network].WhitelistSale[sale].minMhtAmount) *
    Number(config[network].WhitelistSale[sale].MHTtoBUSD);
  const maxBusdAmount =
    Number(config[network].WhitelistSale[sale].maxMhtAmount) *
    Number(config[network].WhitelistSale[sale].MHTtoBUSD);

  const [busdAmount, setBusdAmount] = useState(minBusdAmount.toString());
  const [mhtAmount, setMhtAmount] = useState(
    config[network].WhitelistSale[sale].minMhtAmount
  );
  const [exceededAmount, setExceededAmount] = useState(false);

  useEffect(() => {
    if (
      Number(busdAmount) < minBusdAmount ||
      Number(busdAmount) > maxBusdAmount
    ) {
      setExceededAmount(true);
    } else {
      setExceededAmount(false);
    }
  }, [busdAmount, mhtAmount, minBusdAmount, maxBusdAmount]);

  const onChange = (event: any) => {
    const { value, id } = event.target;
    if (!value) {
      setBusdAmount("");
      setMhtAmount("");
    } else if (!isNumeric(value)) {
      return;
    } else {
      if (id === "amount") {
        setBusdAmount(Number(value).toString());
        setMhtAmount((Number(value) / MHT_TO_BUSD).toFixed(2).toString());
      } else {
        setBusdAmount((Number(value) * MHT_TO_BUSD).toFixed(2).toString());
        setMhtAmount(Number(value).toString());
      }
    }
  };

  const buyMHT = async () => {
    if (provider && contracts) {
      try {
        setBuying(true);
        const ethersProvider = new ethers.providers.Web3Provider(
          provider as any
        );
        const approve = await contracts.busd.approve(
          config[network].WhitelistSale[sale].address,
          ethers.utils.parseEther(busdAmount.toString())
        );
        await waitFor(
          () => isTransactionMined(ethersProvider, approve.hash),
          NETWORK_TIMEOUT
        );
        const buy = await contracts.whitelistSale.buy(
          ethers.utils.parseEther(mhtAmount)
        );
        await waitFor(
          () => isTransactionMined(ethersProvider, buy.hash),
          NETWORK_TIMEOUT
        );
        setRefresh(!refresh);
        router.push({
          pathname: "/store/success",
          query: { type: "MHT", amount: mhtAmount },
        });
      } catch (err: any) {
        const message = err.data ? err.data.message : err.message;
        alert(message);
      }
      setBuying(false);
    }
  };

  const buyBooster = async (index: number) => {
    if (provider && contracts) {
      try {
        setBuying(true);
        const ethersProvider = new ethers.providers.Web3Provider(
          provider as any
        );
        const type = index === 1 ? "EPIC" : "LEGENDARY";
        const booster =
          type === "EPIC"
            ? config[network].BMHTE.address
            : config[network].BMHTL.address;
        const boosterPrice =
          type === "EPIC"
            ? config[network].BMHTE.busdPrice
            : config[network].BMHTL.busdPrice;

        const approve = await contracts.busd.approve(
          config[network].BoosterSale2.address,
          ethers.utils.parseEther(boosterPrice.toString()).mul(boosterAmount)
        );
        await waitFor(
          () => isTransactionMined(ethersProvider, approve.hash),
          NETWORK_TIMEOUT
        );
        const buy = await contracts.boosterSale2.buy(
          booster,
          ethers.utils.parseEther(boosterAmount.toString())
        );
        await waitFor(
          () => isTransactionMined(ethersProvider, buy?.hash),
          NETWORK_TIMEOUT
        );
        setRefresh(!refresh);
        router.push({
          pathname: "/store/success",
          query: {
            type: `${type} BOOSTER${boosterAmount === 1 ? "" : "S"}`,
            amount: boosterAmount,
          },
        });
      } catch (err: any) {
        const message = err.data ? err.data.message : err.message;
        alert(message);
      }
      setBuying(false);
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
              if (boosterAmount > 1 && boosterAmount <= 6)
                setBoosterAmount(boosterAmount - 1);
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
              let amountMax = 6;
              if (index === 2) amountMax = 2;

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
      <Formik
        initialValues={{ amount: 1, amountMHT: 1 }}
        onSubmit={() => (index === 0 ? buyMHT() : buyBooster(index))}
      >
        <ContentForm>
          <Form>
            <Warning>
              {exceededAmount && index === 0 && (
                <div>
                  <span>Minimum $BUSD is {minBusdAmount.toFixed(2)}</span>
                  <br />
                  <span>Maximum $BUSD is {maxBusdAmount.toFixed(2)}</span>
                </div>
              )}
            </Warning>
            <FormMainSection>
              {index === 0 ? (
                <>
                  <FormDisplay>
                    <label>Amount of $BUSD</label> <br />
                    <input
                      onChange={onChange}
                      id="amount"
                      name="amount"
                      type="number"
                      value={busdAmount}
                    />
                  </FormDisplay>
                  <IconStyle>
                    <BiRightArrowAlt />
                  </IconStyle>

                  <FormDisplay>
                    <label>Amount of $MHT</label>
                    <br />
                    <input
                      onChange={onChange}
                      id="amountMHT"
                      name="amountMHT"
                      value={mhtAmount}
                      type="number"
                    />
                  </FormDisplay>
                </>
              ) : (
                displayIncrementalButtons()
              )}
            </FormMainSection>

            <ButtonFormat>
              {index === 0 ? null : (
                <Button disabled={buying || !userInfo?.whitelisted}>
                  BUY NOW
                </Button>
              )}
            </ButtonFormat>
          </Form>
        </ContentForm>
      </Formik>
    </>
  );
};

export default CardAmount;
