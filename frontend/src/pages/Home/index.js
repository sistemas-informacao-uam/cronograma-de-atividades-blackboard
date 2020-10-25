import React from 'react';

import Logo from '../../assets/logo.webp';
import {
  Container,
  Header,
  Content,
  LoginContainer,
  LoginBox,
  Title,
  Error,
  LoginInfo,
  Button
} from './styles';

const Home = () => {

  return (
    <Container>
      <Header />
      <Content>
        <LoginContainer>
          <img src={Logo} alt="Logotipo" />
          <h2>Seja Bem-Vindo!</h2>

          <LoginBox>
            <Title>
              <div>
                <p>Acesse seu Ambiente</p>
                <p>Virtual de Aprendizagem</p>
              </div>
            </Title>

            <Error>
              <p>O usuário ou senha fornecido é inválido.</p>
            </Error>

            <LoginInfo>
              <input type="text" placeholder="Usuário" />
              <div>
                <input type="password" placeholder="Senha" />
                <Button><a href="#" alt="Logar">ACESSAR</a></Button>
              </div>
            </LoginInfo>

          </LoginBox>

        </LoginContainer>
      </Content>
    </Container>
  );
};

export default Home;
