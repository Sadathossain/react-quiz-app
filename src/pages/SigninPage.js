import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from '../utils/auth';

export default function SigninPage() {
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state || { from: { pathname: "/" } };
    let loginAsAdmin = () => {
      auth.setAdmin(() => {
        history.replace(from);
      });
    };
    let loginAsUser = () => {
      auth.unsetAdmin(() => {
        history.replace(from);
      });
    };

    return auth.user === 'user' ? (
      <div>
        {/* Admin prompt */}
        <p>You must be an Admin to view the page at {from.pathname}</p>
        <button onClick={loginAsAdmin}>Log in As Admin</button>
      </div>
    ) : (
      <div>
        {/* Signin prompt */}
        <p>You must Signin to view the page at {from.pathname}</p>
        <button onClick={loginAsUser}>Log in As User</button>
        <button onClick={loginAsAdmin}>Log in As Admin</button>
      </div>
    );
  }