export interface InputPasswordProps {
  label: string;
  helperText?: string;
  error?: boolean;
  id: string;
  onChange: (id: string, value: string) => void;
}
