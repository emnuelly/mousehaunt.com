import type { NextPage } from "next";

import {
    Select
} from "./styles";
import React, {useState} from "react";

const SelectPrices: NextPage = () => {

    return (
        <Select>
            <option value="" hidden>
                Select
            </option>
            <option value="1">$MHT</option>
            <option value="2">$MHT</option>
            <option value="3">$MHT</option>
            <option value="4">$MHT</option>
        </Select>


    );
};

export default SelectPrices;
