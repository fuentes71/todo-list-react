import React from "react";

interface IErrorContextType {
  error: string | null;
  setError: (errorMessage: string | null) => void;
}

export const ErrorContext = React.createContext<IErrorContextType>({
  error: null,
  setError: () => {},
});

export const ErrorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [error, setError] = React.useState<string | null>(null);
  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};
