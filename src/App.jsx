import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import styles from './App.module.css';
import { getContactsSliceThunk } from './redux/contactsOps';
import { selectIsLoading, selectError } from './redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContactsSliceThunk());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      {isLoading && <p className={styles.status}>Loading contacts...</p>}
      {error && <p className={styles.status}>Error: {error}</p>}
      {!isLoading && !error && <ContactList />}
    </div>
  );
};

export default App;
