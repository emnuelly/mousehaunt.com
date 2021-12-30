import type { NextPage } from "next";
import Head from "next/head";

import { Container, Content, CalendarIcon, LabelDate, ButtonPlace, EllipseBlue, EllipsePink, Expiration, ContainerButtons, FormInputs, Input, ImageBackground, Body, Title, Left, Right, TitleForm, FormContent, LabelFormContent, LabelForm, IconForm } from "./styles";
import Footer from "../../components/common/Footer";
import {Ellipse1} from "../../components/common/Landing/styles";
import Logo from "../../components/common/Logo";
import Sections from "../../components/common/Sections";
import Menu from "../../components/common/BurgerMenu";
import Header, {ContainerHeader} from "../../components/common/Header";
import React, {useState} from "react";
import Link from "../../components/common/Link";
import CardCreateOrder from "../../components/common/CardCreateOrder";
import ButtonNFT from "../../components/common/ButtonNFT";
import SelectPrices from "../../components/common/SelectPrices";
import Checkbox from "../../components/common/Checkbox";

const CreateOrder: NextPage = () => {

    return (
        <Container>
            <Head>
                <title>Mouse Haunt</title>
            </Head>
            <ContainerHeader>
                <Header>
                    <Ellipse1/>
                    <Logo />
                    <Sections />
                    <Menu />
                </Header>
            </ContainerHeader>

            <Content>
                <Title>Create Order</Title>
                <Body>
                    <Left>
                        <TitleForm>List item for sale</TitleForm>
                        <FormContent>
                            <LabelFormContent><LabelForm>Type</LabelForm><IconForm/></LabelFormContent>
                            <ContainerButtons>
                                <ButtonNFT>Legendary Booster</ButtonNFT>
                                <ButtonNFT>Epic Booster</ButtonNFT>
                                <ButtonNFT>Rare Booster</ButtonNFT>
                                <ButtonNFT>Genesis Booster</ButtonNFT>
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
                                <Link href={"/success"}>PLACE ORDER</Link>
                            </ButtonPlace>
                        </FormContent>
                    </Left>
                    <Right>
                        <CardCreateOrder/>
                    </Right>
                </Body>
                <Footer />
                <ImageBackground/>
            </Content>
        </Container>
    );
};

export default CreateOrder;
