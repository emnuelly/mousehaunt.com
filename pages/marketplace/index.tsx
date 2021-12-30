import type { NextPage } from "next";
import Head from "next/head";

import {
    Container,
    Content,
    ImageBackground,
    Body,
    Title,
    Subtitle,
    Cards,
    AlignCards,
    ButtonMore,
    CardSpace,ContentResponsive, TitleResponsive, SizeButton
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
import FilterDefault from "../../components/common/FilterMarketplace/FilterDefault";
import Modal from "../../components/common/Modal";

const Marketplace: NextPage = () => {
    const [showMe, setShowMe] = useState(false);

    function toggle() {
        setShowMe(true);
    }

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
                <ContentResponsive>
                    <TitleResponsive>NFT MARKETPLACE</TitleResponsive>
                    <SizeButton><Link onClick={toggle}>FILTERS</Link></SizeButton>
                </ContentResponsive>
                    <Modal show={showMe}/>
                <Subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis mauris in vitae, scelerisque. Neque adipiscing sed tortor eu nulla
                </Subtitle>
                <Body>
                    <FilterDefault/>
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
