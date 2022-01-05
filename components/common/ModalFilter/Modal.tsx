import {Container, ModalContainer, Close, ButtonApply} from "./styles";
import React, {useState} from "react";
import Link from "../Link";
import PropTypes from "prop-types";
import FilterResponsiveDefault from "../FilterMarketplace/FilterResponsive";

Modal.propTypes = {
    show: PropTypes.bool,
};

function Modal(props: any) {

    const [showMe, setShowMe] = useState(false);

    function toggle() {
        setShowMe(!showMe);
    }

    return (
        <div style={{display: showMe? "none":"block"}}>
            <Container>
                <ModalContainer>
                    <Close onClick={toggle}>X</Close>
                    <FilterResponsiveDefault/>
                    <ButtonApply>
                        <Link onClick={toggle}>Apply</Link>
                    </ButtonApply>
                </ModalContainer>
            </Container>

        </div>
    )
}

export default Modal;
