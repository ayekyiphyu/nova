import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  sizes: string[];
}

interface ProductState {
  products: Product[];
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setProducts, setLoading } = productSlice.actions;
export default productSlice.reducer;
