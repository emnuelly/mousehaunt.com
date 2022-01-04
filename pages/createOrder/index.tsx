import type { NextPage } from "next";
import Head from "next/head";

import { Container, Content, ImageBackground, Body, Title, Left, Right, Web, Mobile} from "./styles";
import Footer from "../../components/common/Footer";
import React, {useState} from "react";
import CardCreateOrder from "../../components/common/CreateOrder/CardCreateOrder";
import FormCreateOrder from "./formCreateOrder";
import HeaderDefault from "../../components/common/HeaderDefault/HeaderDefault";

const CreateOrder: NextPage = () => {

    return (
        <Container id={"CreateOrder"}>
            <Head>
                <title>Mouse Haunt</title>
            </Head>
            <HeaderDefault/>
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
