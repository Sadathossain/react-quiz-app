import { useHistory } from "react-router-dom";
import { useAuth } from "../utils/auth";
import Button from '@material-ui/core/Button';

export default function AuthStatus() {
  let history = useHistory();
  let auth = useAuth();

  function renderLoginButton(r) {
    if (r === "admin") {
      return (
        <Button variant="contained" color="default"
          onClick={() => {
            auth.unsetAdmin(() => history.push("/"));
          }}
        >
          Become Normal User
        </Button>
      );
    } else if (r === "user") {
      return (
        <Button variant="contained" color="primary"
          onClick={() => {
            auth.setAdmin(() => history.push("/"));
          }}
        >
          Become Admin
        </Button>
      );
    } else {
      return null;
    }
  }

  return auth.user ? (
    <p>
      You are viewing this page as {auth.user}
      {renderLoginButton(auth.user)}
      <Button variant="contained" color="secondary"
          onClick={() => {
            auth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </Button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}
