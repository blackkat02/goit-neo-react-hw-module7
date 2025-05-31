import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import Contact from '../Contact/Contact';
import { addContactList, deleteContactList } from '../../redux/contactsSlice'
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {

  const contactsState = useSelector((state) => state.contacts.contact)
  const dispatch = useDispatch()

  const handleAddContactList = (contact) => {
    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    }
    dispatch(addContactList(newContact))
  }

  const handleDelete = (id) => {
    dispatch(deleteContactList(id))
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;