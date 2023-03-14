import React from 'react';
import { UseGetLocalStorage, UseRemoveLocalStorage, UseSetLocalStorage } from '../../shared/hooks';
import { AuthContextProps, UserProps } from '../types';

export const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const data = UseGetLocalStorage('data') === null ? [] : UseGetLocalStorage('data');
  const [isAuthenticated, setIsAuthenticated] = React.useState(() => {
    const isAuthenticated =
      UseGetLocalStorage('isAuthenticated') === null
        ? false
        : UseGetLocalStorage('isAuthenticated');
    if (isAuthenticated) {
      return isAuthenticated;
    }
    return false;
  });
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string[] | false>(false);
  const [user, setUser] = React.useState<UserProps[]>();
  React.useEffect(() => {
    if (isAuthenticated) {
      UseSetLocalStorage('isAuthenticated', isAuthenticated);
    } else {
      UseRemoveLocalStorage('isAuthenticated');
    }
  }, [isAuthenticated]);

  const singIn = (email: string, password: string): void => {
    setLoading(true);
    setTimeout(() => {
      const filteredData = data.filter(
        (el: UserProps) => el.email === email && el.password === password,
      );

      if (filteredData.length === 0) {
        setError(['Nenhum e-mail cadastrado', 'error', 'ERROR']);

        setLoading(false);
        return;
      }

      const user: UserProps[] = filteredData.map((el: UserProps) => ({
        name: el.name,
        email: el.email,
        todo: el.todo,
      }));
      setUser(user);
      setError(false);
      console.log(error);

      setLoading(false);
      setIsAuthenticated(true);
      return;
    }, 1000);
  };

  const singUp = (name: string, email: string, password: string) => {
    setLoading(true);
    setTimeout(() => {
      const validate = data.some((el: { email: string }) => el.email === email);
      if (validate) {
        console.log('email ja cadastrado');
        console.log(data);
        setLoading(false);
        return;
      }

      data.push({ name: name, email: email, password: password, todo: [] });
      UseSetLocalStorage('data', data);
      setLoading(false);
      console.log('usuario cadastrado', data);
    }, 1000);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, singIn, singUp, logout, data, error, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
