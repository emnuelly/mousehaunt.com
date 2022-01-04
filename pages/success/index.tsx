import type { NextPage } from "next";
import Head from "next/head";

import { Container, Content, EllipseBlue, EllipsePink, ImageBackground, Body, Title } from "./styles";
import Landing from "../../components/common/Landing";
import Footer from "../../components/common/Footer";
import {Ellipse1} from "../../components/common/Landing/styles";
import Logo from "../../components/common/Logo";
import Sections from "../../components/common/Sections";
import Menu from "../../components/common/BurgerMenu";
import Header, {ContainerHeader} from "../../components/common/Header";
import React from "react";
import CardSuccess from "../../components/common/CardSuccess";
import HeaderDefault from "../../components/common/Header";

const Success: NextPage = () => {
    return (
        <Container>
            <Head>
                <title>Mouse Haunt</title>
            </Head>
            <HeaderDefault/>

            <Content>
                <Title>Your order was created!
                </Title>
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
