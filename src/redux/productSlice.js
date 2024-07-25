import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, quantity: 0 },
    { id: 2, quantity: 0 },
  ],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = productSlice.actions;
export default productSlice.reducer;
