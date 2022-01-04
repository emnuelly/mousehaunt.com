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
import CheckBoxDefault from "../CheckboxDefault/CheckboxDefault";

const Checkbox = () => {
    return (
        <Container>

            <CheckboxContainer>
                <Text>Sell as a bundle</Text>
                <CheckBoxDefault/>
            </CheckboxContainer>
            <CheckboxContainer>
                <ColumnContainer>
                    <Text>Reserve for specific buyer</Text>
                    <Subtitle>This item can be purchased as soon as it’s listed</Subtitle>
                </ColumnContainer>
                <CheckBoxDefault/>
            </CheckboxContainer>
        </Container>

    )
};

export default Checkbox;
