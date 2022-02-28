import { Link, useHistory } from 'react-router-dom';

// styles
import styles from './Navbar.module.css';
import Temple from 'assets/temple.svg';
import { BtnOutline } from 'components';

function Navbar() {
  const history = useHistory();
  return (
    <nav className={styles.navbar}>
      <ul className={styles.contents}>
        <li className={styles.logo}>
          <img src={Temple} alt="dojo logo" />
          <span>The Dojo</span>
        </li>
        <li>
          <Link className={styles.links} to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className={styles.links} to="/signup">
            Signup
          </Link>
        </li>
        <li>
          <BtnOutline onClick={() => history.push('/login')}>Logout</BtnOutline>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
