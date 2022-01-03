import type { NextPage } from "next";
import Router from 'next/router'

import {
    ContainerButton,
    Image,
} from "./styles";
import Link from "../Link";
import OrdersManager from "../../../services/OrdersManager";
import { useContext } from "react";
import { OrdersContext } from "../../../contexts/OrdersContext";

const ButtonSale = () => {

    const {selectedOrder} = useContext(OrdersContext)

    function executeOrder() {
        OrdersManager.executeOrder(selectedOrder);
        Router.push('/success')
    }

    return (
            <ContainerButton onClick={executeOrder}>
                <Image/> MAKE OFFER
            </ContainerButton>

    );
};

export default ButtonSale;
