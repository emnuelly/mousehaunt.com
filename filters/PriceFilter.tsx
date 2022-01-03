import { filter } from "lodash";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import SliderFilter from "../components/common/SliderFilter";
import { Order, OrdersContext } from "../contexts/OrdersContext";
import FilterInterface from "./FilterInterface";

export const PriceFilter = () =>  {
    
    const { orders, setOrders, getOrders } = useContext(OrdersContext);
    const [value, setValue] = useState<number>(0);
    
    function clear() {
       setValue(0);
    }

    async function valueChanged(value:number) {
        setValue(value)
    }

    async function filter() {
        const freshOrders = await getOrders()
        console.log("orders antes de filtrar")
        console.log(freshOrders);
        let newOrders = freshOrders.filter(current => {
            return parseFloat(current.priceInWei) < value;
        });

        setOrders(newOrders)
        console.log("orders dps de filtrar")
        console.log(orders);

    }

    useEffect(() => {
        filter();
    },[value])


    return (
        <SliderFilter 
            filterChange={valueChanged}
            title={"Price range (WBNB)"}
            id={"price-range"} min={1} max={100} step={1} value={value}/>
    );

    
}