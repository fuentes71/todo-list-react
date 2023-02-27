import React from "react";
import {
  UseGetLocalStorage,
  UseRemoveLocalStorage,
  UseSetLocalStorage,
} from "../../shared/hooks";
interface IAuthContext {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  data: string[];
  login: (email: string, password: string) => void;
  logout: () => void;
}
type User = {
  name: string;
  email: string;
  password: string;
  todo: string[];
};
export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const data = UseGetLocalStorage("data", []);
  const [isAuthenticated, setIsAuthenticated] = React.useState(() => {
    const isAuthenticated = UseGetLocalStorage("isAuthenticated", false);
    if (isAuthenticated) {
      return isAuthenticated;
    }
    return false;
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [user, setUser] = React.useState<User[]>();
  React.useEffect(() => {
    if (isAuthenticated) {
      UseSetLocalStorage("isAuthenticated", isAuthenticated);
    } else {
      UseRemoveLocalStorage("isAuthenticated");
    }
  }, [isAuthenticated]);

  const login = (email: string, password: string) => {
    setLoading(true);
    setTimeout(() => {
      if (!data) {
        setError("Não foi possível carregar os dados de usuários");
        setLoading(false);
        return;
      }

      const filteredData = data.filter(
        (el: User) => el.email === email && el.password === password
      );

      if (filteredData.length === 0) {
        setError("E-mail ou senha incorretos!");
      } else {
        const users: User[] = filteredData.map((el: User) => ({
          name: el.name,
          email: el.email,
          todo: el.todo,
        }));
        setUser(users);
        setError(null);
        setIsAuthenticated(true);
      }
      setLoading(false);
    }, 1000);
  };
  const logout = () => {
    console.log(user);

    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, data, error, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
