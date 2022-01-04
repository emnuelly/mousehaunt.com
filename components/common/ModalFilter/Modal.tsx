import {Container, ModalContainer, Close, Filter, HeaderTitle, FilterText, ClearText, FormFilter, SizeButton} from "./styles";
import React, {useState} from "react";
import Link from "../Link";
import PropTypes from "prop-types";

Modal.propTypes = {
    show: PropTypes.bool,
};

function Modal(props: any) {
    const {show} = props;

    const [showMe, setShowMe] = useState(false);

    function toggle() {
        setShowMe(!showMe);
    }

    return (
        <div style={{display: showMe? "none":"block"}}>
            <Container>
                <ModalContainer>
                    <Close onClick={toggle}>X</Close>
                    <Filter>
                        <HeaderTitle>
                            <FilterText>FILTERS</FilterText>
                            <ClearText>Clear All</ClearText>
                        </HeaderTitle>
                        <SizeButton><Link>Apply</Link></SizeButton>
                    </Filter>
                </ModalContainer>
            </Container>
        </div>
    )
}

export default Modal;
