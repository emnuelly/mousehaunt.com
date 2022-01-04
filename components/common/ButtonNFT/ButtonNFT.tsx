import {CheckBox} from "./styles";
import React from "react";
import PropTypes from "prop-types";

ButtonNFT.propTypes = {
    option: PropTypes.string,
};

function ButtonNFT(props: any) {
    const {option} = props;

    return (
        <CheckBox>
            {option}
            <input type="checkbox"/>
            <span/>
        </CheckBox>
    );
};


export default ButtonNFT;
