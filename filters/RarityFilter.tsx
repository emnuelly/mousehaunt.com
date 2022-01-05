import { filter } from "lodash";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import CheckBoxFilter from "../components/common/CardsSearch/CheckBoxFilter";
import { Order, OrdersContext } from "../contexts/OrdersContext";


export const RarityFilter = () =>  {
    
    const { orders, setOrders, getOrders } = useContext(OrdersContext);
    const [value, setValue] = useState<string>("");
    const options = ['legendary','rare', 'epic', 'genesis']
    
    function clear() {
       setValue("");
    }

    async function valueChanged(value:string) {
        setValue(value)
    }

    async function filter() {

        const ordersWithoutFilters = await getOrders()
        setOrders(ordersWithoutFilters)

    }

    useEffect(() => {
        filter();
    },[value])


    return (
        <CheckBoxFilter title={"Heroes"} options={options}/>
    );

    
}