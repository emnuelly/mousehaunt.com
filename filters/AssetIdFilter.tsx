import { filter } from "lodash";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { InputSearch } from "../components/common/Modal";
import SliderFilter from "../components/common/SliderFilter";
import { Order, OrdersContext } from "../contexts/OrdersContext";
import FilterInterface from "./FilterInterface";


export const AssetIdFilter = () =>  {
    
    const {  setOrders, getOrders } = useContext(OrdersContext);
    const [value, setValue] = useState<string>("");
    
    function clear() {
       setValue("");
    }

    async function valueChanged(value:string) {
        setValue(value)
    }

    async function filter() {

        const ordersWithoutFilters = await getOrders()

        if(value.length > 0) {
            let newOrders = ordersWithoutFilters.filter(current => {
                return current.assetId.indexOf(value) > -1
            });
    
            setOrders(newOrders)
        }else {
            setOrders(ordersWithoutFilters)
        }

    }

    useEffect(() => {
        filter();
    },[value])


    return (
        <InputSearch id={"search"} placeholder={"AssetId"} onChange={(event) => valueChanged(event?.target.value)} />
    );

    
}