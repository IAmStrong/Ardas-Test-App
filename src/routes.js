import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Tasks from './components/Tasks/Tasks';
import App from './components/App/App';
import Task from './components/Task/Task';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/tasks" />
    <Route path="/tasks" component={Tasks} />
    <Route path="/tasks/:id" component={Task} />
  </Route>
);
