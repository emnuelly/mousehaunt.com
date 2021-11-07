import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { Formik, Field, Form, validateYupSchema } from "formik";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import button from "../../public/images/button.png";
import increment from "../../public/images/increment.png";
import decrement from "../../public/images/decrement.png";

import NumberFormat from "react-number-format";

import {
  FormDisplay,
  FormMainSection,
  ContentForm,
  IconStyle,
  ButtonFormat,
  FormIncremental,
} from "./stylesForm";

interface Props {
  types?: string | undefined;
  price?: number | undefined;
}

const MHT_TO_BUSD = 0.15;

const CardAmount: React.FC<Props> = (props: Props) => {
  const [initialValuesState, setInitialValuesState] = useState(1);
  const [itemPrice, setItemPrice] = useState(props.price);
  const [busd, setBusd] = useState("");
  const [mht, setMht] = useState("");

  const isItBuyingMHT = props.types !== "buyingItem";
  const calc = itemPrice && initialValuesState * itemPrice;

  const defaultValueBUSD = 75;

  const onChange = (event: any) => {
    const { value, id } = event.target;
    if (!value) {
      setBusd("");
      setMht("");
    } else {
      if (id === "amount") {
        setBusd(Number(value).toString());
        setMht((Number(value) / MHT_TO_BUSD).toFixed(2).toString());
      } else {
        setBusd((Number(value) * MHT_TO_BUSD).toFixed(2).toString());
        setMht(Number(value).toString());
      }
    }
  };

  const displayIncrementalButtons = () => {
    return (
      <>
        <FormIncremental>
          <label>Amount of boosters:</label> <br />
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
                    <label>Amount of $BUSD:</label> <br />
                    <input
                      onChange={(e) => onChange(e)}
                      id="amount"
                      name="amount"
                      placeholder={defaultValueBUSD.toString()}
                      value={busd}
                    />
                  </FormDisplay>
                  <IconStyle>
                    <BiRightArrowAlt />
                  </IconStyle>
                  <FormDisplay>
                    <label>Amount of $MHT:</label>
                    <br />
                    <input
                      onChange={(e) => onChange(e)}
                      id="amountMHT"
                      name="amountMHT"
                      placeholder={(defaultValueBUSD / MHT_TO_BUSD).toString()}
                      value={mht}
                    />
                  </FormDisplay>
                </>
              ) : (
                displayIncrementalButtons()
              )}
            </FormMainSection>

            <ButtonFormat>
              <button type="submit">
                <Image alt="button" src={button}></Image>
              </button>
            </ButtonFormat>
          </Form>
        </ContentForm>
      </Formik>
    </>
  );
};

export default CardAmount;
