import { createSlice } from '@reduxjs/toolkit';
import { getContactsSliceThunk, createContactsSliceThunk, removeContactsSliceThunk } from "./contactsOps";

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContactsSliceThunk.fulfilled, (state, { payload }) => {
        state.data = payload
      })
      .addCase(createContactsSliceThunk.fulfilled, (state, { payload }) => {
        state.data.push(payload)
      })
      .addCase(removeContactsSliceThunk.fulfilled, (state, { payload }) => {
        state.data.push(payload)
      })
},
})

export const contactsSliceReducer = contactsSlice.reducer

export const selectContacts = (state) => {
  return state.contacts
}

export const selectContactsData = (state) => {
  return state.acontacts.data
}

export const selectNumSum = (state) => {
  return state.articles.number1 + state.articles.number2
}

export const selectNumOne = (state) => state.articles.number1
export const selectNumTwo = (state) => state.articles.number2

export const selectFilteredArticles = (state) => {
  console.log('selectFilteredArticles')

  const data = state.contacts.data
  const searchValue = selectSearchValue(state)
  return data.filter((el) => el.name.includes(searchValue))
}

export const selectMemoFilteredArticles = createSelector(
  [selectArticlesData, selectSearchValue],
  (data, searchValue) => {
    console.log('selectMemoFilteredArticles')
    return data.filter((el) => el.name.includes(searchValue))
  }
)
// const contactsSliceReducer = createSlice({
//   name: 'contacts',
//   initialState: { 
//     items: [],
//     loading: false,
//     error: null },
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.items.push(action.payload);
//       },
//       prepare({ name, number }) {
//         return {
//           payload: {
//             id,
//             name,
//             number
//           }
//         };
//       }
//     },
//     deleteContact(state, action) {
//       state.items = state.items.filter(contact => contact.id !== action.payload);
//     }
//   }
// });

// export const { addContact, deleteContact } = contactsSliceReducer.actions;
// export default contactsSliceReducer.reducer;
