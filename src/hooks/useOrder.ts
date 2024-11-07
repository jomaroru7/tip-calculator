import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [total, setTotal] = useState<OrderItem['quantity']>(0)

    const addItem = (item: MenuItem) => {

        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if (itemExist) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
            setOrder(updatedOrder)
            return
        }
        const newItem: OrderItem = { ...item, quantity: 1 }
        setOrder([...order, newItem])
    }

    const removeItem = (id: MenuItem['id']) =>{
        const updatedOrder = order.filter(orderItem => orderItem.id !== id)
        setOrder(updatedOrder)
    }



    return {
        addItem,
        removeItem,
        order
    }

}
