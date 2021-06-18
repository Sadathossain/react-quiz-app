import { useContext, createContext } from "react";
import usePersistedState from "./usePersistedState";

const authContext = createContext();

function useProvideAuth() {
  const [user, setUser] = usePersistedState('user', null);

  const setAdmin = () => setUser('admin')
  const unsetAdmin = () => setUser('user')
  const signout = () => setUser(null)

  return {
    user,
    setAdmin,
    unsetAdmin,
    signout
  };
}

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
