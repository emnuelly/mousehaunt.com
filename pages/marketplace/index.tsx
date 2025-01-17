import type { NextPage } from "next";
import Head from "next/head";
import {
    Container, Content, ImageBackground, Body, Title, Subtitle,
    Cards, AlignCards, ButtonMore, CardSpace,ContentResponsive, TitleResponsive, SizeButton
} from "./styles";
import Footer from "../../components/common/Footer";
import React, {useContext, useEffect, useState} from "react";
import CardShop from "../../components/common/CardShop";
import Link from "../../components/common/Link";
import RemainConnected from "../../components/common/RemainConnected";
import Modal from "../../components/common/ModalFilter/Modal";
import { OrdersContext } from "../../contexts/OrdersContext";
import HeaderDefault from "../../components/common/HeaderDefault/HeaderDefault";
import FilterDefault from "../../components/common/FilterMarketplace/FilterDefault";

const Marketplace: NextPage = () => {
    const [showMe, setShowMe] = useState(false);
    const { orders, getOrders, page, setPage } = useContext(OrdersContext)

    function loadMore() {
        setPage(page + 1)
    }

    useEffect(() => {
        getOrders()
    },[page])

    function toggle() {
        setShowMe(!showMe);
    }

    return (
        <Container id={"Marketplace"}>
            <Head>
                <title>Mouse Haunt</title>
            </Head>
            <HeaderDefault/>
            <Content>
                <Title>NFT MARKETPLACE</Title>
                <ContentResponsive>
                    <TitleResponsive>NFT MARKETPLACE</TitleResponsive>
                    <SizeButton><Link onClick={toggle}>FILTERS</Link></SizeButton>
                </ContentResponsive>
                {showMe ? <Modal onClick={toggle}/> : null}
                <Subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis mauris in vitae, scelerisque. Neque adipiscing sed tortor eu nulla
                </Subtitle>
                <Body>
                    <FilterDefault/>
                    <Cards>
                        <AlignCards>
                            {orders.map((current) => {
                                return (
                                <CardSpace key={current.id}>
                                    <CardShop order={current} />
                                </CardSpace>
                                )
                            })}
                        </AlignCards>
                        <ButtonMore>
                            <Link onClick={loadMore}>LOAD MORE</Link>
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
