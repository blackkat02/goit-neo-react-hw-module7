import { useId } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createContactsSliceThunk } from '../../redux/contactsOps';
import styles from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be 50 characters or less")
    .required("Name is required"),
  number: Yup.string()
    .matches(
      /^[\d\s+()-]+$/,
      "Phone number can only contain numbers, +, -, (, ) and spaces"
    )
    .min(5, "Phone number must be at least 5 characters")
    .max(20, "Phone number must be 20 characters or less")
    .required("Phone number is required"),
});

const ContactForm = () => {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.contacts);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(createContactsSliceThunk({
      name: values.name,
      number: values.number,
    }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field 
              type="text" 
              name="name" 
              id={nameFieldId}
              className={`${styles.input} ${errors.name && touched.name ? styles.error : ''}`}
              disabled={isLoading}
            />
            <ErrorMessage name="name" component="div" className={styles.errorMessage} />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor={phoneFieldId}>Phone</label>
            <Field 
              type="tel" 
              name="number" 
              id={phoneFieldId}
              className={`${styles.input} ${errors.number && touched.number ? styles.error : ''}`}
              disabled={isLoading}
            />
            <ErrorMessage name="number" component="div" className={styles.errorMessage} />
          </div>
          
          <button 
            type="submit" 
            className={styles.button}
            disabled={isLoading || isSubmitting}
          >
            {isLoading ? 'Adding...' : 'Add Contact'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;