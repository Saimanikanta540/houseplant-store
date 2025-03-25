import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems += 1;
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        state.totalItems -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        state.totalItems += action.payload.change;
        state.totalPrice += item.price * action.payload.change;
        item.quantity += action.payload.change;
        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== item.id);
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
