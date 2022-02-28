import styles from './Button.module.css'

export const BtnOutline = ({ children, ...props }) => {
  return (
    <button className={styles.btnOutline} {...props}>
      {children}
    </button>
  )
}
export const BtnMain = ({ children, ...props }) => {
  return (
    <button className={styles.btnMain} {...props}>
      {children}
    </button>
  )
}