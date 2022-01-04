import React from "react";
import PropTypes from "prop-types";
import {CheckBox} from "./styles";

CheckBoxDefault.propTypes = {
    option: PropTypes.string,
};

function CheckBoxDefault(props: any) {
    const {option} = props;

    return (
        <CheckBox>
            {option}
            <input type="checkbox"/>
            <span/>
        </CheckBox>
    );
};


export default CheckBoxDefault;