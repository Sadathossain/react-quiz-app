import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { ProvideAuth, useAuth } from "../utils/auth";

import AuthStatus from '../components/AuthStatus'
import AnswersPage from '../pages/AnswersPage'
import SigninPage from '../pages/SigninPage'
import QuestionsPage from '../pages/QuestionsPage'

export default function Main() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthStatus />

          <ul>
            <li>
              <Link to="/answers">Answers Page</Link>
            </li>
            <li>
              <Link to="/questions">Questions Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/signin">
              <SigninPage />
            </Route>
            <UserRoute path="/answers">
              <AnswersPage />
            </UserRoute>
            <AdminRoute path="/questions">
              <QuestionsPage />
            </AdminRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}
// A wrapper for AnyUser routes
function UserRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user !== null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
// A wrapper for AdminOnly routes
function AdminRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user === 'admin' ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
