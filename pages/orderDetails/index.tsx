import type { NextPage } from "next";
import Head from "next/head";

import { Container,
    Content,
    ImageBackground,
    Body,
    Title,
    FirstContent, SecondContent, ThirdContent, TitleThirdContent, CardThirdContent, Label3, ContainerOrderActivity,
    LabelAndIcon, LabelSecond, TitleSecond, IconArrow, IconDown, ContainerContent

} from "./styles";
import Footer from "../../components/common/Footer";
import {Ellipse1} from "../../components/common/Landing/styles";
import Logo from "../../components/common/Logo";
import Sections from "../../components/common/Sections";
import Menu from "../../components/common/BurgerMenu";
import Header, {ContainerHeader} from "../../components/common/Header";
import React, {useState} from "react";
import CardShop from "../../components/common/CardShop";
import Link from "../../components/common/Link";

const OrderDetails: NextPage = () => {

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
                <Title>ORDER DETAILS</Title>
                <Body>
                    <FirstContent></FirstContent>
                    <SecondContent>
                        <ContainerOrderActivity>
                            <LabelAndIcon>
                                <TitleSecond>
                                    <IconArrow/>
                                    <LabelSecond>
                                        Order Activity
                                    </LabelSecond>
                                </TitleSecond>
                                <IconDown/>
                            </LabelAndIcon>
                        </ContainerOrderActivity>
                        <ContainerContent>

                        </ContainerContent>
                    </SecondContent>
                    <ThirdContent>
                        <TitleThirdContent>
                            <Label3>
                                More from this collection
                            </Label3>
                            <Link>View  More</Link>
                        </TitleThirdContent>
                        <CardThirdContent>
                            <CardShop/>
                            <CardShop/>
                            <CardShop/>
                            <CardShop/>
                        </CardThirdContent>

                    </ThirdContent>

                </Body>
                <Footer />
                <ImageBackground/>
            </Content>
        </Container>
    );
};

export default OrderDetails;
