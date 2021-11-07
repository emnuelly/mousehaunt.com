import { Formik, Field, Form, validateYupSchema } from "formik";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import { WhitelistSale } from "../../typechain/WhitelistSale";
import WhitelistSaleJson from "../../contracts/WhitelistSale.sol/WhitelistSale.json";
import React, { useState, useEffect } from "react";
import { Contract, ethers } from "ethers";
import increment from "../../public/images/increment.png";
import decrement from "../../public/images/decrement.png";
import BUSDJson from "../../contracts/MouseHauntToken.sol/MouseHauntToken.json";

import {
  FormDisplay,
  FormMainSection,
  ContentForm,
  IconStyle,
  ButtonFormat,
  FormIncremental,
} from "./stylesForm";
import { Button } from "../Button";
import config from "../../utils/config";
import waitFor from "../../utils/waitFor";
import { isTransactionMined } from "../../utils/blockchain";

interface Props {
  types?: string | undefined;
  price?: number | undefined;
  legendary?: string;
  buyMht?: string;
}

const MHT_TO_BUSD = Number(
  config.bscTestnet.WhitelistSale.PrivateSale.MHTtoBUSD
);

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

function isNumeric(str: string): boolean {
  if (typeof str != "string") return false;
  return !isNaN(str as unknown as number) && !isNaN(parseFloat(str));
}

const CardAmount: React.FC<Props> = (props: Props) => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [whitelistSale, setWhitelistSale] = useState<WhitelistSale>();
  const [busd, setBusd] = useState<Contract>();
  const [initialValuesState, setInitialValuesState] = useState(1);
  const [busdAmount, setBusdAmount] = useState("75");
  const [mhtAmount, setMhtAmount] = useState("500");
  const [exceededAmount, setExceededAmount] = useState(false);

  const isItBuyingMHT = props.types !== "buyingItem";
  const calc = props.price && initialValuesState * props.price;

  useEffect(() => {
    if (window.ethereum) {
      const p = new ethers.providers.Web3Provider(window.ethereum as any);
      const signer = p.getSigner(0);
      const contract = new ethers.Contract(
        config.bscTestnet.WhitelistSale.PrivateSale.address,
        WhitelistSaleJson.abi,
        signer
      ) as WhitelistSale;
      const busdContract = new ethers.Contract(
        config.bscTestnet.BUSD.address,
        BUSDJson.abi,
        signer
      ) as WhitelistSale;

      setProvider(p);
      setWhitelistSale(contract);
      setBusd(busdContract);
    }
  }, []);

  useEffect(() => {
    if (Number(busdAmount) < 75 || Number(busdAmount) > 600) {
      setExceededAmount(true);
    } else {
      setExceededAmount(false);
    }
  }, [busdAmount || mhtAmount]);

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

  const buy = async () => {
    if (provider) {
      try {
        const tx = await busd?.approve(
          config.bscTestnet.WhitelistSale.PrivateSale.address,
          ethers.utils.parseEther(busdAmount)
        );
        await waitFor(() => isTransactionMined(provider, tx.hash), 30e3);
        await whitelistSale?.buy(ethers.utils.parseEther(mhtAmount));
      } catch (err: any) {
        alert(err.data.message);
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
              if (initialValuesState > 1 && initialValuesState <= 6)
                setInitialValuesState(initialValuesState - 1);
            }}
          >
            <Image
              alt="decrement"
              src={decrement}
              width={"30px"}
              height={"30px"}
            ></Image>
          </span>
          <Field id="amountBUSD" name="amountBUSD" value={initialValuesState} />{" "}
          <span
            style={{
              margin: "5px",
              position: "relative",
              top: "15%",
            }}
            onClick={() => {
              let amountMax = 6;
              if (props.legendary) amountMax = 2;

              if (initialValuesState >= 1 && initialValuesState < amountMax) {
                setInitialValuesState(initialValuesState + 1);
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
        onSubmit={() => buy()}
      >
        <ContentForm>
          <Form>
            {exceededAmount && (
              <div
                style={{
                  color: "red",
                  textAlign: "center",
                  marginTop: "-19px",
                }}
              >
                Minimum $BSUD is 75, $BSUD maximum 600
              </div>
            )}
            <FormMainSection>
              {isItBuyingMHT ? (
                <>
                  <FormDisplay>
                    <label>Amount of $BUSD</label> <br />
                    <input
                      onChange={(e) => {
                        onChange(e);
                      }}
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
                      onChange={(e) => onChange(e)}
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
              <Button>BUY NOW</Button>
            </ButtonFormat>
          </Form>
        </ContentForm>
      </Formik>
    </>
  );
};

export default CardAmount;
