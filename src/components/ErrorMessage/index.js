import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ msg }) => {
  return (
    <div className={styles.container}>
      <p>{msg}</p>
    </div>
  );
};

export default ErrorMessage;
