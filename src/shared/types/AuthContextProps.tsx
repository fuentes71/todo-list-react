export interface AuthContextProps {
  isAuthenticated: boolean;
  loading: boolean;
  error: string[] | false;
  data: string[];
  singIn: (email: string, password: string) => void;
  singUp: (email: string, password: string, name: string) => void;
  logout: () => void;
}
