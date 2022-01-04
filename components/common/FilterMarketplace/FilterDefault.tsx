import type { NextPage } from "next";

import {
    Filter,
    InputSearch,
    HeaderTitle,
    FilterText,
    ClearText,
    FormFilter,
} from "./styles";

import React, {ReactNode, useState} from "react";
import FilterManager from "../../../services/FilterManager";


const FilterDefault: NextPage = () => {
    const [filters, setFilters] = useState<ReactNode[]>(FilterManager.getActiveFilters());

    function clear() {
        window.location.reload()
    }

    return (
        <Filter>
            <HeaderTitle>
                 <FilterText>FILTERS</FilterText>
                 <ClearText onClick={clear}>Clear All</ClearText>
            </HeaderTitle>
            <FormFilter>
                {filters}
            </FormFilter>
        </Filter>
    );
};

export default FilterDefault;
