import React from "react";
import {
  UseGetLocalStorage,
  UseRemoveLocalStorage,
  UseSetLocalStorage,
} from "../../shared/hooks";
interface AuthContextProps {
  isAuthenticated: boolean;
  loading: boolean;
  error: boolean;
  data: string[];
  singIn: (email: string, password: string) => void;
  singUp: (
    email: string,
    password: string,
    repeatPassword: string,
    name: string
  ) => void;
  logout: () => void;
}
type User = {
  name: string;
  email: string;
  password: string;
  todo: string[];
};
export const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const data =
    UseGetLocalStorage("data") === null ? [] : UseGetLocalStorage("data");
  const [isAuthenticated, setIsAuthenticated] = React.useState(() => {
    const isAuthenticated =
      UseGetLocalStorage("isAuthenticated") === null
        ? false
        : UseGetLocalStorage("isAuthenticated");
    if (isAuthenticated) {
      return isAuthenticated;
    }
    return false;
  });
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<User[]>();
  React.useEffect(() => {
    if (isAuthenticated) {
      UseSetLocalStorage("isAuthenticated", isAuthenticated);
    } else {
      UseRemoveLocalStorage("isAuthenticated");
    }
  }, [isAuthenticated]);

  const singIn = (email: string, password: string) => {
    setLoading(true);
    setTimeout(() => {
      if (!data) {
        // <SnackbarAlert
        //   severity="error"
        //   message="Não foi possível carregar os dados de usuários"
        //   open={true}
        // />;
        setError(true);
        setLoading(false);
        return;
      }

      if (!email || !password) {
        // <SnackbarAlert
        //   severity="error"
        //   message="Preencha todos os campos!"
        //   open={true}
        // />;
        setError(true);
        setLoading(false);
        return;
      }

      const filteredData = data.filter(
        (el: User) => el.email === email && el.password === password
      );

      if (filteredData.length === 0) {
        // <SnackbarAlert
        //   severity="error"
        //   message="E-mail ou senha incorretos!"
        //   open={true}
        // />;
        setError(true);
      } else {
        const users: User[] = filteredData.map((el: User) => ({
          name: el.name,
          email: el.email,
          todo: el.todo,
        }));
        setUser(users);
        setError(false);
        setIsAuthenticated(true);
      }
      setLoading(false);
    }, 1000);
  };

  const singUp = (
    name: string,
    email: string,
    password: string,
    repeatPassword: string
  ) => {
    data.push({ name: name, email: email, password: password, todo: [] });
    console.log(data);
  };

  const logout = () => {
    console.log(user);

    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, singIn, singUp, logout, data, error, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
