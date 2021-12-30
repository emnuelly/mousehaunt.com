import type { NextPage } from "next";
import Head from "next/head";

import {
    Container,
    Content,
    ImageBackground,
    Body,
    Title,
    Subtitle,
    Filter,
    Cards,
    AlignCards,
    ButtonMore,
    CardSpace,
    InputSearch,
    HeaderTitle,
    FilterText,
    ClearText,
    FormFilter
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
import CardSearchHeroes from "../../components/common/CardsSearch/CardSearchTemplate";
import CardSearchTemplate from "../../components/common/CardsSearch/CardSearchTemplate";
import SliderFilter from "../../components/common/SliderFilter";
import RemainConnected from "../../components/common/RemainConnected";

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
                <Subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis mauris in vitae, scelerisque. Neque adipiscing sed tortor eu nulla
                </Subtitle>
                <Body>
                    <Filter>
                        <HeaderTitle>
                            <FilterText>FILTERS</FilterText>
                            <ClearText>Clear All</ClearText>
                        </HeaderTitle>
                        <FormFilter>
                            <InputSearch id={"search"} placeholder={"Search"}/>
                            <CardSearchTemplate title={"Heroes"} textsCheckbox={"Custom"}/>
                            <CardSearchTemplate title={"Rarity"} textsCheckbox={"Custom"}/>
                            <CardSearchTemplate title={"Skin Rarity"} textsCheckbox={"Custom"}/>
                            <SliderFilter title={"Level"} id={"level"} />
                            <CardSearchTemplate title={"Trophy Class"} textsCheckbox={"Custom"}/>
                            <SliderFilter title={"Price range (WBNB)"} id={"price-range"}/>

                        </FormFilter>
                    </Filter>
                    <Cards>
                        <AlignCards>
                            <CardSpace>
                                <CardShop/>
                            </CardSpace>
                            <CardSpace>
                                <CardShop/>
                            </CardSpace>
                            <CardSpace>
                                <CardShop/>
                            </CardSpace>
                            <CardSpace>
                                <CardShop/>
                            </CardSpace>
                            <CardSpace>
                                <CardShop/>
                            </CardSpace>
                            <CardSpace>
                                <CardShop/>
                            </CardSpace>
                        </AlignCards>
                        <ButtonMore>
                        <Link>LOAD MORE</Link>
                        </ButtonMore>
                    </Cards>
                </Body>

                <RemainConnected/>

                <Footer />
                <ImageBackground/>
            </Content>
        </Container>
    );
};

export default Marketplace;
