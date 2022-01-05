import type { NextPage } from "next";

import {
    Card,
    Imagem,
    InfoContainer,
    InfoContainerUp,
    InfoContainerTitle,
    InfoTitle,
    InfoSubtitle,
    InfoBadgeImage, InfoBadgeValue, InfoContainerValue, InfoValue, InfoDollar, Like
} from "./styles";
import React, { useContext } from "react";
import { Order, OrdersContext } from "../../../contexts/OrdersContext";
import Router from 'next/router'

interface OrderProps {
    order: Order
}
const CardShop: NextPage = ({order}:OrderProps) => {

    const { mhtPrice, setSelectedOrder } = useContext(OrdersContext);

    function selectOrder() {
        setSelectedOrder(order);
        Router.push('/orderDetails')
    }

    return (
        <Card onClick={selectOrder}>
            <Like/>
            <Imagem/>
            <InfoContainer>
                <InfoContainerUp>
                    <InfoContainerTitle>
                        <InfoTitle>
                            Amazing Digital ART
                        </InfoTitle>
                        <InfoSubtitle>
                            posted 3 days ago
                        </InfoSubtitle>
                    </InfoContainerTitle>
                    <InfoBadgeImage>
                        <InfoBadgeValue>{order ? '#'+order.id: '-'}</InfoBadgeValue>
                    </InfoBadgeImage>
                </InfoContainerUp>
                <InfoContainerValue>
                    <InfoValue>
                        {order ? order.priceInWei: '' } $MHT
                    </InfoValue>
                    <InfoDollar>
                        {order ? ((parseFloat(order.priceInWei) * mhtPrice).toFixed(5)) : ''} USD
                    </InfoDollar>
                </InfoContainerValue>
            </InfoContainer>
        </Card>


    );
};

export default CardShop;
