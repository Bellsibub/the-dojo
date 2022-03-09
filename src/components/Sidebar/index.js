import { NavLink } from 'react-router-dom';

// hooks
import { useAuth } from 'hooks/useAuth';

// components
import { Avatar } from 'components';

// styles and images
import styles from './Sidebar.module.css';
import { ReactComponent as DashboardIcon } from 'assets/dashboard_icon.svg';
import { ReactComponent as AddIcon } from 'assets/add_icon.svg';

const Sidebar = () => {
  const { user } = useAuth();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.user}>
          <Avatar src={user.photoURL} outlined />
          <span>{user.displayName}</span>
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
              <NavLink activeClassName="sidebar-selected" to="/create">
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
