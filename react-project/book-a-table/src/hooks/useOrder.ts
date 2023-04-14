import { useState } from "react";
import { dishList } from "../components/utils/data";

export type Add = {
  name: string;
  price: number;
};

export type Order = {
  customerId: string;
  dishId: string;
  qty: number;
  adds?: Add[];
  price: number;
};

const useOrder = () => {
  const [orders, setOrders] = useState([] as Order[]);

  const updateOrderPrice = (order: Order) => {
    const dishPrice =
      dishList.find((dish) => dish.id === order.dishId)?.price ?? 0;
    const addsTotal =
      order.adds?.reduce((accumulated, add) => {
        return (accumulated += add.price);
      }, 0) ?? 0;
    return { ...order, ...{ price: order.qty * dishPrice + addsTotal } };
  };

  const addOrder = (item: Order) => {
    const newOrder = updateOrderPrice(item);
    setOrders((items) => [...items, newOrder]);
  };

  const deleteOrder = (itemId: string, customerId: string) => {
    const filteredItems = orders.filter(
      (order) => order.dishId !== itemId && order.customerId !== customerId
    );
    setOrders([...filteredItems]);
  };

  return { orders, addOrder, deleteOrder };
};

export { useOrder };
