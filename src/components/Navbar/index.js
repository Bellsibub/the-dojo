import { NavLink } from 'react-router-dom';

// hooks
import { useLogout } from 'hooks/useLogout';
import { useAuth } from 'hooks/useAuth';

// styles
import styles from './Navbar.module.css';
import Temple from 'assets/temple.svg';
import { BtnOutline } from 'components';

function Navbar() {
  const { logout, loading } = useLogout();
  const { user } = useAuth();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.contents}>
        <li className={styles.logo}>
          <img src={Temple} alt="dojo logo" />
          <span>The Dojo</span>
        </li>

        {user ? (
          <li>
            {!loading && <BtnOutline onClick={logout}>Logout</BtnOutline>}
            {loading && <BtnOutline disabled>Logging out...</BtnOutline>}
          </li>
        ) : (
          <>
            <li>
              <NavLink
                className={styles.links}
                to="/login"
                activeClassName="navbar-selected"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.links}
                to="/signup"
                activeClassName="navbar-selected"
              >
                Signup
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
