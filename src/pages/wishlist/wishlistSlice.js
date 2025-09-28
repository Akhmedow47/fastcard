// src/pages/wishlist/wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadFromLocal = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToLocal = (state) => {
  localStorage.setItem("wishlist", JSON.stringify(state.items));
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: loadFromLocal(),
  },
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        saveToLocal(state);
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      saveToLocal(state);
    },
    clearWishlist: (state) => {
      state.items = [];
      saveToLocal(state);
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
