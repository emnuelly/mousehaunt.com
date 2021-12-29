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
import Link from "../Link";
import Value from "../../../public/images/value.png";
import React from "react";
import Image from "next/image";

const CardShop: NextPage = () => {
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
                        0,45 $MHT
                    </InfoValue>
                    <InfoDollar>
                        8,324 USD
                    </InfoDollar>
                </InfoContainerValue>
            </InfoContainer>
        </Card>


    );
};

export default CardShop;
