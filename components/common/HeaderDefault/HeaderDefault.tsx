import React, { useContext } from "react";
import {ContainerHeader, Header} from "./styles";
import Logo from "../Logo";
import Sections from "../Sections/Sections";
import Menu from "../BurgerMenu";

function HeaderDefault() {
    return (
        <ContainerHeader>
            <Header>
                <Logo />
                <Sections />
                <Menu />
            </Header>
        </ContainerHeader>
    );
}

export default HeaderDefault;
