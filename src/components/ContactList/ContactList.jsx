import Contact from '../Contact/Contact';
import { useDispatch } from "react-redux";
import styles from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = ({ contacts, onDelete }) => {
  const dispatch = useDispatch();

  if (!contacts.length) {
    return <div className={styles.status}>No contacts found</div>;
  }

  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <Contact 
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;