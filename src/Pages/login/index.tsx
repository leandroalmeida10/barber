import { useState } from 'react';
import * as Styled from './styles';
import imageBackground from '../../assets/images/background.jpg';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  return (  
  <Styled.Container>
    <Styled.ContainerLogo>
      <Styled.Logo src={imageBackground}/>
    </Styled.ContainerLogo>
    <Styled.ContainerForm>
      <Styled.TitleForm>Leandro</Styled.TitleForm>
    </Styled.ContainerForm>
  </Styled.Container>
  );
};
export default Login;