// hooks
import { useSnapshotDB } from 'hooks/useSnapshotDB';

// components
import { Avatar, ErrorMessage } from 'components';

// styles
import styles from './Users.module.css';
import Loading from 'components/Loading';

const Users = () => {
  const { error, documents, loading } = useSnapshotDB('users');
  return (
    <div className={styles.container}>
      <h2>Users</h2>
      {error && <ErrorMessage msg={error} />}
      {loading && <Loading text="Fething users.." contained />}
      {documents && (
        <div className={styles.contentWrapper}>
          {documents.map((user) => (
            <div key={user.uid} className={styles.content}>
              <span>{user.displayName}</span>
              <Avatar src={user.photoURL} outlinedPrimary />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
