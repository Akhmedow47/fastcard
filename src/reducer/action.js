import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MyAxios } from '../utils/token';

export const API = 'http://37.27.29.18:8002';

export const getBrend = createAsyncThunk(
  'product/getBrend',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await MyAxios.get('/Product/get-products');
      return data.data.products; // ✅ array of products
    } catch (err) {
      console.error("API ERROR:", err);
      return rejectWithValue(err.response?.data || 'Something went wrong');
    }
  }
);

export const getProductById = createAsyncThunk(
  'product/getProductById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await MyAxios.get(`${API}/Product/get-product-by-id?id=${id}`);
      return data.data.product;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Something went wrong');
    }
  }
);

export const getCategory = createAsyncThunk(
  'product/getCategory',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await MyAxios.get(`${API}/Category/get-categories`);
      return data.data.categories;
    } catch (err) {
      console.error("API ERROR:", err);
      return rejectWithValue(err.response?.data || 'Something went wrong');
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
  data: [],          
  selectedProduct: null, 
  wishlist: [],      
  cart: [],          
  categories: [],    
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setWishList: (state, action) => {
      const product = action.payload;
      const exists = state.wishlist.find((p) => p.id === product.id);
      if (exists) {
        state.wishlist = state.wishlist.filter((p) => p.id !== product.id);
      } else {
        state.wishlist.push(product);
      }
    },
    addToCart: (state, action) => {
      const productId = action.payload;
      if (!state.cart.includes(productId)) {
        state.cart.push(productId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
    
      .addCase(getBrend.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBrend.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getBrend.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});


export const { setWishList, addToCart } = productSlice.actions;


export default productSlice.reducer;
