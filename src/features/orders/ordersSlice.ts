import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface OrderItem {
  title: string
  price: number
  quantity: number
}

export interface Order {
  id: string
  items: OrderItem[]
  total: number
  status: "new" | "processing" | "done"
  createdAt: string
}

interface OrdersState {
  orders: Order[]
}

const initialState: OrdersState = {
  orders: JSON.parse(localStorage.getItem("orders") || "[]"),
}

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<Order>) {
      state.orders.unshift(action.payload)
      localStorage.setItem("orders", JSON.stringify(state.orders))
    },

    updateOrderStatus(
      state,
      action: PayloadAction<{ id: string; status: Order["status"] }>
    ) {
      const order = state.orders.find(o => o.id === action.payload.id)
      if (order) {
        order.status = action.payload.status
        localStorage.setItem("orders", JSON.stringify(state.orders))
      }
    },
  },
})

export const { addOrder, updateOrderStatus } = ordersSlice.actions
export default ordersSlice.reducer
