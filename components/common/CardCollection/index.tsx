import type { NextPage } from "next";

import {
    Container,
    Image,
    Title,
    Subtitle,
    ContainerTitle
} from "./styles";
import Link from "../Link";

const CardCollection: NextPage = () => {
    return (
            <Container>
                <Image/>
                <ContainerTitle>
                    <Title>Super New Collection</Title>
                    <Subtitle>Owner: <b>Name Surname</b></Subtitle>
                </ContainerTitle>
            </Container>

    );
};

export default CardCollection;
