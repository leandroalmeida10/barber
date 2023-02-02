import { useState } from 'react';
import * as Styled from './styles';
import {Button, Input} from '@mui/material';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (  
    <Styled.Structure>
      <Styled.Container>
        <Styled.ContainerForm>
          <Styled.Form>Email</Styled.Form>
            <Styled.InputForm>
              <Input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{width: '60%', height: '40px', borderRadius: '10px'}}
              />
            </Styled.InputForm>
          <Styled.Form>Senha</Styled.Form>
          <Styled.InputForm>
              <Input 
                type="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                style={{width: '60%', height: '40px', borderRadius: '10px'}}
              />
            </Styled.InputForm>
          <Styled.Button>
            <Button
              variant='contained'
              href='/cadastrar'
              color='success'>Cadastrar</Button>
          </Styled.Button>
        </Styled.ContainerForm>
      </Styled.Container>
    </Styled.Structure>
  );
};
export default Login;