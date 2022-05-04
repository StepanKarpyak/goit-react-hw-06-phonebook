import { createSlice } from '@reduxjs/toolkit';

export const PhonebookSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addItem, deleteItem, updateFilter } = PhonebookSlice.actions;