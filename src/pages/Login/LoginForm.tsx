import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/contexts/AuthContext";
import { ButtonSubmit, InputPassword, InputSimple, Form } from "../components";

type AuthProps = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const [auth] = React.useState<AuthProps>({
    email: "",
    password: "",
  });

  const handleInputChange = (id: string, value: string) => {
    id === "email" ? (auth.email = value) : (auth.password = value);
  };

  const { singIn } = React.useContext(AuthContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    singIn(auth.email, auth.password);
  };

  return (
    <React.Fragment>
      <Form maxWidth="md">
        <InputSimple
          label={"E-mail"}
          id={"email"}
          onChange={handleInputChange}
        />
        <InputPassword
          label={"Password"}
          id={"password"}
          onChange={handleInputChange}
        />
        <ButtonSubmit
          type={"submit"}
          loadingIndicator={"Conectando..."}
          onClick={handleSubmit}
        >
          Conectar
        </ButtonSubmit>
        <button>
          <Link to={"/singup"}>cadastrar</Link>
        </button>
      </Form>
    </React.Fragment>
  );
};
