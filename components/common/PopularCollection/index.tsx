import type { NextPage } from "next";

import {
    Container,
    Title,
    ContainerHeader,
    ContainerBody
} from "./styles";
import Link from "../Link";
import CardCollection from "../CardCollection";

const PopularCollection: NextPage = () => {
    return (
        <Container id="PopularColection">
            <ContainerHeader>
            <Title>
                Popular Collections
            </Title>
                <Link href={"/marketplace"}> View more</Link>
            </ContainerHeader>
            <ContainerBody>
                <CardCollection/>
                <CardCollection/>
                <CardCollection/>
                <CardCollection/>
            </ContainerBody>
        </Container>
    );
};

export default PopularCollection;
