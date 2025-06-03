import { createSlice } from '@reduxjs/toolkit';
import { fetchContactList } from "./contactsOps";

const contactsSliceReducer = createSlice({
  name: 'contacts',
  initialState: { 
    items: [],
    loading: false,
    error: null },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id,
            name,
            number
          }
        };
      }
    },
    deleteContact(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    }
  }
});

export const { addContact, deleteContact } = contactsSliceReducer.actions;
export default contactsSliceReducer.reducer;
