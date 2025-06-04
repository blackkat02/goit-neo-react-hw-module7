import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts, selectIsLoading, selectError } from '../../redux/contactsSlice';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (isLoading) {
    return <div className={styles.status}>Loading contacts...</div>;
  }

  if (error) {
    return <div className={styles.status}>Error: {error}</div>;
  }

  if (!filteredContacts.length) {
    return <div className={styles.status}>No contacts found</div>;
  }

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <Contact 
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;