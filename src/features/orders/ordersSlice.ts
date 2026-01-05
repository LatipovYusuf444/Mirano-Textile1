import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import api, { toApiError, type ApiError } from "@/lib/axios";
import type { RootState } from "@/App/store";

export interface OrderItem {
  title: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: "new" | "processing" | "done";
  createdAt: string;
}

interface OrdersState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const loadOrders = (): Order[] => {
  try {
    return JSON.parse(localStorage.getItem("orders") || "[]");
  } catch {
    return [];
  }
};

const initialState: OrdersState = {
  orders: loadOrders(),
  loading: false,
  error: null,
};

// ✅ BACKENDGA POST: /orders/ (endpoint nomi sizda boshqacha bo‘lishi mumkin)
export const createOrder = createAsyncThunk<
  Order, // return type
  { items: OrderItem[]; total: number }, // payload
  { rejectValue: ApiError }
>("orders/createOrder", async (payload, { rejectWithValue }) => {
  try {
    const { data } = await api.post<Order>("orders/", {
      items: payload.items,
      total: payload.total,
    });
    return data;
  } catch (err) {
    return rejectWithValue(toApiError(err));
  }
});

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    // offline/local order qo‘shish kerak bo‘lsa:
    addOrderLocal(state, action: PayloadAction<Order>) {
      state.orders.unshift(action.payload);
    },

    updateOrderStatus(state, action: PayloadAction<{ id: string; status: Order["status"] }>) {
      const order = state.orders.find((o) => o.id === action.payload.id);
      if (order) order.status = action.payload.status;
    },

    clearOrdersError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.unshift(action.payload);
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Order yuborishda xato";
      });
  },
});

export const { addOrderLocal, updateOrderStatus, clearOrdersError } = ordersSlice.actions;
export default ordersSlice.reducer;

// selectors
export const selectOrders = (state: RootState) => state.orders.orders;
export const selectOrdersLoading = (state: RootState) => state.orders.loading;
export const selectOrdersError = (state: RootState) => state.orders.error;
