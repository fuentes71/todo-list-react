export interface ButtonSubmitProps {
  children: React.ReactNode;
  loadingIndicator: string;
  onClick?: (e: React.FormEvent) => void;
}
