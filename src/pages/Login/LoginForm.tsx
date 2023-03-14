import React from 'react';
import { AuthContext } from '../../shared/contexts/AuthContext';
import { ButtonSubmit, InputPassword, InputSimple, Form, NavButton } from '../components';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { AlertToast } from '../../shared/contexts/SnackbarAlert';
import { AuthLoginProps } from '../../shared/types';

export const LoginForm: React.FC = () => {
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const { singIn, error } = React.useContext(AuthContext);

  const [auth] = React.useState<AuthLoginProps>({
    email: '',
    password: '',
  });

  const handleInputChange = (id: string, value: string) => {
    id === 'email' ? (auth.email = value) : (auth.password = value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!auth.email) {
      newErrors.email = 'Campo Obrigatório';
    }
    if (!auth.password) {
      newErrors.password = 'Campo Obrigatório';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    singIn(auth.email, auth.password);
    console.log(error);
  };

  return (
    <>
      <Form>
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
        <ButtonSubmit loadingIndicator={'Conectando...'} onClick={handleSubmit}>
          Conectar
        </ButtonSubmit>
        {error && <AlertToast children={error[0]} severity={error[1]} title={error[2]} />}

        <NavButton link="Cadastre-se agora!" to="/singup">
          Não possui conta?
        </NavButton>
      </Form>
    </>
  );
};
