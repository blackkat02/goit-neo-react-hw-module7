import { FaUser, FaPhone, FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeContactsSliceThunk } from '../../redux/contactsOps';
import styles from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeContactsSliceThunk(id));
  };

  return (
    <li className={styles.item}>
      <div className={styles.contactInfo}>
        <div className={styles.infoRow}>
          <FaUser className={styles.icon} />
          <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.infoRow}>
          <FaPhone className={styles.icon} />
          <span className={styles.number}>{number}</span>
        </div>
      </div>

      <button
        className={styles.deleteBtn}
        onClick={handleDelete}
        aria-label="Видалити контакт"
      >
        <FaRegTrashAlt className={styles.btnIcon} />
        <span className={styles.btnText}>Delete</span>
      </button>
    </li>
  );
};

export default Contact;