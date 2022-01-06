import {Container, ModalContainer, Close, ButtonApply} from "./styles";
import React, {useState} from "react";
import Link from "../Link";
import PropTypes from "prop-types";
import FilterResponsiveDefault from "../FilterMarketplace/FilterResponsive";

function Modal(props: any) {
    console.log(props);
    return (
        <div>
            <Container>
                <ModalContainer>
                    <Close onClick={() => props.onClick()}>X</Close>
                    <FilterResponsiveDefault/>
                    <ButtonApply>
                        <Link onClick={() => props.onClick()}>Apply</Link>
                    </ButtonApply>
                </ModalContainer>
            </Container>

        </div>
    )
}

export default Modal;
