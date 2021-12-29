import type { NextPage } from "next";
import Head from "next/head";

import React, {useState} from "react";
import
{
    CheckboxContainer,
    HidCheckbox,
    Text,
    Container,
    Subtitle,
    ColumnContainer
} from './styles';

import check from "../../../public/images/check.png";

const Checkbox = () => {
    const [checked, setChecked] = useState(false);

    function handleCheckboxChange(){
        setChecked(!checked);
    }

    return (
        <Container>
            <CheckboxContainer onClick={handleCheckboxChange}>
                <Text>Sell as a bundle</Text>
                <HidCheckbox onChange={handleCheckboxChange}/>
            </CheckboxContainer>
            <CheckboxContainer onClick={handleCheckboxChange}>
                <ColumnContainer>
                    <Text>Reserve for specific buyer</Text>
                    <Subtitle>This item can be purchased as soon as it’s listed</Subtitle>
                </ColumnContainer>
                <HidCheckbox onChange={handleCheckboxChange}/>
            </CheckboxContainer>
        </Container>

    )
};

export default Checkbox;
