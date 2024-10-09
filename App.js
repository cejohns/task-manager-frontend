// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import User from './components/User';
import TaskList from './pages/TaskList';
import WorkOrderList from './pages/WorkOrderList';
import Navbar from './components/Navbar';
import WorkOrderList from './pages/WorkOrderList';
import UserProfile from './pages/UserProfile';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/user/:userId" component={User} />
        <Route path="/tasks" component={TaskList} />
        <Route path="/workorders" component={WorkOrderList} />
      </Switch>
    </Router>
  );
};

export default App;
