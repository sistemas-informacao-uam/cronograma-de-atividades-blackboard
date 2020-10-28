import React from 'react';
import { Link, useHistory } from 'react-router-dom';

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

import { useUser } from '../../context/User';
import { useCallback } from 'react';
import { useState } from 'react';

import { studentFakeData, professorFakeData } from '../../fakeData';

const Login = () => {
  const history = useHistory();

  const { setUser } = useUser();

  const [userInputValue, setUserInputValue] = useState('');

  const handleLogin = useCallback(() => {
    if (userInputValue === 'aluno') {
      setUser(studentFakeData);
    } else if (userInputValue === 'professor') {
      setUser(professorFakeData);
    } else {
      setUser({name: '', subjects: []});
    }
    history.push('/');
  }, [setUser, userInputValue, history]);

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
              <input type="text" onChange={(e) => setUserInputValue(e.target.value)} value={userInputValue} placeholder="Usuário" />
              <div>
                <input type="password" placeholder="Senha" />
                <Button type="button" onClick={handleLogin}>
                  <p>ACESSAR</p>
                </Button>
              </div>
            </LoginInfo>

          </LoginBox>

        </LoginContainer>
      </Content>
    </Container>
  );
};

export default Login;
