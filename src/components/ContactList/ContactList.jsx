import Contact from '../Contact/Contact';
import { useDispatch } from "react-redux";
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = ({ name, number }, actions) => {
    dispatch(addContact({ name, number }));
    toast("Contact saved");
    actions.resetForm();
  };

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