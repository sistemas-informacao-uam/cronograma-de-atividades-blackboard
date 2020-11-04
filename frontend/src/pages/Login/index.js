import React, { useContext, useEffect } from 'react';

import Lottie from 'react-lottie';
import axios from 'axios';

import Logo from '../../assets/logo.webp';

import animationData from '../../lotties/loading-white.json';

import {
  Container,
  Header,
  Content,
  LoginContainer,
  LoginBox,
  Title,
  Error,
  LoginInfo,
  Button,
  Phrase,
} from './styles';

import { useState } from 'react';

import { Context } from '../../Context/AuthContext';

const Login = () => {
  const { handleLogin } = useContext(Context);

  const [userInputValue, setUserInputValue] = useState('');

  const [phrase, setPhrase] = useState('');

  useEffect(() => {
    (async () => {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const apiFrases = 'https://api-frases-php.herokuapp.com/';

      const response = await axios.get(proxyurl + apiFrases);
      
      setPhrase(response.data);
    })();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Container>
      <Header> 
        {phrase 
        ? (
          <Phrase>{phrase}</Phrase>
        ) 
        : (
          <Lottie 
            options={defaultOptions}
            height={45}
            width={45}
          />  
        ) 
      }
      </Header>
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