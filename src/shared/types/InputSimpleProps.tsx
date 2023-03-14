export interface InputSimpleProps {
  label: string;
  helperText?: string;
  error?: boolean;
  id: 'email' | 'name' | 'password' | 'repeatPassword' | 'product' | 'description';
  onChange: (
    id: 'email' | 'name' | 'password' | 'repeatPassword' | 'product' | 'description',
    value: string,
  ) => void;
}
