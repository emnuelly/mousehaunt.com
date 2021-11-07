import type { NextPage } from 'next';
import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { BiRightArrowAlt } from 'react-icons/bi';
import Image from 'next/image';
import button from '../../public/images/button.png';
import increment from '../../public/images/increment.png';
import decrement from '../../public/images/decrement.png';

import NumberFormat from 'react-number-format';

import {
  FormDisplay,
  FormMainSection,
  ContentForm,
  IconStyle,
  ButtonFormat,
  FormIncremental,
} from './stylesForm';

interface Props {
  types?: string | undefined;
  price?: number | undefined;
}

const CardAmount: NextPage = (props: Props) => {
  const [initialValuesState, setInitialValuesState] = useState(1);
  const [itemPrice, setItemPrice] = useState(props.price);
  const isItBuyingMHT = props.types !== 'buyingItem';
  const calc = itemPrice && initialValuesState * itemPrice;

  const displayIncrementalButtons = () => {
    return (
      <>
        <FormIncremental>
          <label>Amount of booster:</label> <br />
          <span
            style={{
              margin: '5px',
              position: 'relative',
              top: '15%',
              left: '-3%',
            }}
            onClick={() => setInitialValuesState(initialValuesState + 1)}
          >
            <Image src={increment} width={'30px'} height={'30px'}></Image>
          </span>
          <Field
            id="amountBUSD"
            name="amountBUSD"
            placeholder={initialValuesState}
          />{' '}
          <span
            style={{
              margin: '5px',
              position: 'relative',
              top: '15%',
              left: '3%',
            }}
            onClick={() => {
              if (initialValuesState >= 1) {
                setInitialValuesState(initialValuesState - 1);
              }
              return;
            }}
          >
            <Image src={decrement} width={'30px'} height={'30px'}></Image>
          </span>
        </FormIncremental>
      </>
    );
  };

  return (
    <>
      <Formik
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
                    <Field
                      id="amountBUSD"
                      name="amountBUSD"
                      placeholder={initialValuesState}
                      onChange={e => {
                        console.log(e);
                      }}
                    />
                  </FormDisplay>
                  <IconStyle>
                    <BiRightArrowAlt />
                  </IconStyle>
                  <FormDisplay>
                    <label>Amount of $MHT:</label>
                    <br />
                    <Field
                      id="amountBUSD"
                      name="amountBUSD"
                      placeholder={initialValuesState}
                    />
                  </FormDisplay>
                </>
              ) : (
                displayIncrementalButtons()
              )}
            </FormMainSection>

            <ButtonFormat>
              <button type="submit">
                <Image src={button}></Image>
              </button>
            </ButtonFormat>
          </Form>
        </ContentForm>
      </Formik>
    </>
  );
};

export default CardAmount;
