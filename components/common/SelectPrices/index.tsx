import type { NextPage } from "next";

// import {
//     Card,
//     Imagem,
//     InfoContainer,
//     InfoContainerUp,
//     InfoContainerTitle,
//     InfoTitle,
//     InfoSubtitle,
//     InfoBadgeImage, InfoBadgeValue, InfoContainerValue, InfoValue, InfoDollar,
// } from "./styles";
import React, {useState} from "react";
import Select from 'react-select';

const SelectPrices: NextPage = () => {

    const data = [
        {
            value: 1,
            label: "cerulean"
        },
        {
            value: 2,
            label: "fuchsia rose"
        },
        {
            value: 3,
            label: "true red"
        },
        {
            value: 4,
            label: "aqua sky"
        },
        {
            value: 5,
            label: "tigerlily"
        },
        {
            value: 6,
            label: "blue turquoise"
        }
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption(e);
    }
    return (
        <Select
            placeholder="Select"
            value={selectedOption}
            options={data}
            onChange={handleChange}
        />


    );
};

export default SelectPrices;
