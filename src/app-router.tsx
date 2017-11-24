import * as React from 'react';

import { Route, Router } from 'react-router-dom';
import { ToDoList } from './pages';

import { appHistory } from './app-history';
import { routes } from './routes';

export const AppRouter = () => {
  return (
    <Router history={appHistory()}>
      <div>
        <Route exact={true} path={routes.home()} component={ToDoList} />
        <Route exact={true} path={routes.todoItemDetail(':id')} component={ToDoList} />
      </div>
    </Router>
  )
}