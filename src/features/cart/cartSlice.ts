import { createSlice, type PayloadAction, createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@/App/store"; // sizda hozir "@/App/store" bo‘lsa, o‘sha joyingizga moslab qo‘ying

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image?: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Omit<CartItem, "quantity">>) {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...action.payload, quantity: 1 });
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    clearCart() {
      return initialState;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// ---- Selectors (tezlik uchun) ----
export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotalQuantity = createSelector([selectCartItems], (items) =>
  items.reduce((sum, i) => sum + i.quantity, 0)
);

export const selectCartTotalPrice = createSelector([selectCartItems], (items) =>
  items.reduce((sum, i) => sum + i.price * i.quantity, 0)
);
