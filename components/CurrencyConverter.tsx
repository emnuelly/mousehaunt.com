import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import ConvertIcon from '../assets/svg/Convert.svg';
import busdImage from '../public/images/BUSD.png';
import mhtImage from '../public/images/logo.png';
import { Button } from './Button';

const Container = styled.div`
  margin: 0;
  padding: 0;

  align-items: center;
  display: flex;
  flex-direction: column;

  width: 340px;
`;

const LabelInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-bottom: 20px;

  label {
    text-align: start;
    line-height: 20px;
    font-size: 14px;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-weight: 500;
    margin-bottom: 4 px;
  }

  label > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  input {
    width: 100%;
    height: 48px;

    border-radius: 4px;
    padding-left: 12px;
    padding-right: 12px;
    background-color: transparent;

    border-color: transparent;
    border-style: solid;
    border-width: 4px;
  }
  input:focus {
    outline: none;
    border-color: #f2089f;
    border-style: solid;
    border-width: 4px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 4px;

  background-color: #f5f5f5;

  height: 48px;
  img {
    opacity: 1;
    width: 36px;
    height: 36px;
  }
`;

const Currency = styled.div`
  position: absolute;
  margin-left: 220px;
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;

  span {
    align-self: center;
    padding-left: 10px;
    color: black;
  }
`;

const Convert = styled.div`
  display: flex;
  color: #707a8a;
  height: 30px;
  width: 30px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 50%;

  svg {
    width: 16px;
    height: 16px;
    align-self: center;
  }
`;

interface Props {
  rate: number;
}

const CurrencyConverter: React.FC<Props> = ({ rate }: Props) => {
  const [busd, setBUSD] = useState('');
  const [mht, setMHT] = useState('');

  const onChange = (event: any) => {
    const { value, id } = event.target;
    if (!value) {
      setBUSD('');
      setMHT('');
    } else {
      if (id === 'convert-busd') {
        setBUSD(Number(value).toString());
        setMHT((Number(value) * rate).toString());
      } else {
        setBUSD((Number(value) / rate).toString());
        setMHT(Number(value).toString());
      }
    }
  };

  return (
    <Container>
      <LabelInput>
        <label htmlFor="busd">
          <div>
            <span>From</span>
            <span>1 BUSD = 10 MHT</span>
          </div>
        </label>
        <InputContainer>
          <input
            onChange={event => onChange(event)}
            id="convert-busd"
            value={busd}
            type="number"
          ></input>
          <Currency>
            <Image src={busdImage} alt="BUSD" width="36px" height="36px" />
            <span>BUSD</span>
          </Currency>
        </InputContainer>
      </LabelInput>
      <Convert>
        <ConvertIcon />
      </Convert>
      <LabelInput>
        <label htmlFor="mht">To</label>
        <InputContainer>
          <input
            onChange={event => onChange(event)}
            id="convert-mht"
            value={mht}
            type="number"
          ></input>
          <Currency>
            <Image src={mhtImage} alt="MHT" width="36px" height="36px" />
            <span>MHT</span>
          </Currency>
        </InputContainer>
      </LabelInput>
      <Button>Buy MHT</Button>
    </Container>
  );
};

export default CurrencyConverter;
