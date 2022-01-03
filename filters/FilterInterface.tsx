import { Order } from "../contexts/OrdersContext";

export default interface FilterInterface {
    clear: () => void,
    filter: () => void
}