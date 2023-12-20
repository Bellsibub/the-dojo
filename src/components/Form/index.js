import _ from 'lodash';
import { useState } from 'react';
import Select from 'react-select';

// components
import { BtnMain, ErrorMessage, DataSelect } from 'components';

// styles
import styles from './Form.module.css';

const Form = ({ _fields, title, handleSubmit, request, submitButton }) => {
  const [fields, setFields] = useState(_fields);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const setFieldByIndex = (i, value) => {
    let shCopy = { ...fields };
    shCopy[i].value = value;
    setFields(shCopy);
    
    // checks the fields to see if there are any left with empty values
    setAllFieldsFilled(!_.has(_.countBy(fields, 'value'), ""));    
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(fields);
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h2>{title}</h2>
      {_.map(fields, (field, i) => (
        <label key={field.type + field.title} className={styles.inputWrapper}>
          <span className={styles.inputTitle}>{field.title}</span>

          <>
            {field.type === 'textarea' ? (
              <textarea
                required
                value={fields[i].value}
                onChange={(e) => setFieldByIndex(i, e.target.value)}
              />
            ) : field.type === 'select' ? (
              <Select
                options={field.options}
                onChange={(e) => setFieldByIndex(i, e.value)}
              />
            ) : field.type === 'file' ? (
              <input
                required
                type={field.type}
                onChange={(e) => {
                  setFieldByIndex(i, e.target.files[0]);
                }}
              />
            ) : field.type === 'dataselect' ? (
              <DataSelect
                collection={field.datacollection}
                onChange={(e) => setFieldByIndex(i, e)}
                isMulti
              />
            ) : (
              <input
                required
                type={field.type}
                value={fields[i].value}
                onChange={(e) => setFieldByIndex(i, e.target.value)}
              />
            )}
          </>
        </label>
      ))}
      {request && (
        <>
          {request.error && <ErrorMessage msg={request.error} />}
          <BtnMain
            type="submit"
            disabled={request.loading || !allFieldsFilled}
          >
            {!submitButton
              ? 'Submit'
              : request.loading
              ? 'Loading...'
              : submitButton}
          </BtnMain>
        </>
      )}
    </form>
  );
};

export default Form;
