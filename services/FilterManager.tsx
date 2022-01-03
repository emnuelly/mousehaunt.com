import { ReactNode } from "react";
import { AssetIdFilter } from "../filters/AssetIdFilter";
import FilterInterface from "../filters/FilterInterface";
import { IdFilter } from "../filters/IdFilter";
import {PriceFilter} from "../filters/PriceFilter";
import { RarityFilter } from "../filters/RarityFilter";

export default class FilterManager {
     
    static getActiveFilters(): ReactNode[] {
        return [
            ( <IdFilter />),
            ( <PriceFilter />),
            ( <RarityFilter />),
            ( <AssetIdFilter />)
            
        ];
    }
}