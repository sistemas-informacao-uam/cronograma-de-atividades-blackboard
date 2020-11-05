import React, { useContext } from 'react';
import Header from '../../components/Header';
import Schedule from '../../components/Schedule';
import Subject from '../../components/Subject';

import { Context } from '../../Context/AuthContext';

import {
  Container,
  SubjectsList,
} from './styles';

const Home = () => {
  const { user } = useContext(Context);

  return (
    <>
      <Header />
      <Container>
        <h1>{user.type === 'student' ? 'Minhas Disciplinas' : 'Disciplinas que dou Aula'}</h1>
        <SubjectsList>
          {user.subjects.map((subject, index) => <Subject key={index} title={subject} />)}
        </SubjectsList>

          <h1>{user.type === 'student' ? 'Cronograma de Atividades' : 'Atividades Cadastradas'}</h1>
          <Schedule />
      </Container>
    </>
  );
};

export default Home;
