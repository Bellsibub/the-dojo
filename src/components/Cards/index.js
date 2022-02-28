import styles from './Card.module.css'

export const CardCentral = ({ children }) => {
  return (
    <div className={styles.central}>
      {children}
    </div>
  )
}