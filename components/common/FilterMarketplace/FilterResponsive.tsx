import type { NextPage } from "next";

import {
    Filter,
    InputSearch,
    HeaderTitle,
    FilterText,
    ClearText,
    FormFilter,
    FilterResponsive
} from "./styles";

import React, {ReactNode, useState} from "react";
import FilterManager from "../../../services/FilterManager";


const FilterResponsiveDefault: NextPage = () => {
    const [filters, setFilters] = useState<ReactNode[]>(FilterManager.getActiveFilters());

    function clear() {
        window.location.reload()
    }

    return (
        <FilterResponsive>
            <HeaderTitle>
                <FilterText>FILTERS</FilterText>
                <ClearText onClick={clear}>Clear All</ClearText>
            </HeaderTitle>
            <FormFilter>
                {filters}
            </FormFilter>
        </FilterResponsive>
    );
};

export default FilterResponsiveDefault;
