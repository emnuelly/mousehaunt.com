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
import Link from "../Link";
import Value from "../../../public/images/value.png";
import React from "react";
import Image from "next/image";

const CardShop: NextPage = () => {
    return (
        <Card>
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
                        <Image
                            alt="value"
                            src={Value}
                            width={"40px"}
                            height={"10px"}
                        ></Image>
                        <InfoBadgeValue>1</InfoBadgeValue>
                    </InfoBadgeImage>
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
