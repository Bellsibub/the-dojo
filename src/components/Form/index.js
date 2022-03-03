import _ from 'lodash';
import { useState } from 'react';

// components
import { CardCentral, BtnMain } from 'components';

// styles
import styles from './Form.module.css';

const Form = ({ _fields, title, handleSubmit, request, submitButton }) => {
  const [fields, setFields] = useState(_fields);

  const setFieldByIndex = (i, value) => {
    let shCopy = { ...fields };
    shCopy[i].value = value;
    setFields(shCopy);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(fields);
  };

  return (
    <CardCentral>
      <form onSubmit={onSubmit}>
        <h2>{title}</h2>
        {_.map(fields, (field, i, k) => (
          <label key={field.type} className={styles.inputWrapper}>
            <span className={styles.inputTitle}>{field.title}</span>
            {field.updateType === 'file' && (
              <input
                required
                type={field.type}
                onChange={(e) => {
                  setFieldByIndex(i, e.target.files[0]);
                }}
              />
            )}
            {field.updateType === 'normal' && (
              <input
                required
                type={field.type}
                value={fields[i].value}
                onChange={(e) => setFieldByIndex(i, e.target.value, k)}
              />
            )}
          </label>
        ))}
        {request && (
          <>
            {request.error && <p className={styles.error}>{request.error}</p>}
            <BtnMain type="submit" disabled={request.loading}>
              {!submitButton
                ? 'Submit'
                : request.loading
                ? 'Loading...'
                : submitButton}
            </BtnMain>
          </>
        )}
      </form>
    </CardCentral>
  );
};

export default Form;
