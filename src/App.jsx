import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import styles from './App.module.css';
import { getContactsSliceThunk, removeContactsSliceThunk } from './redux/contactsOps';
import { changeFilter } from './redux/filtersSlice';
import { selectContacts, selectIsLoading, selectError } from './redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(state => state.filters.name);

  useEffect(() => {
    dispatch(getContactsSliceThunk());
  }, [dispatch]);

  const handleSearch = (term) => {
    dispatch(changeFilter(term));
  };

  const handleDeleteContact = (id) => {
    dispatch(removeContactsSliceThunk(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox onSearch={handleSearch} />
      
      {isLoading && <div className={styles.status}>Loading contacts...</div>}
      {error && <div className={styles.status}>Error: {error}</div>}
      {!isLoading && !error && (
        <ContactList 
          contacts={filteredContacts} 
          onDelete={handleDeleteContact} 
        />
      )}
    </div>
  );
};

export default App;