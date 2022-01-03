import { createContext, ReactNode, useEffect, useState } from "react";
import OrdersManager from "../services/OrdersManager";

interface OrdersContextData {
    orders: Order[],
    heroOrders: Order[],
    page: number,
    setPage: (page:number) => void,
    pageLimit: number,
    getOrders: () => Promise<Order[]>,
    setOrders: (orders:Order[]) => void,
    mhtPrice: number,
    selectedOrder: Order | null | undefined,
    setSelectedOrder: (order:Order) => void
}

export const OrdersContext = createContext<OrdersContextData>({} as OrdersContextData);

interface Props {
    children: ReactNode;
}

export interface Order {
    id: string;
    assetId: string;
    seller: string;
    amount: string;
    nftAddress: string;
    priceInWei: string;
    expiresAt: string;
}

export const OrdersContextProvider = ({children} : Props)=> {

    const [ orders, setOrders ] = useState<Order[]>([]);
    const [ heroOrders, setHeroOrders ] = useState<Order[]>([]);
    const [selectedOrder , setSelectedOrder] = useState<Order>();
    const [page, setPage] = useState(1);
    const pageLimit = 10;
    const [mhtPrice, setMhtPrice] = useState<number>(0);

    async function getOrders(): Promise<Order[]> {
        return await OrdersManager.getOrders(0, pageLimit * page )
    }

    useEffect(() => {
        OrdersManager.getHeroOrders().then(orders => {
            setHeroOrders(orders);
        });
    },[page]);

    useEffect(() => {
        fetch('https://api.pancakeswap.info/api/v2/tokens/0x5Cb2C3Ed882E37DA610f9eF5b0FA25514d7bc85B').then(response => {
            response.json().then(body => {
                setMhtPrice(body.data.price)
            })
        });
    },[page]);

    return (
        <OrdersContext.Provider value={{
            orders,
            heroOrders,
            getOrders: getOrders,
            setOrders,
            page,
            setPage,
            pageLimit,
            mhtPrice,
            selectedOrder,
            setSelectedOrder
        }}>
            {children}
        </OrdersContext.Provider>
    )
}