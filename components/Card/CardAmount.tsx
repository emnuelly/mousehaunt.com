import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, validateYupSchema } from 'formik';
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
  const [busd, setBusd] = useState('');
  const [mht, setMht] = useState('');

  const isItBuyingMHT = props.types !== 'buyingItem';
  const calc = itemPrice && initialValuesState * itemPrice;

  const onChange = (event: any) => {
    const { value, id } = event.target;
    if (!value) {
      setBusd('');
      setMht('');
    } else {
      if (id === 'amount') {
        setBusd(Number(value).toString());
        setMht((Number(value) / 0.15).toFixed(2).toString());
      } else {
        setBusd((Number(value) * 0.15).toFixed(2).toString());
        setMht(Number(value).toString());
      }
    }
  };

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
              left: '-1%',
            }}
            onClick={() => setInitialValuesState(initialValuesState + 1)}
          >
            <Image src={increment} width={'30px'} height={'30px'}></Image>
          </span>
          <Field id="amountBUSD" name="amountBUSD" value={initialValuesState} />{' '}
          <span
            style={{
              margin: '5px',
              position: 'relative',
              top: '15%',
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
        {props => {
          useEffect(() => {
            if (props.values.amount) {
              return props.setFieldValue(
                'amountMHT',
                (props.values.amount / 0.15).toFixed(2)
              );
            }
          }, [props.values.amount]);
          return (
            <ContentForm>
              <Form>
                <FormMainSection>
                  {isItBuyingMHT ? (
                    <>
                      <FormDisplay>
                        <label>Amount of $BUSD:</label> <br />
                        <input
                          onChange={e => onChange(e)}
                          id="amount"
                          name="amount"
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
                          onChange={e => onChange(e)}
                          id="amountMHT"
                          name="amountMHT"
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
                    <Image src={button}></Image>
                  </button>
                </ButtonFormat>
              </Form>
            </ContentForm>
          );
        }}
      </Formik>
    </>
  );
};

export default CardAmount;
