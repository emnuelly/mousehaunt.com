import type { NextPage } from "next";

import {
    Container,
    Image,
    Title,
    Subtitle,
    ContainerInfo,
    ContainerSubtitle,
    Value
} from "./styles";
import Link from "../Link";

const CardSuccess: NextPage = () => {
    return (
        <Container>
            <Image/>
            <ContainerInfo>
                <Title>You purchased XXXXX item</Title>
                <ContainerSubtitle>
                    <Subtitle>$MHT token amount:</Subtitle>
                    <Value>35</Value>
                </ContainerSubtitle>
                <ContainerSubtitle>
                    <Subtitle>$MHT token amount:</Subtitle>
                    <Value>35</Value>
                </ContainerSubtitle>
                <ContainerSubtitle>
                    <Subtitle>$MHT token amount:</Subtitle>
                    <Value>35</Value>
                </ContainerSubtitle>
                <ContainerSubtitle>
                    <Subtitle>$MHT token amount:</Subtitle>
                    <Value>35</Value>
                </ContainerSubtitle>
            </ContainerInfo>
            <Link>BACK TO MARKETPLACE</Link>
        </Container>

    );
};

export default CardSuccess;
