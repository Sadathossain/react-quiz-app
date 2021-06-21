import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import {
  Container,
  CssBaseline,
  AppBar,
  createMuiTheme,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";

import { ProvideAuth, useAuth } from "../utils/auth";

import AuthStatus from "../components/AuthStatus";
import AnswersPage from "../pages/AnswersPage";
import SigninPage from "../pages/SigninPage";
import QuestionsPage from "../pages/QuestionsPage";
import ManagePage from "../pages/ManagePage";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      marginTop: "10vh",
    },
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <ProvideAuth>
        <Router>
          <Container>
            <CssBaseline />
            <AppBar>
              <AuthStatus />
            </AppBar>

            <div className={classes.root}>
              <ButtonGroup
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
              >
                <Link to="/answers">
                  <Button>Answer Page</Button>
                </Link>
                <Link to="/questions">
                  <Button>Question Page</Button>
                </Link>
                <Link to="/manage">
                  <Button>Manage Page</Button>
                </Link>
              </ButtonGroup>
            </div>

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
              <AdminRoute path="/manage">
                <ManagePage />
              </AdminRoute>
            </Switch>
          </Container>
        </Router>
      </ProvideAuth>
    </ThemeProvider>
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
              state: { from: location },
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
        auth.user === "admin" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
