import type { NextPage } from "next";

import {
    Card,
    Imagem,
    InfoContainer,
    InfoContainerUp,
    InfoContainerTitle,
    InfoTitle,
    InfoSubtitle,
    InfoBadgeImage, InfoBadgeValue, InfoContainerValue, InfoValue, InfoDollar,
} from "./styles";
import Link from "../../Link";
import Value from "../../../../public/images/value.png";
import React, {useContext} from "react";
import Image from "next/image";
import {OrdersContext} from "../../../../contexts/OrdersContext";

interface CardShopProps {
    price: number
}
const CardShop = ({price}: CardShopProps) => {

    const { mhtPrice, setSelectedOrder } = useContext(OrdersContext);

    return (
        <Card>
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
                </InfoContainerUp>
                <InfoContainerValue>
                    <InfoValue>
                        {price} $MHT
                    </InfoValue>
                    <InfoDollar>
                        {(price * mhtPrice).toFixed(5)} USD
                    </InfoDollar>
                </InfoContainerValue>
            </InfoContainer>
        </Card>


    );
};

export default CardShop;
