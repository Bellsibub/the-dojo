import styles from './Card.module.css'

const Card = ({ children, ...props }) => {
  
  const classes = [
    styles.card,
    props.central && styles.central,
    props.page && styles.page
  ]
  
  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default Card;