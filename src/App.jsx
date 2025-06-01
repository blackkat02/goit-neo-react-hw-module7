import { useDispatch, useSelector } from 'react-redux';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import styles from './App.module.css';
import { deleteContact } from './redux/contactsSlice';
import { changeFilter } from './redux/filtersSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  const handleSearch = (term) => {
    dispatch(changeFilter(term));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox onSearch={handleSearch} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;