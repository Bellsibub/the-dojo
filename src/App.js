import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// pages
import { Dashboard, Login, Signup, Project, Create } from 'pages';

// components
import { Navbar, Sidebar } from 'components';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Sidebar />
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/create" component={Create} />
            <Route path="/project/:id" component={Project} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
