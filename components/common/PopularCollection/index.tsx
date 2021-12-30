import type { NextPage } from "next";

import {
    Container,
    Title,
    ContainerHeader,
    ContainerBody,FlexEnd
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
                <FlexEnd>
                    <Link href={"/marketplace"}> View more</Link>
                </FlexEnd>
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
