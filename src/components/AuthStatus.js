import { useHistory } from "react-router-dom";
import { useAuth } from "../utils/auth";

export default function AuthStatus() {
  let history = useHistory();
  let auth = useAuth();

  function renderLoginButton(r) {
    if (r === "admin") {
      return (
        <button
          onClick={() => {
            auth.unsetAdmin(() => history.push("/"));
          }}
        >
          Become Normal User
        </button>
      );
    } else if (r === "user") {
      return (
        <button
          onClick={() => {
            auth.setAdmin(() => history.push("/"));
          }}
        >
          Become Admin
        </button>
      );
    } else {
      return null;
    }
  }

  return auth.user ? (
    <p>
      You are viewing this page as {auth.user}
      {renderLoginButton(auth.user)}
      <button
          onClick={() => {
            auth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}
