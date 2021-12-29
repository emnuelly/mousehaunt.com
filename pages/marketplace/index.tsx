import type { NextPage } from "next";
import Head from "next/head";

import { Container, Content, EllipseBlue, EllipsePink,ContainerButtons, FormInputs, Input, ImageBackground, Body, Title, Left, Right, TitleForm, FormContent, LabelFormContent, LabelForm, IconForm } from "./styles";
import Footer from "../../components/common/Footer";
import {Ellipse1} from "../../components/common/Landing/styles";
import Logo from "../../components/common/Logo";
import Sections from "../../components/common/Sections";
import Menu from "../../components/common/BurgerMenu";
import Header, {ContainerHeader} from "../../components/common/Header";
import React, {useState} from "react";

const Marketplace: NextPage = () => {

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
                <Title>NFT MARKETPLACE</Title>
                <Body>

                </Body>
                <Footer />
                <ImageBackground/>
            </Content>
        </Container>
    );
};

export default Marketplace;
