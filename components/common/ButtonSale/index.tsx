import type { NextPage } from "next";

import {
    ContainerButton,
    Image,
} from "./styles";
import Link from "../Link";

const ButtonSale = () => {
    return (
            <ContainerButton href={"/success"}>
                <Image/> MAKE OFFER
            </ContainerButton>

    );
};

export default ButtonSale;
