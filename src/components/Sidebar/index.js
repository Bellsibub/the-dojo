import { NavLink } from 'react-router-dom';

// styles and images
import styles from './Sidebar.module.css';
import UserImage from 'assets/temple.svg';
import { ReactComponent as DashboardIcon } from 'assets/dashboard_icon.svg';
import { ReactComponent as AddIcon } from 'assets/add_icon.svg';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.user}>
          <img src={UserImage} alt="" />
          <span>Username</span>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <NavLink activeClassName="sidebar-selected" exact to="/">
                <DashboardIcon title="icon for dashboard page" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="sidebar-selected" to="/login">
                <AddIcon title="icon for add new project" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
