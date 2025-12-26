import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "@/features/cart/cartSlice"
import ordersReducer from "@/features/orders/ordersSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: ordersReducer,
  },
  devTools: import.meta.env.DEV, // productionda o‘chadi
})

// types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
