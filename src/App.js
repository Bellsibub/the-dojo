import { BrowserRouter as Router, Switch } from 'react-router-dom';

// hooks
import { useAuth } from 'hooks/useAuth';

// pages
import { Dashboard, Login, Signup, Project, Create } from 'pages';

// components
import { Navbar, Sidebar } from 'components';

// styles
import './App.css';
import { ProtectedRoute, UnprotectedRoute } from 'utils/RouteGuard';

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <Router>
        {user && <Sidebar />}
        <div className="container">
          <Navbar />
          <Switch>
            <ProtectedRoute exact path="/" component={<Dashboard />} />
            <ProtectedRoute path="/create" component={<Create />} />
            <ProtectedRoute path="/project/:id" component={<Project />} />
            <UnprotectedRoute path="/login" component={<Login />} />
            <UnprotectedRoute path="/signup" component={<Signup />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
