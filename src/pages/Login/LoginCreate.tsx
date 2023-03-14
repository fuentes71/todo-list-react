import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../shared/contexts/AuthContext';
import { AlertToast } from '../../shared/contexts/SnackbarAlert';
import { AuthCreateProps } from '../../shared/types';
import { ButtonSubmit, InputPassword, InputSimple, Form, NavButton } from '../components';

export const LoginCreate: React.FC = () => {
  const { singUp, error } = React.useContext(AuthContext);
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const [auth] = React.useState<AuthCreateProps>({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const fullNameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;

  const handleInputChange = (id: string, value: string) => {
    switch (id) {
      case 'email':
        auth.email = value;
        break;
      case 'name':
        auth.name = value;
        break;
      case 'password':
        auth.password = value;
        break;
      case 'repeatPassword':
        auth.repeatPassword = value;
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    if (!auth.name) {
      newErrors.name = 'Campo Obrigatório';
    }

    // eslint-disable-next-line eqeqeq
    if (auth.password != auth.repeatPassword) {
      newErrors.repeatPassword = 'As senhas precisam ser iguais';
    }

    if (!auth.repeatPassword) {
      newErrors.repeatPassword = 'Campo Obrigatório';
    }

    if (fullNameRegex.test(auth.name)) {
      newErrors.name = 'Insira o nome completo';
    }

    if (!emailRegex.test(auth.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!passwordRegex.test(auth.password)) {
      newErrors.password =
        'A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    singUp(auth.name, auth.email, auth.password);
  };

  return (
    <>
      <Form>
        {/* {error && <AlertToast children="teste" severity="success"/>} */}
        <InputSimple
          label={'Nome Completo'}
          id={'name'}
          error={Boolean(errors.name)}
          helperText={errors.name}
          onChange={handleInputChange}
        />
        <InputSimple
          label={'E-mail'}
          id={'email'}
          error={Boolean(errors.email)}
          helperText={errors.email}
          onChange={handleInputChange}
        />
        <InputPassword
          label={'Senha'}
          id={'password'}
          error={Boolean(errors.password)}
          helperText={errors.password}
          onChange={handleInputChange}
        />
        <InputPassword
          label={'Confirme a senha'}
          id={'repeatPassword'}
          error={Boolean(errors.repeatPassword)}
          helperText={errors.repeatPassword}
          onChange={handleInputChange}
        />
        <ButtonSubmit loadingIndicator={'Loading...'} onClick={handleSubmit}>
          Cadastrar
        </ButtonSubmit>
        <NavButton link="Faça o login!" to="/singin">
          Já possui conta?
        </NavButton>
      </Form>
    </>
  );
};
