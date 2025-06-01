import { useId } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from "formik";
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
    <Formik
      initialValues={{ username: filterValue }}
      enableReinitialize={true}
      onSubmit={() => {}}
    >
      {() => (
        <Form className={styles.searchForm}>
          <div className={styles.formGroup}>
            <label htmlFor={searchNameFieldId} className={styles.label}>
              Find contacts by name
            </label>
            <Field 
              type="text" 
              name="username" 
              id={searchNameFieldId}
              className={styles.input}
              placeholder="Enter name..."
              onChange={handleChange}
              value={filterValue}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBox;