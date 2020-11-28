import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Lottie from "react-lottie";
import axios from "axios";

import Logo from "../../assets/logo.webp";

import animationData from "../../assets/lotties/loading-white.json";

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
} from "./styles";

import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const [phrase, setPhrase] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const verifica = await login(email, password);
    if (verifica !== "auth/invalid-email") {
      setLoading(true);
      await login(email, password);
      setError(false);
      history.push("/");
    } else {
      setError(true);
    }

    setLoading(false);
  }

  useEffect(() => {
    (async () => {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const apiFrases = "https://api-frases-php.herokuapp.com/";

      const response = await axios.get(proxyurl + apiFrases);

      setPhrase(response.data);
    })();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Header>
        {phrase ? (
          <Phrase>{phrase}</Phrase>
        ) : (
            <Lottie options={defaultOptions} height={45} width={45} />
          )}
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

            <Error error={error}>
              <p>O usuário ou senha fornecido é inválido.</p>
            </Error>

            <LoginInfo onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Usuário"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <div>
                <input
                  type="password"
                  placeholder="Senha"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <Button disabled={loading} type="submit" onClick={login}>
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
