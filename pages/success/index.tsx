import type { NextPage } from "next";
import Head from "next/head";

import { Container, Content, ImageBackground, Body, Title } from "./styles";
import Footer from "../../components/common/Footer";
import React from "react";
import CardSuccess from "../../components/common/CardSuccess";
import HeaderDefault from "../../components/common/HeaderDefault/HeaderDefault";

const Success: NextPage = () => {
    return (
        <Container id={"Success"}>
            <Head>
                <title>Mouse Haunt</title>
            </Head>
            <HeaderDefault/>
            <Content>
                <Title>Your order was created!</Title>
                <Body>
                    <CardSuccess/>
                </Body>
                <Footer />
                <ImageBackground/>
            </Content>
        </Container>
    );
};

export default Success;
