import {Order} from '../contexts/OrdersContext'

export default class OrdersManager {
    
    static async getOrders(start = 0, count=10): Promise<Order[]> {
        
        const orders:Order[] = [];

        // here goes the logic the fetch all orders, remember to use isomorphic-fetch because of ssr with next.js

        let mockOrder1 = {
            id: '762',
            assetId: '5',
            seller: '0x12312312',
            amount: '5',
            nftAddress: '0x123123f1',
            priceInWei: '10',
            expiresAt: '12839123891',
        }
        let mockOrder2 = {
            id: '763',
            assetId: '6',
            seller: '0x12312312',
            amount: '5',
            nftAddress: '0x123123f1',
            priceInWei: '20',
            expiresAt: '12839123891',
        }
        let mockOrder3 = {
            id: '764',
            assetId: '7',
            seller: '0x12312312',
            amount: '5',
            nftAddress: '0x123123f1',
            priceInWei: '30',
            expiresAt: '12839123891',
        }
        let mockOrder4 = {
            id: '765',
            assetId: '11',
            seller: '0x12312312',
            amount: '5',
            nftAddress: '0x123123f1',
            priceInWei: '40',
            expiresAt: '12839123891',
        }



        orders.push(mockOrder1);
        orders.push(mockOrder2);
        orders.push(mockOrder3);
        orders.push(mockOrder4);

        let paginatedOrders =  orders.splice(start,count); 
        return paginatedOrders;
    }

    static cancelOrder(orderId: string) {

    }

    static executeOrder(order: Order | null | undefined) {
        console.log("execute order")
        console.log(order)
    }

    static createOrder(order: Order) {
        console.log("created order")
        console.log(order)
    }

    static Approve(order: Order) {
        console.log("approved")
        console.log(order)
    }

    static async getHeroOrders(): Promise<Order[]> {

        let orders = [];
        let mockOrder1 = {
            id: '123',
            assetId: '5',
            seller: '0x12312312',
            amount: '5',
            nftAddress: '0x123123f1',
            priceInWei: '10',
            expiresAt: '12839123891',
        }
        let mockOrder2 = {
            id: '456',
            assetId: '5',
            seller: '0x12312312',
            amount: '5',
            nftAddress: '0x123123f1',
            priceInWei: '10',
            expiresAt: '12839123891',
        }
        let mockOrder3 = {
            id: '789',
            assetId: '5',
            seller: '0x12312312',
            amount: '5',
            nftAddress: '0x123123f1',
            priceInWei: '10',
            expiresAt: '12839123891',
        }
        let mockOrder4 = {
            id: '333',
            assetId: '5',
            seller: '0x12312312',
            amount: '5',
            nftAddress: '0x123123f1',
            priceInWei: '10',
            expiresAt: '12839123891',
        }

        
        orders.push(mockOrder1);
        orders.push(mockOrder2);
        orders.push(mockOrder3);
        orders.push(mockOrder4);

        return orders;
    }
}

