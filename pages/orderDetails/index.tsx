import type { NextPage } from "next";
import Head from "next/head";

import { Container,
    Content,
    ImageBackground,
    Body,
    Title,
    FirstContent, SecondContent, ThirdContent, TitleThirdContent, CardThirdContent, Label3, ContainerOrderActivity,
    LabelAndIcon, LabelSecond, TitleSecond, IconArrow, IconDown, ContainerContent, Left, Right, ImageNFT,TextDescription,
    Top, Middle, Bottom, Description, CollecionText, TitleName, ContentSubtitle,
    IconAndText, IconHeart, IconView, TextIcon, Subtext, LabelMiddle, ContentValue, ValueNFT, ValueDollar, IconSale, ContentMiddle

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
import ButtonSale from "../../components/common/ButtonSale";
import TableOrderDetails from "../../components/common/TableOrderDetails";
import RemainConnected from "../../components/common/RemainConnected";

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
                    <FirstContent>
                        <Left>
                            <ImageNFT/>
                        </Left>
                        <Right>
                            <Top>
                                <CollecionText>Collection name</CollecionText>
                                <TitleName>Amazing digital ART</TitleName>
                                <ContentSubtitle>
                                    <Subtext>Owned by <b>Nickname</b></Subtext>
                                    <IconAndText>
                                        <IconView/>
                                        <TextIcon> 572 views</TextIcon>
                                    </IconAndText>
                                    <IconAndText>
                                        <IconHeart/>
                                        <TextIcon> 12 favorites</TextIcon>
                                    </IconAndText>
                                </ContentSubtitle>
                            </Top>
                            <Middle>
                                <ContentMiddle>
                                <LabelMiddle>Highest offer</LabelMiddle>
                                <ContentValue>
                                    <ValueNFT>0,2 $MHT</ValueNFT>
                                    <ValueDollar>(870,23 USD)</ValueDollar>
                                </ContentValue>
                                <ButtonSale/>
                                </ContentMiddle>
                            </Middle>
                            <Bottom>
                                <Description>
                                    <TextDescription>
                                        Senectus placerat viverra magna sed feugiat rutrum duis. Tortor scelerisque lorem nullam morbi turpis sed felis. Scelerisque lectus venenatis lacus sit blandit lectus a in sit. Mattis odio ridiculus lobortis adipiscing non non. Ullamcorper pharetra ut nunc facilisi integer phasellus nec tortor facilisis. Senectus placerat viverra magna sed feugiat rutrum duis. Tortor scelerisque lorem nullam morbi turpis sed felis. Scelerisque lectus venenatis lacus sit blandit lectus a in sit. Mattis odio ridiculus lobortis adipiscing non non. Ullamcorper pharetra ut nunc facilisi integer phasellus nec tortor facilisis.
                                    </TextDescription>
                                </Description>
                            </Bottom>
                        </Right>
                    </FirstContent>
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
                            <TableOrderDetails/>
                        </ContainerOrderActivity>
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
                <RemainConnected/>

                <Footer />
                <ImageBackground/>
            </Content>
        </Container>
    );
};

export default OrderDetails;
