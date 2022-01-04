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
import React, {useState} from "react";
import Link from "../../components/common/Link";
import ButtonNFT from "../../components/common/ButtonNFT/ButtonNFT";
import SelectPrices from "../../components/common/SelectPrices";
import Checkbox from "../../components/common/Checkbox";
import OrdersManager from "../../services/OrdersManager";

const FormCreateOrder = () => {


    function approve() {
        OrdersManager.Approve({
            id: '123',
            assetId: '5',
            seller: '0x12312312',
            amount: '5',
            nftAddress: '0x123123f1',
            priceInWei: '10',
            expiresAt: '12839123891',
        });
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
                <ButtonNFT option={"Legendary Booster"}/>
                <ButtonNFT option={"Epic Booster"}/>
                <ButtonNFT option={"Rare Booster"}/>
                <ButtonNFT option={"Genesis Booster"}/>
            </ContainerButtons>
            <LabelFormContent><LabelForm>Price</LabelForm><IconForm/></LabelFormContent>
            <FormInputs>
                <SelectPrices/>
                <Input placeholder="Amount" type="text"/>
            </FormInputs>
            <LabelFormContent><LabelForm>Expiration time</LabelForm></LabelFormContent>
            <Expiration>
                <CalendarIcon/>
                <LabelDate>6 months</LabelDate>
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
