import React from "react";
import { AuthContext } from "../../shared/contexts/AuthContext";
import {
  ButtonSubmit,
  InputPassword,
  InputSimple,
  Form,
  NavButton,
} from "../components";

type AuthProps = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const [auth] = React.useState<AuthProps>({
    email: "",
    password: "",
  });

  const handleInputChange = (id: string, value: string) => {
    id === "email" ? (auth.email = value) : (auth.password = value);
  };

  const { singIn, error } = React.useContext(AuthContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!auth.email) {
      newErrors.email = "Campo Obrigatório";
    }
    if (!auth.password) {
      newErrors.password = "Campo Obrigatório";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    singIn(auth.email, auth.password);
  };

  return (
    <React.Fragment>
      <Form maxWidth="md">
        <InputSimple
          label={"E-mail"}
          id={"email"}
          error={Boolean(errors.email)}
          helperText={errors.email}
          onChange={handleInputChange}
        />
        <InputPassword
          label={"Senha"}
          id={"password"}
          error={Boolean(errors.password)}
          helperText={errors.password}
          onChange={handleInputChange}
        />
        <ButtonSubmit
          type={"submit"}
          loadingIndicator={"Conectando..."}
          onClick={handleSubmit}
        >
          Conectar
        </ButtonSubmit>
        <NavButton to="/singup">
          Não possui conta? Cadastre-se agora!!
        </NavButton>
      </Form>
    </React.Fragment>
  );
};
