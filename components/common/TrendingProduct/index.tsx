import type { NextPage } from "next";

import {
    Container,
    Title,
    ContainerHeader,
    ContainerBody
} from "./styles";
import Link from "../Link";
import CardShop from "../CardShop";

const TrendingProduct: NextPage = () => {
    return (
        <Container id="TrendingProduct">
            <ContainerHeader>
                <Title>
                    Trending Products
                </Title>
                <Link> View more</Link>
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
