import type {NextPage} from "next";
import Head from "next/head";

import {
    Container,
    Content,
    CalendarIcon,
    LabelDate,
    ButtonPlace,
    EllipseBlue,
    EllipsePink,
    Expiration,
    ContainerButtons,
    FormInputs,
    Input,
    ImageBackground,
    Body,
    Title,
    Left,
    Right,
    TitleForm,
    FormContent,
    LabelFormContent,
    LabelForm,
    IconForm
} from "./styles";
import React, {useContext, useState} from "react";
import Link from "../../components/common/Link";
import ButtonNFT from "../../components/common/ButtonNFT/ButtonNFT";
import SelectPrices from "../../components/common/SelectPrices";
import Checkbox from "../../components/common/Checkbox";
import OrdersManager from "../../services/OrdersManager";
import DatePicker from "../../components/common/CreateOrder/DatePicker";
import BoosterTypes from "../../components/common/CreateOrder/BoosterTypes";
import {OrdersContext} from "../../contexts/OrdersContext";
import Router from "next/router";
import SelectExpirationDate from "../../components/common/SelectExpirationDate";

interface FormCreateOrderProps {
    setPrice: (newPrice: number) => void,
    price: number
}

const FormCreateOrder = ({setPrice, price}: FormCreateOrderProps) => {

    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    function approve() {
        // é assim que pega o valor do estado e coloca nesse json
        console.log(price);
        console.log(selectedDate)
        OrdersManager.Approve({
            id: '123',
            assetId: '5',
            seller: '0x12312312',
            amount: '1',
            nftAddress: '0x123123f1',
            priceInWei: price.toString(),
            expiresAt: '12839123891',
        });
        Router.push('/success')
    }

    function placeOrder() {
        OrdersManager.executeOrder({
            id: '123',
            assetId: '5',
            seller: '0x12312312',
            amount: '5',
            nftAddress: '0x123123f1',
            priceInWei: '10',
            expiresAt: '12839123891',
        });
    }

    return (
        <FormContent>
            <TitleForm>List item for sale</TitleForm>
            <LabelFormContent><LabelForm>Type</LabelForm><IconForm/></LabelFormContent>
            <ContainerButtons>
                <BoosterTypes/>
            </ContainerButtons>
            <LabelFormContent><LabelForm>Price</LabelForm><IconForm/></LabelFormContent>
            <FormInputs>
                <SelectPrices/>
                <Input placeholder="Amount" type="number" value={price} onChange={(event) => setPrice(parseInt(event.target.value))}/>
            </FormInputs>
            <LabelFormContent><LabelForm>Expiration time</LabelForm></LabelFormContent>
            <Expiration>
                <SelectExpirationDate/>
                {/*<DatePicker changeEvent={setSelectedDate}/>*/}
            </Expiration>
            <Checkbox/>
            <ButtonPlace>
                <Link onClick={approve}>APPROVE</Link>
                <Link onClick={placeOrder}>PLACE ORDER</Link>
            </ButtonPlace>
        </FormContent>
    );
};

export default FormCreateOrder;
