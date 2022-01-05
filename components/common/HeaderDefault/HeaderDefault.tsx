import React, { useContext } from "react";
import {ContainerHeader, Header, AlignLogo} from "./styles";
import Logo from "../Logo";
import Sections from "../Sections/Sections";
import Menu from "../BurgerMenu";
import Link from "../Link";
import {ButtonStarted} from "../BurgerMenu/styles";

function HeaderDefault() {
    return (
        <ContainerHeader>
            <Header>
                <AlignLogo>
                <Logo />
                <ButtonStarted>
                    <Link href="/marketplace">
                        Get started
                    </Link>
                </ButtonStarted>
                </AlignLogo>
                <Sections />
                <Menu />
            </Header>
        </ContainerHeader>
    );
}

export default HeaderDefault;
