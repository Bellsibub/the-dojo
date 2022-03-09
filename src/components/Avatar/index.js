import styles from './Avatar.module.css';

const Avatar = ({ src, outlined, outlinedPrimary }) => {
  return (
    <div className={`${styles.container} ${outlined && styles.outlined} ${outlinedPrimary && styles.outlinedPrimary}`}>
      <img src={src} alt="avatar" />
    </div>
  );
};

export default Avatar;
