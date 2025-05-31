import { configureStore } from '@reduxjs/toolkit';
import contactListReducer from './contactsSlice';
import filtersReducer from './filtersSlice';



export const store = configureStore({
  reducer: {
    contacts: contactListReducer,
    filters: filtersReducer,
  },
});

const rootReducer = {
  contacts: contactListReducer,
  filters: filtersReducer,
}

// export const store = configureStore({
//   reducer: rootReducer,
// })

// const store = configureStore({ reducer: { auth: authReducer, posts: postsReducer } });