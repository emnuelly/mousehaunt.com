import React, { useState, useEffect } from "react";
import { Formik, Field, Form, validateYupSchema } from "formik";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import { ethers } from "ethers";
import increment from "../../public/images/increment.png";
import decrement from "../../public/images/decrement.png";
import { WhitelistSale } from "../../typechain/WhitelistSale";
import WhitelistSaleJson from "../../contracts/WhitelistSale.sol/WhitelistSale.json";

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

interface Props {
  types?: string | undefined;
  price?: number | undefined;
}

const MHT_TO_BUSD = 0.15;

function isNumeric(str: string): boolean {
  if (typeof str != "string") return false;
  return !isNaN(str as unknown as number) && !isNaN(parseFloat(str));
}

const CardAmount: React.FC<Props> = (props: Props) => {
  const [whitelistSale, setWhitelistSale] = useState<WhitelistSale>();
  const [initialValuesState, setInitialValuesState] = useState(1);
  const [busdAmount, setBusdAmount] = useState("75");
  const [mhtAmount, setMhtAmount] = useState("500");

  const isItBuyingMHT = props.types !== "buyingItem";
  const calc = props.price && initialValuesState * props.price;

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = provider.getSigner(0);
    const contract = new ethers.Contract(
      config.bscTestnet.WhitelistSale.PrivateSale.address,
      WhitelistSaleJson.abi,
      signer
    ) as WhitelistSale;
    // signer.getAddress().then(setWallet);
    setWhitelistSale(contract);
  }, []);

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
    whitelistSale?.buy(ethers.utils.parseEther(mhtAmount));
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
            onClick={() => setInitialValuesState(initialValuesState - 1)}
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
              if (initialValuesState >= 1) {
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
  // console.log(busd, mht);
  return (
    <>
      <Formik
        // enableReinitialize
        initialValues={{ amount: 1, amountMHT: 1 }}
        onSubmit={() => {
          alert(
            `Trying to buy ${initialValuesState} BUSD is equal to  ${
              calc ? calc : initialValuesState
            } MTHs`
          );
        }}
      >
        <ContentForm>
          <Form>
            <FormMainSection>
              {isItBuyingMHT ? (
                <>
                  <FormDisplay>
                    <label>Amount of $BUSD</label> <br />
                    <input
                      onChange={(e) => onChange(e)}
                      id="amount"
                      name="amount"
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
                    />
                  </FormDisplay>
                </>
              ) : (
                displayIncrementalButtons()
              )}
            </FormMainSection>

            <ButtonFormat>
              <Button onClick={buy}>BUY NOW</Button>
            </ButtonFormat>
          </Form>
        </ContentForm>
      </Formik>
    </>
  );
};

export default CardAmount;
