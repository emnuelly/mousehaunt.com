import type { NextPage } from "next";
import Head from "next/head";

import {
    Filter,
    InputSearch,
    HeaderTitle,
    FilterText,
    ClearText,
    FormFilter,
} from "./styles";

import React, {useState} from "react";
import CardSearchTemplate from "../CardsSearch/CardSearchTemplate";
import SliderFilter from "../SliderFilter";


const FilterDefault: NextPage = () => {

    return (
        <Filter>
                        <HeaderTitle>
                            <FilterText>FILTERS</FilterText>
                            <ClearText>Clear All</ClearText>
                        </HeaderTitle>
                        <FormFilter>
                            <InputSearch id={"search"} placeholder={"Search"}/>
                            <CardSearchTemplate title={"Heroes"} textsCheckbox={"Custom"}/>
                            <CardSearchTemplate title={"Rarity"} textsCheckbox={"Custom"}/>
                            <CardSearchTemplate title={"Skin Rarity"} textsCheckbox={"Custom"}/>
                            <SliderFilter title={"Level"} id={"level"} />
                            <CardSearchTemplate title={"Trophy Class"} textsCheckbox={"Custom"}/>
                            <SliderFilter title={"Price range (WBNB)"} id={"price-range"}/>

                        </FormFilter>
                    </Filter>
    );
};

export default FilterDefault;
