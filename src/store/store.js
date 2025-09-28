import { configureStore } from '@reduxjs/toolkit'
import productReducer from '@/reducer/action.js'
import wishlistReducer from '@/pages/wishlist/wishlistSlice.js'
import cartReducer from "@/pages/cart/cartSlice.js";

export const store = configureStore({
  reducer: {
	product:productReducer,
  wishlist:wishlistReducer,
  cart:cartReducer,
  },
})