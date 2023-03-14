import { Grid } from '@mui/material';
import React from 'react';
import { AuthContext } from '../../shared/contexts/AuthContext';
import { RegisterProductProps } from '../../shared/types';
import { Form, GridForm, InputSimple } from '../components';
import ButtonForm from '../components/Form/Button/ButtonSubmit';
import NavBar from '../Nav/NavBar';

export const Todo = () => {
  const { logout } = React.useContext(AuthContext);
  const [list] = React.useState<RegisterProductProps>({
    id: 0,
    product: '',
    description: '',
    price: 0,
    stock: 0,
    enable: false,
  });
  const [listProducts, setListProducts] = React.useState<RegisterProductProps[]>([]);
  const handleInputChange = (id: string, value: any) => {
    switch (id) {
      case 'product':
        list.product = value;
        break;
      case 'description':
        list.description = value;
        break;
      case 'price':
        list.price = value;
        break;
      case 'stock':
        list.stock = value;
        break;
      case 'enable':
        list.enable = value;
        break;
    }
  };
  const addList = (e: any) => {
    e.preventDefault();
    const id = new Date().getTime();

    setListProducts([
      ...listProducts,
      {
        id: id,
        product: list.product,
        description: list.description,
        price: list.price,
        stock: list.stock,
        enable: list.enable,
      },
    ]);
  };
  return (
    <>
      <Grid container justifyContent={'center'} height={'100vh'}>
        <Grid item xs={2}>
          <NavBar />
        </Grid>
        <Grid item bgcolor={'#333'} xs={10}>
          {/* <Form>
            <GridForm>
              <InputSimple label="Tarefa" id="product" onChange={handleInputChange} />
            </GridForm>
            <GridForm>
              <InputSimple label="Detalhamento" id="description" onChange={handleInputChange} />
            </GridForm>
            <GridForm>
              <ButtonForm loadingIndicator="cadastrando..." onClick={addList}>
                Cadastrar
              </ButtonForm>
            </GridForm>
          </Form> */}
        </Grid>
      </Grid>
    </>
  );
};
