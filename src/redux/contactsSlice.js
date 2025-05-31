import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contactList',
  initialState: {
    contactList: []
  },
  reducers: {
    addContactList(state, { payload }) {
      state.contacts.push(payload);
    },
    deleteContactList(state, { payload }) {
      state.contacts = state.contacts.map((contact) => {
        if (contact.id === payload.id) {
          state.contacts = state.contacts.filter((contact) => contact.id !== payload)
        }
      });
    },
  },
});

export const { addContactList, deleteContactList } = contactsSlice.actions;
export default contactsSlice.reducer;

