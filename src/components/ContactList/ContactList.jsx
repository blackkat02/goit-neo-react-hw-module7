import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
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