import { useId } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const searchNameFieldId = useId();
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <label htmlFor={searchNameFieldId} className={styles.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        id={searchNameFieldId}
        className={styles.input}
        placeholder="Enter name..."
        onChange={handleChange}
        value={filterValue}
      />
    </div>
  );
};

export default SearchBox;