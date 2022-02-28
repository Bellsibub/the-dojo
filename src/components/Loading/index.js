// styles
import styles from './Loading.module.css';

const Loading = ({ text, contained }) => {
  return (
    <div className={`${contained ? styles.contained : styles.overlay}`}>
      <div className={styles.container}>
        <div className={styles.text}>{text}</div>
        <div className={styles.loading}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
