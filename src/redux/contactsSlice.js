import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItems: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};

export const contactsReduser = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addItems, deleteItems, addFilter } = contactsSlice.actions;

//Selectors

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;