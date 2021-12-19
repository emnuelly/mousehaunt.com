import { Formik, Field, Form } from "formik";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";

import React, { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import increment from "../../../public/images/other/increment.png";
import decrement from "../../../public/images/other/decrement.png";
import Loading from "../../../assets/svg/loading.svg";

import {
  FormDisplay,
  FormMainSection,
  ContentForm,
  IconStyle,
  ButtonFormat,
  FormIncremental,
  Warning,
} from "./stylesForm";
import config, { Network } from "../../../utils/config";
import waitFor from "../../../utils/waitFor";
import { isTransactionMined, NETWORK_TIMEOUT } from "../../../utils/blockchain";
import { StoreContext } from "../../../contexts/StoreContext";
import { useRouter } from "next/router";
import { Button } from "../Button";
import { LoadingContainer } from "./styles";

interface Props {
  index: number;
}

function isNumeric(str: string): boolean {
  if (typeof str != "string") return false;
  return !isNaN(str as unknown as number) && !isNaN(parseFloat(str));
}

function boosterAllowance(
  type: string,
  boosterAmount: number,
  network: Network
) {
  return ethers.utils
    .parseEther(
      (type === "EPIC"
        ? config[network].BoosterSale.PrivateSale3.BMHTE.busdPrice
        : config[network].BoosterSale.PrivateSale3.BMHTR.busdPrice
      ).toString()
    )
    .mul(boosterAmount);
}

enum BUY_STEP {
  APPROVE,
  BUY,
  WAIT,
}

const CardAmount: React.FC<Props> = ({ index }: Props) => {
  const [boosterAmount, setBoosterAmount] = useState(1);
  const [buyStep, setBuyStep] = useState<BUY_STEP>(BUY_STEP.APPROVE);
  const router = useRouter();
  const {
    account,
    refresh,
    userInfoDetailed,
    setRefresh,
    contracts,
    provider,
    network,
  } = useContext(StoreContext);

  const sale = config[network].WhitelistSale.PreSales.find(
    (sale) => sale.whitelisted === account
  );

  const MHT_TO_BUSD = Number(sale?.MHTtoBUSD);

  const maxBusdAmount = Number(sale?.amount) * MHT_TO_BUSD;

  const [busdAmount, setBusdAmount] = useState(maxBusdAmount.toString());
  // const [mhtAmount, setMhtAmount] = useState(sale?.amount);

  const type = index === 1 ? "EPIC" : "RARE";

  const allowance =
    index === 0
      ? "" 
      : index === 1
      ? userInfoDetailed?.allowance.epic
      : userInfoDetailed?.allowance.rare;

  // useEffect(() => {
  //   if (
  //     Number(busdAmount) < minBusdAmount ||
  //     Number(busdAmount) > maxBusdAmount
  //   ) {
  //     setExceededAmount(true);
  //   } else {
  //     setExceededAmount(false);
  //   }
  // }, [busdAmount, mhtAmount, minBusdAmount, maxBusdAmount]);

  useEffect(() => {
    if (provider && contracts && account && sale) {
      try {
        (async () => {
          const busdAllowanceMHT = await contracts.busd.allowance(
            account,
            sale?.address
          );
          if (busdAllowanceMHT.gte(ethers.utils.parseEther(busdAmount))) {
            setBuyStep(BUY_STEP.BUY);
          }
          const busdAllowanceBooster = await contracts.busd.allowance(
            account,
            config[network].BoosterSale.PrivateSale3.address
          );
          if (
            busdAllowanceBooster.gte(
              boosterAllowance(type, boosterAmount, network)
            )
          ) {
            setBuyStep(BUY_STEP.BUY);
          }
        })();
      } catch (err: any) {
        const message = err.data ? err.data.message : err.message;
        alert(message);
      }
    }
  }, [
    provider,
    contracts,
    account,
    busdAmount,
    network,
    type,
    boosterAmount,
    sale,
  ]);

  // const onChange = (event: any) => {
  //   const { value, id } = event.target;
  //   if (!value) {
  //     setBusdAmount("");
  //     setMhtAmount("");
  //   } else if (!isNumeric(value)) {
  //     return;
  //   } else {
  //     if (id === "amount") {
  //       setBusdAmount(Number(value).toString());
  //       setMhtAmount((Number(value) / MHT_TO_BUSD).toFixed(2).toString());
  //     } else {
  //       setBusdAmount((Number(value) * MHT_TO_BUSD).toFixed(2).toString());
  //       setMhtAmount(Number(value).toString());
  //     }
  //   }
  // };

  const approveMHT = async () => {
    if (provider && contracts && sale) {
      try {
        setBuyStep(BUY_STEP.WAIT);
        const ethersProvider = new ethers.providers.Web3Provider(
          provider as any
        );
        const approve = await contracts.busd.approve(
          sale?.address,
          ethers.utils.parseEther(busdAmount.toString())
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

  const buyMHT = async () => {
    if (provider && contracts && sale && contracts.participatingSales[0]) {
      try {
        setBuyStep(BUY_STEP.WAIT);
        const ethersProvider = new ethers.providers.Web3Provider(
          provider as any
        );
        const buy = await contracts.participatingSales[0].buy(
          ethers.utils.parseEther(sale.amount)
        );
        const tx = await waitFor(
          () => isTransactionMined(ethersProvider, buy.hash),
          NETWORK_TIMEOUT
        );
        setRefresh(!refresh);
        router.push({
          pathname: "/store/success",
          query: { type: "MHT", amount: sale.amount, tx },
        });
      } catch (err: any) {
        const message = err.data ? err.data.message : err.message;
        alert(message);
        setBuyStep(BUY_STEP.APPROVE);
      }
    }
  };

  const approveBooster = async () => {
    if (provider && contracts) {
      try {
        setBuyStep(BUY_STEP.WAIT);
        const ethersProvider = new ethers.providers.Web3Provider(
          provider as any
        );
        const approve = await contracts.busd.approve(
          config[network].BoosterSale.PrivateSale3.address,
          boosterAllowance(type, boosterAmount, network)
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
        const booster =
          type === "EPIC"
            ? config[network].BMHTE.address
            : config[network].BMHTR.address;

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
            type: `${type} BOOSTER${boosterAmount === 1 ? "" : "S"}`,
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
              const amountMax =
                index === 1
                  ? Number(config[network].BoosterSale.PrivateSale3.BMHTE.cap)
                  : Number(config[network].BoosterSale.PrivateSale3.BMHTR.cap);

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
              {/* <Warning>
                {exceededAmount && index === 0 && (
                  <div>
                    <span>Minimum $BUSD is {minBusdAmount.toFixed(2)}</span>
                    <br />
                    <span>Maximum $BUSD is {maxBusdAmount.toFixed(2)}</span>
                  </div>
                )}
              </Warning> */}
              <FormMainSection>
                {index === 0 ? (
                  <>
                    <FormDisplay>
                      <label>Amount of $BUSD</label> <br />
                      <input
                        disabled
                        // onChange={onChange}
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
                        disabled
                        // onChange={onChange}
                        id="amountMHT"
                        name="amountMHT"
                        value={sale?.amount}
                        type="number"
                      />
                    </FormDisplay>
                  </>
                ) : (
                  displayIncrementalButtons()
                )}
              </FormMainSection>
              <ButtonFormat>
                <Button
                  disabled={
                    buyStep !== BUY_STEP.APPROVE ||
                    !userInfoDetailed?.whitelisted ||
                    allowance === "0"
                  }
                  onClick={() =>
                    index === 0 ? approveMHT() : approveBooster()
                  }
                >
                  APPROVE BUSD
                </Button>
                <Button
                  disabled={
                    buyStep !== BUY_STEP.BUY ||
                    !userInfoDetailed?.whitelisted ||
                    allowance === "0"
                  }
                  onClick={() => (index === 0 ? buyMHT() : buyBooster())}
                >
                  BUY
                </Button>
              </ButtonFormat>
              {buyStep === BUY_STEP.WAIT && (
                <LoadingContainer index={index}>
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
