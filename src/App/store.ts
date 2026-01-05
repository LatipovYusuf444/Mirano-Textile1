import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/features/cart/cartSlice";
import ordersReducer from "@/features/orders/ordersSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: ordersReducer,
  },
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// ✅ orders localStorage persist (qotmasligi uchun faqat o‘zgarganda yozadi)
let prevOrdersJson = "";
store.subscribe(() => {
  const state = store.getState();

  const nextOrdersJson = JSON.stringify(state.orders.orders);
  if (nextOrdersJson !== prevOrdersJson) {
    localStorage.setItem("orders", nextOrdersJson);
    prevOrdersJson = nextOrdersJson;
  }
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
