import type { NextPage } from "next";
import Head from "next/head";

import { Container, Content, ImageBackground, Body, Title, Left, Right, Web, Mobile} from "./styles";
import Footer from "../../components/common/Footer";
import Logo from "../../components/common/Logo";
import Sections from "../../components/common/Sections/Sections";
import Menu from "../../components/common/BurgerMenu";
import Header, {ContainerHeader} from "../../components/common/Header";
import React, {useState} from "react";
import CardCreateOrder from "../../components/common/CardCreateOrder";
import FormCreateOrder from "./formCreateOrder";

const CreateOrder: NextPage = () => {

    return (
        <Container>
            <Head>
                <title>Mouse Haunt</title>
            </Head>
            <ContainerHeader>
                <Header>
                    <Logo />
                    <Sections />
                    <Menu />
                </Header>
            </ContainerHeader>
            <Content>
                <Title>Create Order</Title>
                <Body>
                    <Web>
                        <Left>
                            <FormCreateOrder/>
                        </Left>
                        <Right>
                            <CardCreateOrder/>
                        </Right>
                    </Web>
                    <Mobile>
                        <Right>
                            <CardCreateOrder/>
                        </Right>
                        <Left>
                            <FormCreateOrder/>
                        </Left>
                    </Mobile>
                </Body>
                <Footer />
                <ImageBackground/>
            </Content>
        </Container>
    );
};

export default CreateOrder;
