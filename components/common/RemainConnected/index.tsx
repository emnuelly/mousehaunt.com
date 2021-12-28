import type { NextPage } from "next";

import {
    Container,
    ImageGold,
    ImageMouse,
    BodyCenter,
    Input,
    ContainerEmail,
    Title,
    Subtitle
} from "./styles";
import Image from "next/image";
import Gold from "../../../public/images/gold.png";
import Mouse from "../../../public/images/mouse.png";
import React from "react";
import Link from "../Link";

const RemainConnected: NextPage = () => {
    return (
        <Container id="RemainConnected">
            <ImageGold>
                <Image
                    alt="value"
                    src={Gold}
                    width={"400px"}
                    height={"372px"}
                ></Image>
            </ImageGold>
            <BodyCenter>
                <Title>Remain Connected</Title>
                <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis mauris in vitae, scelerisque. Neque adipiscing sed tortor eu nulla </Subtitle>
                <ContainerEmail>
                <Input />
                <Link>Subscribe</Link>
                </ContainerEmail>
            </BodyCenter>
            <ImageMouse>
                <Image
                    alt="value"
                    src={Mouse}
                    width={"310px"}
                    height={"357px"}
                ></Image>
            </ImageMouse>
        </Container>
    );
};

export default RemainConnected;
