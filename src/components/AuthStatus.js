import { useHistory } from "react-router-dom";
import { useAuth } from "../utils/auth";
import {
  Button,
  ButtonGroup,
  Grid,
  Typography
 } from '@material-ui/core';

export default function AuthStatus() {
  let history = useHistory();
  let auth = useAuth();

  function renderLoginButton(r) {
    if (r === "admin") {
      return (
        <Button onClick={() => {auth.unsetAdmin(() => history.push("/answers"))}}>
          Become User
        </Button>
      );
    } else if (r === "user") {
      return (
        <Button onClick={() => {auth.setAdmin(() => history.push("/questions"))}}>
          Become Admin
        </Button>
      );
    } else {
      return null;
    }
  }

  return auth.user ? (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={9}>
        <Typography variant="subtitle1" style={{marginLeft: '20px'}}>You are viewing this page as {auth.user}</Typography>
      </Grid>
      <Grid item xs={3}>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        {renderLoginButton(auth.user)}
        <Button onClick={() => {auth.signout(() => history.push("/"))}}>
          Sign out
        </Button>
      </ButtonGroup>
      </Grid>
    </Grid>
  ) : (
    <Typography variant="h5" style={{ textAlign: 'center' }}>
      You are not logged in.
    </Typography>
  );
}
