import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    // Example initial state, this would typically come from an API
    { id: 1, quantity: 0 },
    { id: 2, quantity: 0 },
    // Add more products as needed
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
