import type { NextPage } from "next";

import {
    Container,
    Title,
    ContainerHeader,
    ContainerBody
} from "./styles";
import Link from "../Link";
import CardShop from "../CardShop";
import {FlexEnd} from "../PopularCollection/styles";

const TrendingProduct: NextPage = () => {
    return (
        <Container id="TrendingProduct">
            <ContainerHeader>
                <Title>
                    Trending Products
                </Title>
                <FlexEnd>
                    <Link href={"/marketplace"}> View more</Link>
                </FlexEnd>
            </ContainerHeader>
            <ContainerBody>
                <CardShop/>
                <CardShop/>
                <CardShop/>
                <CardShop/>
            </ContainerBody>
        </Container>
    );
};

export default TrendingProduct;
