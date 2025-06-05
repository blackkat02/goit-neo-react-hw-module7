import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

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
